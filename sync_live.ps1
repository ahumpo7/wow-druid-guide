# WoW Forever - Zero-Dependency PowerShell Live Syncer (for PCs without Node.js)
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$GistId = "584b8b9450a8b85003934d27acfa7c7c"
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$StateFile = Join-Path $ScriptDir ".ps_sync_state.json"

function Get-GitHubToken {
    $tokenFile = Join-Path $ScriptDir "github_token.txt"
    if (Test-Path $tokenFile) {
        $t = (Get-Content $tokenFile -Raw -ErrorAction SilentlyContinue).Trim()
        if ($t) { return $t }
    }
    if (Get-Command gh -ErrorAction SilentlyContinue) {
        try {
            $t = (gh auth token 2>$null)
            if ($t) { return $t.Trim() }
        } catch {}
    }
    if (Get-Command git -ErrorAction SilentlyContinue) {
        try {
            $credInput = "protocol=https`nhost=github.com`n`n"
            $credOut = $credInput | git credential fill 2>$null
            foreach ($line in $credOut) {
                if ($line -match "^password=(.+)$") {
                    return $Matches[1].Trim()
                }
            }
        } catch {}
    }
    return $null
}

# 1. Locate all WoWGuide.lua SavedVariables files
$possibleRoots = @(
    "C:\Program Files (x86)\World of Warcraft\_forever_\WTF\Account",
    "C:\Program Files\World of Warcraft\_forever_\WTF\Account",
    "D:\World of Warcraft\_forever_\WTF\Account",
    "E:\World of Warcraft\_forever_\WTF\Account",
    "C:\World of Warcraft\_forever_\WTF\Account",
    "C:\Games\World of Warcraft\_forever_\WTF\Account",
    "D:\Games\World of Warcraft\_forever_\WTF\Account",
    (Join-Path $env:USERPROFILE "Desktop\World of Warcraft\_forever_\WTF\Account"),
    (Join-Path $env:USERPROFILE "Games\World of Warcraft\_forever_\WTF\Account")
)

$wgFiles = @()
foreach ($root in $possibleRoots) {
    if (Test-Path $root) {
        $found = Get-ChildItem -Path $root -Filter "WoWGuide.lua" -Recurse -File -ErrorAction SilentlyContinue
        foreach ($f in $found) { $wgFiles += $f }
    }
}

if ($wgFiles.Count -eq 0) {
    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] [!] No WoWGuide.lua found in WTF\Account. Type /reload in-game on this PC first." -ForegroundColor Yellow
    exit 0
}

# 2. Check if any WoWGuide.lua changed since last run
$prevState = @{}
if (Test-Path $StateFile) {
    try {
        $rawState = Get-Content $StateFile -Raw | ConvertFrom-Json
        foreach ($p in $rawState.PSObject.Properties) {
            $prevState[$p.Name] = $p.Value
        }
    } catch {}
}

$changed = $false
$newState = @{}
foreach ($f in $wgFiles) {
    $ts = $f.LastWriteTimeUtc.ToString("o")
    $newState[$f.FullName] = $ts
    if ($prevState[$f.FullName] -ne $ts) {
        $changed = $true
    }
}

if (-not $changed) {
    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] [OK] Watching $($wgFiles.Count) WoWGuide.lua file(s) - no new /reload yet." -ForegroundColor DarkGray
    exit 0
}

# 3. Parse characters from WoWGuide.lua using brace-depth scanning
$parsedChars = @()
foreach ($f in $wgFiles) {
    $content = Get-Content -Path $f.FullName -Raw -ErrorAction SilentlyContinue
    if (-not $content) { continue }

    $regexMatches = [regex]::Matches($content, '\["([^"\]]+)"\]\s*=\s*\{')
    foreach ($m in $regexMatches) {
        $charName = $m.Groups[1].Value
        if ($charName -eq "equip") { continue }

        $depth = 1
        $idx = $m.Index + $m.Length
        while ($idx -lt $content.Length -and $depth -gt 0) {
            $ch = $content[$idx]
            if ($ch -eq '{') { $depth++ }
            elseif ($ch -eq '}') { $depth-- }
            $idx++
        }
        if ($depth -ne 0) { continue }

        $block = $content.Substring($m.Index + $m.Length, $idx - 1 - ($m.Index + $m.Length))
        $lvlM = [regex]::Match($block, '\["level"\]\s*=\s*(\d+)')
        $clsM = [regex]::Match($block, '\["class"\]\s*=\s*"([^"]+)"')
        $monM = [regex]::Match($block, '\["money"\]\s*=\s*(\d+)')
        $updM = [regex]::Match($block, '\["updatedAt"\]\s*=\s*(\d+)')

        if ($lvlM.Success -and $clsM.Success) {
            $clsLower = $clsM.Groups[1].Value.ToLower()
            $parsedChars += [PSCustomObject]@{
                name = $charName
                classKey = $clsLower
                classTitle = (Get-Culture).TextInfo.ToTitleCase($clsLower)
                level = [int]$lvlM.Groups[1].Value
                money = if ($monM.Success) { [int]$monM.Groups[1].Value } else { 0 }
                updatedAt = if ($updM.Success) { [int64]$updM.Groups[1].Value } else { [int64]([DateTimeOffset]::UtcNow.ToUnixTimeSeconds()) }
            }
        }
    }
}

if ($parsedChars.Count -eq 0) {
    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] [!] WoWGuide.lua found, but no characters parsed yet." -ForegroundColor Yellow
    $newState | ConvertTo-Json | Set-Content -Path $StateFile -Encoding UTF8
    exit 0
}

# 4. Fetch current Cloud Gist
$token = Get-GitHubToken
$headers = @{ "Accept" = "application/vnd.github.v3+json"; "User-Agent" = "WoWGuide-Sync-PS" }
if ($token) { $headers["Authorization"] = "Bearer $token" }

$gistData = $null
try {
    $gistResp = Invoke-RestMethod -Uri "https://api.github.com/gists/$GistId`?t=$([DateTimeOffset]::UtcNow.ToUnixTimeSeconds())" -Headers $headers -Method Get
    if ($gistResp.files."synced_character.json".content) {
        $gistData = $gistResp.files."synced_character.json".content | ConvertFrom-Json
    }
} catch {
    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] [!] Could not read Cloud Gist: $($_.Exception.Message)" -ForegroundColor Red
    exit 0
}

if (-not $gistData) {
    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] [!] Cloud Gist returned empty synced_character.json." -ForegroundColor Red
    exit 0
}

# 5. Merge parsed characters into Gist payload if newer
$updatedAny = $false
foreach ($c in $parsedChars) {
    $k = $c.classKey
    if ($k -ne "warlock" -and $k -ne "rogue" -and $k -ne "druid") { continue }

    $existing = $gistData.characters.$k
    $remoteUpd = if ($existing -and $existing.updatedAt) { [int64]$existing.updatedAt } else { 0 }
    if ($c.updatedAt -ge $remoteUpd) {
        if (-not $existing) {
            $gistData.characters | Add-Member -NotePropertyName $k -NotePropertyValue ([PSCustomObject]@{
                name = $c.name; realm = "WoW Forever"; class = $c.classTitle; race = if ($k -eq "druid") { "Horde Tauren" } else { "Horde Undead" };
                level = $c.level; money = $c.money; updatedAt = $c.updatedAt; liveGear = @{}; professions = @{}; syncedAt = (Get-Date).ToUniversalTime().ToString("o")
            }) -Force
        } else {
            $existing.name = $c.name
            $existing.level = $c.level
            $existing.money = $c.money
            $existing.updatedAt = $c.updatedAt
            $existing.syncedAt = (Get-Date).ToUniversalTime().ToString("o")
        }
        $updatedAny = $true
        Write-Host "[$(Get-Date -Format 'HH:mm:ss')] [SYNC] Detected $($c.classTitle) $($c.name) (Lvl $($c.level)) from WoWGuide.lua!" -ForegroundColor Green
    } else {
        Write-Host "[$(Get-Date -Format 'HH:mm:ss')] [OK] Local $($c.name) (updatedAt=$($c.updatedAt)) is older than Cloud Gist ($remoteUpd)." -ForegroundColor Gray
    }
}

if (-not $updatedAny) {
    $newState | ConvertTo-Json | Set-Content -Path $StateFile -Encoding UTF8
    exit 0
}

# Mirror top-level active character
$activeKey = if ($gistData.activeCharacter) { $gistData.activeCharacter } else { "warlock" }
$activeProf = $gistData.characters.$activeKey
if ($activeProf) {
    $gistData.name = $activeProf.name
    $gistData.level = $activeProf.level
    $gistData.money = $activeProf.money
}
$gistData.syncedAt = (Get-Date).ToUniversalTime().ToString("o")

$jsonOut = $gistData | ConvertTo-Json -Depth 15
Set-Content -Path (Join-Path $ScriptDir "synced_character.json") -Value $jsonOut -Encoding UTF8

# 6. Upload to Cloud Gist
if (-not $token) {
    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] [ERROR] No GitHub token found on this PC! Put your GitHub token in github_token.txt inside $ScriptDir" -ForegroundColor Red
    exit 1
}

try {
    $patchBody = @{
        files = @{
            "synced_character.json" = @{ content = $jsonOut }
        }
    } | ConvertTo-Json -Depth 5
    Invoke-RestMethod -Uri "https://api.github.com/gists/$GistId" -Headers $headers -Method Patch -Body $patchBody -ContentType "application/json" | Out-Null
    $newState | ConvertTo-Json | Set-Content -Path $StateFile -Encoding UTF8
    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] [OK] Cloud Gist synced from this PC!" -ForegroundColor Cyan
} catch {
    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] [ERROR] Gist upload failed: $($_.Exception.Message)" -ForegroundColor Red
}
