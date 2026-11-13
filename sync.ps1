# WoW Forever - Standalone PowerShell Syncer
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host " WoW Forever - Live Character Exporter & Cloud Syncer" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan

# Check if git is available and auto-pull latest updates
if (Get-Command git -ErrorAction SilentlyContinue) {
    try {
        Write-Host "Checking for latest repository updates..." -ForegroundColor Gray
        git pull origin main --quiet
    } catch {}
}

# Check if node is installed and run sync.js
if (Get-Command node -ErrorAction SilentlyContinue) {
    Write-Host "Invoking Node.js syncer..." -ForegroundColor Green
    node "$PSScriptRoot\sync.js"
    exit 0
}

Write-Host "Node.js not detected. Searching for WoW WTF files directly..." -ForegroundColor Yellow

$possiblePaths = @(
    "C:\Program Files (x86)\World of Warcraft\_forever_\WTF\Account",
    "C:\World of Warcraft\_forever_\WTF\Account",
    "D:\World of Warcraft\_forever_\WTF\Account",
    "E:\World of Warcraft\_forever_\WTF\Account",
    "C:\Games\World of Warcraft\_forever_\WTF\Account",
    "D:\Games\World of Warcraft\_forever_\WTF\Account"
)

$foundQuestie = $null
foreach ($path in $possiblePaths) {
    if (Test-Path $path) {
        $q = Get-ChildItem -Path $path -Filter "Questie.lua" -Recurse -File -ErrorAction SilentlyContinue | Select-Object -First 1
        if ($q) {
            $foundQuestie = $q.FullName
            break
        }
    }
}

if (-not $foundQuestie) {
    Write-Host "Could not automatically locate Questie.lua." -ForegroundColor Red
    Write-Host "Please ensure World of Warcraft: Forever is installed on this PC."
    exit 1
}

Write-Host "Found Questie data: $foundQuestie" -ForegroundColor Green
$content = Get-Content -Path $foundQuestie -Raw

$levelMatches = [regex]::Matches($content, '\["(?:Level|NewLevel)"\]\s*=\s*(\d+)')
$maxLevel = 10
foreach ($m in $levelMatches) {
    $lvl = [int]$m.Groups[1].Value
    if ($lvl -gt $maxLevel -and $lvl -le 60) { $maxLevel = $lvl }
}

Write-Host "Detected Character Level: $maxLevel" -ForegroundColor Green

# Update synced_character.json locally if present
$jsonPath = Join-Path $PSScriptRoot "synced_character.json"
if (Test-Path $jsonPath) {
    $jsonObj = Get-Content -Path $jsonPath -Raw | ConvertFrom-Json
    $jsonObj.level = $maxLevel
    $jsonObj.syncedAt = (Get-Date).ToUniversalTime().ToString("o")
    $jsonObj | ConvertTo-Json -Depth 10 | Set-Content -Path $jsonPath -Encoding utf8
    Write-Host "Updated synced_character.json locally." -ForegroundColor Green
}

# If GitHub CLI is present, check remote level and upload to Gist with conflict prevention
if (Get-Command gh -ErrorAction SilentlyContinue) {
    try {
        $remoteGist = gh gist view 584b8b9450a8b85003934d27acfa7c7c 2>$null
        if ($remoteGist -match '(?s)\{.*\}') {
            $remoteObj = $matches[0] | ConvertFrom-Json
            if ($remoteObj.level -gt $maxLevel) {
                Write-Host "Remote Cloud Gist has higher level ($($remoteObj.level)) than local WTF files ($maxLevel)!" -ForegroundColor Yellow
                Write-Host "Preserving Cloud Gist and updating local cache." -ForegroundColor Green
                $remoteObj | ConvertTo-Json -Depth 10 | Set-Content -Path $jsonPath -Encoding utf8
                exit 0
            }
        }
    } catch {}

    Write-Host "Uploading to GitHub Cloud Gist..." -ForegroundColor Cyan
    gh gist edit 584b8b9450a8b85003934d27acfa7c7c -a "$jsonPath"
    Write-Host "Cloud Gist updated successfully!" -ForegroundColor Green
} else {
    Write-Host "GitHub CLI (gh) not installed. Please push your changes via git or install gh." -ForegroundColor Yellow
}
