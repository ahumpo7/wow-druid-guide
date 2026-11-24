-- ========================================================
-- WoW Forever: Master Leveling Guide & Live Sync AddOn
-- High-Fidelity In-Game Leveling Suite for Warlock & Rogue
-- ========================================================

local addonName, addonTable = ...
WoWGuide = addonTable or {}
_G["WoWGuide"] = WoWGuide

WoWGuide_SavedData = WoWGuide_SavedData or {}

local playerClass = "WARLOCK"
local liveLevel = 1
local selectedLevel = 1
local playerName = "Player"

-- Safe backdrop template
local backdropTemplate = BackdropTemplateMixin and "BackdropTemplate" or nil

local function ColorText(text, hexColor)
  return string.format("|cFF%s%s|r", hexColor or "FFFFFF", text or "")
end

local function DetectPlayerClass()
  local locClass, engClass = UnitClass("player")
  local str = string.upper(engClass or locClass or "")
  if str:find("WARLOCK") then
    return "WARLOCK"
  elseif str:find("ROGUE") then
    return "ROGUE"
  end
  return "WARLOCK"
end

local function GetClassGuideData()
  local cls = DetectPlayerClass()
  if cls == "WARLOCK" then
    return addonTable.Warlock or _G["WoWGuide_Warlock"] or WoWGuide_Warlock
  elseif cls == "ROGUE" then
    return addonTable.Rogue or _G["WoWGuide_Rogue"] or WoWGuide_Rogue
  end
  return addonTable.Warlock or _G["WoWGuide_Warlock"] or WoWGuide_Warlock
end

local function GetClassColorHex()
  local cls = DetectPlayerClass()
  if cls == "WARLOCK" then return "9482C9" end
  if cls == "ROGUE" then return "FFF569" end
  return "FF7D0A"
end

local function FormatMoney(copper)
  if not copper or copper == 0 then return "0c" end
  local g = math.floor(copper / 10000)
  local s = math.floor((copper % 10000) / 100)
  local c = copper % 100
  local parts = {}
  if g > 0 then table.insert(parts, string.format("%d|cFFFFD700g|r", g)) end
  if s > 0 then table.insert(parts, string.format("%d|cFFC0C0C0s|r", s)) end
  if c > 0 or #parts == 0 then table.insert(parts, string.format("%d|cFFB87333c|r", c)) end
  return table.concat(parts, " ")
end

-- UI State
local mainFrame = nil
local activeTab = 1
local tabButtons = {}
local tabPanels = {}
local minimapButton = nil
local syncPopupFrame = nil

local function ApplyCardBackdrop(frame, r, g, b, a)
  if frame.SetBackdrop then
    frame:SetBackdrop({
      bgFile = "Interface\\Buttons\\WHITE8x8",
      edgeFile = "Interface\\Tooltips\\UI-Tooltip-Border",
      tile = true, tileSize = 16, edgeSize = 12,
      insets = { left = 3, right = 3, top = 3, bottom = 3 }
    })
    frame:SetBackdropColor(r or 0.1, g or 0.12, b or 0.18, a or 0.9)
    frame:SetBackdropBorderColor(0.35, 0.4, 0.5, 0.6)
  end
end

-- ========================================================
-- Window Creation
-- ========================================================
local function CreateMainGuideWindow()
  if mainFrame then return mainFrame end

  local f = CreateFrame("Frame", "WoWGuideMainFrame", UIParent, backdropTemplate)
  f:SetSize(720, 560)
  f:SetPoint("CENTER", UIParent, "CENTER", 20, 10)
  f:SetMovable(true)
  f:EnableMouse(true)
  f:RegisterForDrag("LeftButton")
  f:SetScript("OnDragStart", f.StartMoving)
  f:SetScript("OnDragStop", f.StopMovingOrSizing)
  f:SetClampedToScreen(true)
  f:SetFrameStrata("HIGH")

  if f.SetBackdrop then
    f:SetBackdrop({
      bgFile = "Interface\\DialogFrame\\UI-DialogBox-Background-Dark",
      edgeFile = "Interface\\DialogFrame\\UI-DialogBox-Border",
      tile = true, tileSize = 32, edgeSize = 24,
      insets = { left = 6, right = 6, top = 6, bottom = 6 }
    })
    f:SetBackdropColor(0.06, 0.07, 0.11, 0.96)
  end

  -- Header Bar
  local header = CreateFrame("Frame", nil, f, backdropTemplate)
  header:SetSize(704, 56)
  header:SetPoint("TOPLEFT", f, "TOPLEFT", 8, -8)
  ApplyCardBackdrop(header, 0.08, 0.09, 0.14, 0.9)

  local classIcon = header:CreateTexture(nil, "ARTWORK")
  classIcon:SetSize(40, 40)
  classIcon:SetPoint("LEFT", header, "LEFT", 10, 0)
  f.classIcon = classIcon

  local title = header:CreateFontString(nil, "OVERLAY", "GameFontHighlightLarge")
  title:SetPoint("TOPLEFT", classIcon, "TOPRIGHT", 10, -2)
  title:SetText(ColorText("WoW Forever Leveling Codex", "FF7D0A"))
  f.title = title

  local subTitle = header:CreateFontString(nil, "OVERLAY", "GameFontNormalSmall")
  subTitle:SetPoint("BOTTOMLEFT", classIcon, "BOTTOMRIGHT", 10, 2)
  f.subTitle = subTitle

  -- Level Stepper Frame
  local stepperFrame = CreateFrame("Frame", nil, header)
  stepperFrame:SetSize(220, 36)
  stepperFrame:SetPoint("RIGHT", header, "RIGHT", -40, 0)

  local prevBtn = CreateFrame("Button", nil, stepperFrame, "UIPanelButtonTemplate")
  prevBtn:SetSize(28, 26)
  prevBtn:SetPoint("LEFT", stepperFrame, "LEFT", 0, 0)
  prevBtn:SetText("<")
  prevBtn:SetScript("OnClick", function()
    if selectedLevel > 1 then
      selectedLevel = selectedLevel - 1
      WoWGuide:RefreshView()
    end
  end)

  local levelText = stepperFrame:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  levelText:SetPoint("LEFT", prevBtn, "RIGHT", 8, 0)
  f.levelText = levelText

  local nextBtn = CreateFrame("Button", nil, stepperFrame, "UIPanelButtonTemplate")
  nextBtn:SetSize(28, 26)
  nextBtn:SetPoint("LEFT", levelText, "RIGHT", 8, 0)
  nextBtn:SetText(">")
  nextBtn:SetScript("OnClick", function()
    if selectedLevel < 60 then
      selectedLevel = selectedLevel + 1
      WoWGuide:RefreshView()
    end
  end)

  local liveSnapBtn = CreateFrame("Button", nil, stepperFrame, "UIPanelButtonTemplate")
  liveSnapBtn:SetSize(60, 26)
  liveSnapBtn:SetPoint("LEFT", nextBtn, "RIGHT", 6, 0)
  liveSnapBtn:SetText("Live")
  liveSnapBtn:SetScript("OnClick", function()
    selectedLevel = liveLevel
    WoWGuide:RefreshView()
  end)

  local closeBtn = CreateFrame("Button", nil, f, "UIPanelCloseButton")
  closeBtn:SetPoint("TOPRIGHT", f, "TOPRIGHT", -4, -4)

  -- Tab Buttons Bar
  local tabDefs = {
    { id = 1, name = "Roadmap" },
    { id = 2, name = "Talents" },
    { id = 3, name = "Gear" },
    { id = 4, name = "Rotation" },
    { id = 5, name = "Quests" },
    { id = 6, name = "Macros" },
    { id = 7, name = "Sync" }
  }

  local tabWidth = 96
  for i, t in ipairs(tabDefs) do
    local tabBtn = CreateFrame("Button", nil, f, "UIPanelButtonTemplate")
    tabBtn:SetSize(tabWidth, 26)
    tabBtn:SetPoint("TOPLEFT", f, "TOPLEFT", 14 + (i - 1) * (tabWidth + 4), -68)
    tabBtn:SetText(t.name)
    tabBtn.tabName = t.name
    tabBtn:SetScript("OnClick", function()
      WoWGuide:SwitchTab(t.id)
    end)
    tabButtons[t.id] = tabBtn

    local panel = CreateFrame("Frame", nil, f, backdropTemplate)
    panel:SetSize(692, 420)
    panel:SetPoint("TOPLEFT", f, "TOPLEFT", 14, -98)
    ApplyCardBackdrop(panel, 0.05, 0.06, 0.09, 0.95)
    panel:Hide()
    tabPanels[t.id] = panel
  end

  -- ========================================================
  -- TAB 1: ROADMAP (Zone, Quest Walkthrough, Trainer)
  -- ========================================================
  local p1 = tabPanels[1]

  local zoneCard = CreateFrame("Frame", nil, p1, backdropTemplate)
  zoneCard:SetSize(672, 60)
  zoneCard:SetPoint("TOPLEFT", p1, "TOPLEFT", 10, -10)
  ApplyCardBackdrop(zoneCard, 0.09, 0.12, 0.18, 0.9)

  p1.zoneTitle = zoneCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightLarge")
  p1.zoneTitle:SetPoint("TOPLEFT", zoneCard, "TOPLEFT", 12, -8)

  p1.zoneHubs = zoneCard:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  p1.zoneHubs:SetPoint("TOPLEFT", zoneCard, "TOPLEFT", 12, -32)

  p1.zoneRange = zoneCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
  p1.zoneRange:SetPoint("TOPRIGHT", zoneCard, "TOPRIGHT", -12, -8)

  local questCard = CreateFrame("Frame", nil, p1, backdropTemplate)
  questCard:SetSize(672, 210)
  questCard:SetPoint("TOPLEFT", zoneCard, "BOTTOMLEFT", 0, -8)
  ApplyCardBackdrop(questCard, 0.08, 0.10, 0.15, 0.9)

  local qHeader = questCard:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  qHeader:SetPoint("TOPLEFT", questCard, "TOPLEFT", 12, -8)
  qHeader:SetText(ColorText("📜 Level Objectives & Quest Walkthrough", "38BDF8"))

  p1.questText = questCard:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  p1.questText:SetPoint("TOPLEFT", questCard, "TOPLEFT", 12, -28)
  p1.questText:SetPoint("BOTTOMRIGHT", questCard, "BOTTOMRIGHT", -12, 8)
  p1.questText:SetJustifyH("LEFT")
  p1.questText:SetJustifyV("TOP")

  -- Bottom Split
  local trainerCard = CreateFrame("Frame", nil, p1, backdropTemplate)
  trainerCard:SetSize(332, 125)
  trainerCard:SetPoint("TOPLEFT", questCard, "BOTTOMLEFT", 0, -8)
  ApplyCardBackdrop(trainerCard, 0.09, 0.14, 0.10, 0.9)

  local tHeader = trainerCard:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  tHeader:SetPoint("TOPLEFT", trainerCard, "TOPLEFT", 10, -8)
  tHeader:SetText(ColorText("🎓 Class Trainer Spells", "4ADE80"))

  p1.trainerText = trainerCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
  p1.trainerText:SetPoint("TOPLEFT", trainerCard, "TOPLEFT", 10, -28)
  p1.trainerText:SetPoint("BOTTOMRIGHT", trainerCard, "BOTTOMRIGHT", -10, 8)
  p1.trainerText:SetJustifyH("LEFT")
  p1.trainerText:SetJustifyV("TOP")

  local tipCard = CreateFrame("Frame", nil, p1, backdropTemplate)
  tipCard:SetSize(332, 125)
  tipCard:SetPoint("TOPRIGHT", questCard, "BOTTOMRIGHT", 0, -8)
  ApplyCardBackdrop(tipCard, 0.14, 0.11, 0.08, 0.9)

  local tipHeader = tipCard:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  tipHeader:SetPoint("TOPLEFT", tipCard, "TOPLEFT", 10, -8)
  tipHeader:SetText(ColorText("💡 Leveling Pro Tip", "FCD34D"))

  p1.tipText = tipCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
  p1.tipText:SetPoint("TOPLEFT", tipCard, "TOPLEFT", 10, -28)
  p1.tipText:SetPoint("BOTTOMRIGHT", tipCard, "BOTTOMRIGHT", -10, 8)
  p1.tipText:SetJustifyH("LEFT")
  p1.tipText:SetJustifyV("TOP")

  -- ========================================================
  -- TAB 2: TALENTS (Current + Full Progression)
  -- ========================================================
  local p2 = tabPanels[2]

  local talentTopCard = CreateFrame("Frame", nil, p2, backdropTemplate)
  talentTopCard:SetSize(672, 85)
  talentTopCard:SetPoint("TOPLEFT", p2, "TOPLEFT", 10, -10)
  ApplyCardBackdrop(talentTopCard, 0.12, 0.08, 0.16, 0.9)

  p2.talentHeader = talentTopCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightLarge")
  p2.talentHeader:SetPoint("TOPLEFT", talentTopCard, "TOPLEFT", 12, -10)

  p2.talentDesc = talentTopCard:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  p2.talentDesc:SetPoint("TOPLEFT", talentTopCard, "TOPLEFT", 12, -34)
  p2.talentDesc:SetPoint("BOTTOMRIGHT", talentTopCard, "BOTTOMRIGHT", -12, 8)
  p2.talentDesc:SetJustifyH("LEFT")
  p2.talentDesc:SetJustifyV("TOP")

  local talentListCard = CreateFrame("Frame", nil, p2, backdropTemplate)
  talentListCard:SetSize(672, 315)
  talentListCard:SetPoint("TOPLEFT", talentTopCard, "BOTTOMLEFT", 0, -8)
  ApplyCardBackdrop(talentListCard, 0.07, 0.08, 0.11, 0.9)

  p2.talentListText = talentListCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
  p2.talentListText:SetPoint("TOPLEFT", talentListCard, "TOPLEFT", 12, -10)
  p2.talentListText:SetPoint("BOTTOMRIGHT", talentListCard, "BOTTOMRIGHT", -12, 10)
  p2.talentListText:SetJustifyH("LEFT")
  p2.talentListText:SetJustifyV("TOP")

  -- ========================================================
  -- TAB 3: GEAR & UPGRADES
  -- ========================================================
  local p3 = tabPanels[3]

  local gearTopCard = CreateFrame("Frame", nil, p3, backdropTemplate)
  gearTopCard:SetSize(672, 70)
  gearTopCard:SetPoint("TOPLEFT", p3, "TOPLEFT", 10, -10)
  ApplyCardBackdrop(gearTopCard, 0.09, 0.12, 0.18, 0.9)

  p3.gearHeader = gearTopCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightLarge")
  p3.gearHeader:SetPoint("TOPLEFT", gearTopCard, "TOPLEFT", 12, -8)

  p3.gearTip = gearTopCard:CreateFontString(nil, "OVERLAY", "GameFontNormalSmall")
  p3.gearTip:SetPoint("TOPLEFT", gearTopCard, "TOPLEFT", 12, -32)
  p3.gearTip:SetPoint("BOTTOMRIGHT", gearTopCard, "BOTTOMRIGHT", -12, 4)
  p3.gearTip:SetJustifyH("LEFT")
  p3.gearTip:SetJustifyV("TOP")

  local gearListCard = CreateFrame("Frame", nil, p3, backdropTemplate)
  gearListCard:SetSize(672, 330)
  gearListCard:SetPoint("TOPLEFT", gearTopCard, "BOTTOMLEFT", 0, -8)
  ApplyCardBackdrop(gearListCard, 0.07, 0.08, 0.11, 0.9)

  p3.gearItemsText = gearListCard:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  p3.gearItemsText:SetPoint("TOPLEFT", gearListCard, "TOPLEFT", 14, -12)
  p3.gearItemsText:SetPoint("BOTTOMRIGHT", gearListCard, "BOTTOMRIGHT", -14, 12)
  p3.gearItemsText:SetJustifyH("LEFT")
  p3.gearItemsText:SetJustifyV("TOP")

  -- ========================================================
  -- TAB 4: ROTATION & PETS
  -- ========================================================
  local p4 = tabPanels[4]

  local rotCard = CreateFrame("Frame", nil, p4, backdropTemplate)
  rotCard:SetSize(672, 400)
  rotCard:SetPoint("TOPLEFT", p4, "TOPLEFT", 10, -10)
  ApplyCardBackdrop(rotCard, 0.08, 0.10, 0.14, 0.9)

  local rHeader = rotCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightLarge")
  rHeader:SetPoint("TOPLEFT", rotCard, "TOPLEFT", 14, -12)
  rHeader:SetText(ColorText("⚡ Combat Sequence & Pet Strategy", "38BDF8"))

  p4.rotationText = rotCard:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  p4.rotationText:SetPoint("TOPLEFT", rotCard, "TOPLEFT", 14, -40)
  p4.rotationText:SetPoint("BOTTOMRIGHT", rotCard, "BOTTOMRIGHT", -14, 12)
  p4.rotationText:SetJustifyH("LEFT")
  p4.rotationText:SetJustifyV("TOP")

  -- ========================================================
  -- TAB 5: CLASS QUESTS
  -- ========================================================
  local p5 = tabPanels[5]

  local cqCard = CreateFrame("Frame", nil, p5, backdropTemplate)
  cqCard:SetSize(672, 400)
  cqCard:SetPoint("TOPLEFT", p5, "TOPLEFT", 10, -10)
  ApplyCardBackdrop(cqCard, 0.08, 0.10, 0.14, 0.9)

  local cqHeader = cqCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightLarge")
  cqHeader:SetPoint("TOPLEFT", cqCard, "TOPLEFT", 14, -12)
  cqHeader:SetText(ColorText("📜 Essential Class Quests & Mount Unlocks", "FCD34D"))

  p5.questsText = cqCard:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  p5.questsText:SetPoint("TOPLEFT", cqCard, "TOPLEFT", 14, -40)
  p5.questsText:SetPoint("BOTTOMRIGHT", cqCard, "BOTTOMRIGHT", -14, 12)
  p5.questsText:SetJustifyH("LEFT")
  p5.questsText:SetJustifyV("TOP")

  -- ========================================================
  -- TAB 6: MACROS
  -- ========================================================
  local p6 = tabPanels[6]

  local mCard = CreateFrame("Frame", nil, p6, backdropTemplate)
  mCard:SetSize(672, 400)
  mCard:SetPoint("TOPLEFT", p6, "TOPLEFT", 10, -10)
  ApplyCardBackdrop(mCard, 0.08, 0.10, 0.15, 0.9)

  local mHeader = mCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightLarge")
  mHeader:SetPoint("TOPLEFT", mCard, "TOPLEFT", 14, -12)
  mHeader:SetText(ColorText("🔥 Essential Horde Leveling Macros", "FF7D0A"))

  p6.macroText = mCard:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  p6.macroText:SetPoint("TOPLEFT", mCard, "TOPLEFT", 14, -40)
  p6.macroText:SetPoint("BOTTOMRIGHT", mCard, "BOTTOMRIGHT", -14, 12)
  p6.macroText:SetJustifyH("LEFT")
  p6.macroText:SetJustifyV("TOP")

  -- ========================================================
  -- TAB 7: LIVE WEB SYNC
  -- ========================================================
  local p7 = tabPanels[7]

  local syncCard = CreateFrame("Frame", nil, p7, backdropTemplate)
  syncCard:SetSize(672, 400)
  syncCard:SetPoint("TOPLEFT", p7, "TOPLEFT", 10, -10)
  ApplyCardBackdrop(syncCard, 0.08, 0.10, 0.14, 0.9)

  local sHeader = syncCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightLarge")
  sHeader:SetPoint("TOPLEFT", syncCard, "TOPLEFT", 14, -14)
  sHeader:SetText(ColorText("🔗 Live Web Sync & Multi-Computer Bridge", "38BDF8"))

  local sDesc = syncCard:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  sDesc:SetPoint("TOPLEFT", syncCard, "TOPLEFT", 14, -44)
  sDesc:SetPoint("RIGHT", syncCard, "RIGHT", -14, 0)
  sDesc:SetJustifyH("LEFT")
  sDesc:SetText(
    ColorText("METHOD 1: Instant Real-Time Background Sync (Recommended)\n", "4ADE80") ..
    "• On Computer B, double-click " .. ColorText("start_live_sync.bat", "FCD34D") .. " in your wow project folder.\n" ..
    "• Keep it minimized while playing. Whenever you /sync, /reload, or level up, it pushes directly to GitHub Cloud Gist in 1 second!\n\n" ..
    ColorText("METHOD 2: 1-Click Code / URL Sync\n", "38BDF8") ..
    "• Click the button below to generate your character code and 1-click sync URL.\n" ..
    "• Visiting the URL on Computer A automatically syncs your level, talents, and gear in 1 click!"
  )

  local openSyncBtn = CreateFrame("Button", nil, syncCard, "UIPanelButtonTemplate")
  openSyncBtn:SetSize(220, 36)
  openSyncBtn:SetPoint("BOTTOMLEFT", syncCard, "BOTTOMLEFT", 18, 20)
  openSyncBtn:SetText("⚡ Open 1-Click Sync Code")
  openSyncBtn:SetScript("OnClick", function()
    WoWGuide:ShowSyncPopup()
  end)

  -- Bottom Status Bar
  local statusBar = f:CreateFontString(nil, "OVERLAY", "GameFontNormalSmall")
  statusBar:SetPoint("BOTTOMLEFT", f, "BOTTOMLEFT", 18, 10)
  f.statusBar = statusBar

  mainFrame = f
  WoWGuide:SwitchTab(1)
  return mainFrame
end

-- ========================================================
-- Tab Switching
-- ========================================================
function WoWGuide:SwitchTab(tabId)
  activeTab = tabId
  for id, panel in pairs(tabPanels) do
    if id == tabId then
      panel:Show()
      if tabButtons[id] then
        tabButtons[id]:SetText(ColorText(tabButtons[id].tabName, "FCD34D"))
      end
    else
      panel:Hide()
      if tabButtons[id] then
        tabButtons[id]:SetText(ColorText(tabButtons[id].tabName, "A0A0B0"))
      end
    end
  end
  WoWGuide:RefreshView()
end

-- ========================================================
-- Dynamic View Refresh
-- ========================================================
function WoWGuide:RefreshView()
  if not mainFrame then return end

  liveLevel = UnitLevel("player") or 1
  playerName = UnitName("player") or "Player"
  playerClass = DetectPlayerClass()

  if selectedLevel < 1 then selectedLevel = 1 end
  if selectedLevel > 60 then selectedLevel = 60 end

  local classData = GetClassGuideData()
  local classHex = GetClassColorHex()

  -- Header Info
  if playerClass == "WARLOCK" then
    mainFrame.classIcon:SetTexture("Interface\\Icons\\Spell_Nature_Drowsy")
  elseif playerClass == "ROGUE" then
    mainFrame.classIcon:SetTexture("Interface\\Icons\\Ability_Stealth")
  else
    mainFrame.classIcon:SetTexture("Interface\\Icons\\INV_Misc_Book_09")
  end

  mainFrame.title:SetText(string.format("%s %s", ColorText(playerName, classHex), ColorText(string.format("(Level %d %s)", liveLevel, playerClass), "FFFFFF")))
  
  if classData then
    mainFrame.subTitle:SetText(ColorText(classData.title or "Leveling Guide", "38BDF8") .. " • " .. ColorText(classData.specSummary or "", "A0A0B0"))
  end

  mainFrame.levelText:SetText(string.format("Level %s%d|r %s", ColorText(tostring(selectedLevel), "FCD34D"), (selectedLevel == liveLevel and ColorText("(Live)", "4ADE80") or "")))

  -- Equipped Items Count
  local equippedCount = 0
  for slot = 1, 19 do
    if GetInventoryItemID("player", slot) then equippedCount = equippedCount + 1 end
  end
  mainFrame.statusBar:SetText(string.format("Live Gear: %s items equipped • Money: %s • Type /sync for instant web code", ColorText(tostring(equippedCount), "38BDF8"), ColorText(FormatMoney(GetMoney()), "FFFFFF")))

  local lvlData = classData and classData.levels and classData.levels[selectedLevel] or {}

  -- TAB 1: ROADMAP
  local p1 = tabPanels[1]
  if p1:IsShown() then
    p1.zoneTitle:SetText(ColorText(lvlData.zone or "Azeroth Leveling", "38BDF8"))
    p1.zoneHubs:SetText(ColorText("Quest Hubs: ", "A0A0B0") .. (lvlData.hubs or "General Quests"))
    p1.zoneRange:SetText(ColorText("Bracket: " .. (lvlData.zoneRange or "1-60"), "FCD34D"))

    local questLines = {}
    table.insert(questLines, ColorText("🎯 Level " .. selectedLevel .. ": " .. (lvlData.title or "Leveling Objectives"), "FCD34D"))
    table.insert(questLines, "")
    table.insert(questLines, lvlData.zoneInstructions or "Explore the zone and complete local quest chains.")
    p1.questText:SetText(table.concat(questLines, "\n"))

    if lvlData.trainerTrain and #lvlData.trainerTrain > 0 then
      p1.trainerText:SetText(ColorText("⭐ Train Spells at Class Trainer:\n", "4ADE80") .. table.concat(lvlData.trainerTrain, "\n"))
    else
      p1.trainerText:SetText(ColorText("No new spells to train at Level " .. selectedLevel .. ".\nSave gold for future ranks & riding mount!", "9CA3AF"))
    end

    p1.tipText:SetText(lvlData.gearTip or "Prioritize primary stats (Agility for Rogue, Stamina/Intellect for Warlock).")
  end

  -- TAB 2: TALENTS
  local p2 = tabPanels[2]
  if p2:IsShown() then
    local currentTalent = classData and classData.talentOrder and classData.talentOrder[selectedLevel]
    if selectedLevel < 10 then
      p2.talentHeader:SetText(ColorText("Talents Unlock at Level 10", "9CA3AF"))
      p2.talentDesc:SetText("You will gain 1 talent point per level starting at Level 10 (51 total points by Level 60).")
    elseif currentTalent then
      p2.talentHeader:SetText(ColorText("Level " .. selectedLevel .. " Talent: " .. currentTalent.name, "4ADE80"))
      p2.talentDesc:SetText(ColorText("Tree: " .. currentTalent.tree:upper() .. "\n", "C084FC") .. currentTalent.desc)
    else
      p2.talentHeader:SetText(ColorText("Talents Maxed (Level 60)", "C084FC"))
      p2.talentDesc:SetText("All 51 talent points fully allocated across your spec.")
    end

    -- Render clean multi-line talent path preview
    local lines = {}
    table.insert(lines, ColorText("📋 Point-by-Point Progression (Levels 10–60):", "FCD34D"))
    table.insert(lines, "")
    if classData and classData.talentOrder then
      local startLvl = math.max(10, selectedLevel - 4)
      local endLvl = math.min(60, startLvl + 11)
      for l = startLvl, endLvl do
        local t = classData.talentOrder[l]
        if t then
          local prefix = (l < liveLevel and ColorText("  [✓ Done]", "4ADE80")) or (l == liveLevel and ColorText("  [👉 NEXT]", "FCD34D")) or ColorText("  [Upcoming]", "64748B")
          table.insert(lines, string.format("%s %s %s (%s)", prefix, ColorText("Lvl " .. l .. ":", "FFFFFF"), ColorText(t.name, l <= liveLevel and "FFFFFF" or "94A3B8"), ColorText(t.tree, "38BDF8")))
        end
      end
    end
    p2.talentListText:SetText(table.concat(lines, "\n"))
  end

  -- TAB 3: GEAR
  local p3 = tabPanels[3]
  if p3:IsShown() then
    p3.gearHeader:SetText(ColorText("⚔ Equipment Upgrades (Level " .. selectedLevel .. ")", "38BDF8"))
    p3.gearTip:SetText(lvlData.gearTip or "Always check vendors and quest rewards for weapon/armor upgrades.")

    local lines = {}
    local dGear = lvlData.dungeonGear or {}
    if #dGear > 0 then
      table.insert(lines, ColorText("⭐ Recommended Item Upgrades for Level " .. selectedLevel .. ":", "FCD34D"))
      table.insert(lines, "")
      for i, g in ipairs(dGear) do
        local qColor = g.quality == "rare" and "0070DD" or "1EFF00"
        table.insert(lines, string.format("%s. %s - %s", i, ColorText(g.name, qColor), ColorText(g.stats or "", "FFFFFF")))
        table.insert(lines, string.format("   📍 Source: %s", ColorText(g.source or "", "A0A0B0")))
        if g.tip and g.tip ~= "" then
          table.insert(lines, string.format("   💡 %s", ColorText(g.tip, "FCD34D")))
        end
        table.insert(lines, "")
      end
    else
      table.insert(lines, ColorText("No major weapon milestones at Level " .. selectedLevel .. ".", "9CA3AF"))
      table.insert(lines, "Continue wearing your current leveling gear, or check future levels using the > arrow above.")
      table.insert(lines, "")
      if playerClass == "WARLOCK" then
        table.insert(lines, ColorText("Key Warlock Wand Milestones:", "FCD34D"))
        table.insert(lines, "• Level 5: Lesser Magic Wand (11.3 DPS) - Enchanting craft")
        table.insert(lines, "• Level 13: Greater Magic Wand (17.5 DPS) - Enchanting craft")
        table.insert(lines, "• Level 27: Gravestone Scepter (29.0 DPS) - Blackfathom Deeps quest")
        table.insert(lines, "• Level 42: Nether Force Wand (40.5 DPS) - Tanaris quest")
      else
        table.insert(lines, ColorText("Key Rogue Weapon Milestones:", "FCD34D"))
        table.insert(lines, "• Level 17: Thief's Blade (16.5 DPS sword) - World drop")
        table.insert(lines, "• Level 19: Shadowfang (18.1 DPS sword) - SFK rare drop")
        table.insert(lines, "• Level 38: Vanquisher's Sword (30.6 DPS) - RFD quest")
        table.insert(lines, "• Level 45: Thrash Blade (39.4 DPS extra attack) - Maraudon quest")
      end
    end
    p3.gearItemsText:SetText(table.concat(lines, "\n"))
  end

  -- TAB 4: ROTATION
  local p4 = tabPanels[4]
  if p4:IsShown() then
    local rot = lvlData.rotation or {}
    local rotLines = {}
    table.insert(rotLines, ColorText("🔥 Optimal Solo Leveling Sequence (Level " .. selectedLevel .. "):", "FCD34D"))
    table.insert(rotLines, "")
    for i, step in ipairs(rot) do
      table.insert(rotLines, string.format("%s %s", ColorText(i .. ".", "38BDF8"), step))
    end

    table.insert(rotLines, "")
    table.insert(rotLines, ColorText("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "475569"))
    table.insert(rotLines, "")

    if playerClass == "WARLOCK" then
      table.insert(rotLines, ColorText("🐾 Demon Pet Strategy:", "C084FC"))
      table.insert(rotLines, "• Level 1-9 (Imp): Firebolt burst + Blood Pact stamina. Keep on Defensive.")
      table.insert(rotLines, "• Level 10-19 (Voidwalker): Your solo tank. Let VW get first hit, then DoT mob.")
      table.insert(rotLines, "• Level 20+ (Succubus): Highest DPS pet! Pair with Drain Life for fastest kill times.")
      table.insert(rotLines, "")
      table.insert(rotLines, ColorText("🩸 Infinite Mana / Zero Downtime Rule:", "4ADE80"))
      table.insert(rotLines, "• Never drink water! Kill mob -> Drain Soul for 100% mana regen -> Life Tap -> Bandage/Cannibalize!")
    else
      table.insert(rotLines, ColorText("🗡️ Combat Rogue Solo Strategy:", "FFF569"))
      table.insert(rotLines, "• Open with Sinister Strike (or Garrote/Ambush if stealth grinding).")
      table.insert(rotLines, "• Keep Slice and Dice active for +30% attack speed.")
      table.insert(rotLines, "• Gouge + Bandage: In trouble? Gouge mob (4s incapacitate), step back, and use First Aid!")
    end

    p4.rotationText:SetText(table.concat(rotLines, "\n"))
  end

  -- TAB 5: CLASS QUESTS
  local p5 = tabPanels[5]
  if p5:IsShown() and classData and classData.classQuests then
    local lines = {}
    for i, q in ipairs(classData.classQuests) do
      local isDone = liveLevel >= q.lvl
      local status = isDone and ColorText("[COMPLETED ✓]", "4ADE80") or ColorText("[AVAILABLE]", "FCD34D")
      table.insert(lines, string.format("%s %s - %s", status, ColorText("Level " .. q.lvl .. ": " .. q.title, isDone and "E2E8F0" or "FCD34D"), ColorText("📍 " .. q.zone, "38BDF8")))
      table.insert(lines, string.format("   NPC: %s", ColorText(q.npc or "", "A0A0B0")))
      table.insert(lines, string.format("   %s", q.desc or ""))
      table.insert(lines, "")
    end
    p5.questsText:SetText(table.concat(lines, "\n"))
  end

  -- TAB 6: MACROS
  local p6 = tabPanels[6]
  if p6:IsShown() and classData and classData.macros then
    local lines = {}
    for i, m in ipairs(classData.macros) do
      table.insert(lines, string.format("%d. %s", i, ColorText(m.title, "38BDF8")))
      table.insert(lines, string.format("   Code: %s", ColorText(m.code:gsub("\n", "  |  "), "FCD34D")))
      table.insert(lines, string.format("   💡 %s", ColorText(m.desc or "", "94A3B8")))
      table.insert(lines, "")
    end
    p6.macroText:SetText(table.concat(lines, "\n"))
  end
end

-- ========================================================
-- Minimap Floating Button
-- ========================================================
local function CreateMinimapButton()
  if minimapButton then return minimapButton end

  local btn = CreateFrame("Button", "WoWGuideMinimapBtn", Minimap)
  btn:SetSize(32, 32)
  btn:SetFrameStrata("MEDIUM")
  btn:SetPoint("TOPLEFT", Minimap, "TOPLEFT", 0, -20)
  btn:SetMovable(true)
  btn:EnableMouse(true)
  btn:RegisterForClicks("LeftButtonUp", "RightButtonUp")
  btn:RegisterForDrag("LeftButton")

  local icon = btn:CreateTexture(nil, "BACKGROUND")
  icon:SetSize(20, 20)
  icon:SetPoint("CENTER", btn, "CENTER", 0, 0)
  icon:SetTexture("Interface\\Icons\\INV_Misc_Book_09")
  btn.icon = icon

  local border = btn:CreateTexture(nil, "OVERLAY")
  border:SetSize(52, 52)
  border:SetPoint("TOPLEFT", btn, "TOPLEFT", 0, 0)
  border:SetTexture("Interface\\Minimap\\MiniMap-TrackingBorder")

  btn:SetScript("OnEnter", function(self)
    GameTooltip:SetOwner(self, "ANCHOR_LEFT")
    GameTooltip:AddLine(ColorText("WoW Forever Leveling Guide", "FF7D0A"))
    GameTooltip:AddLine("Left-Click: Open Guide", 1, 1, 1)
    GameTooltip:AddLine("Right-Click: 1-Click Sync Code", 0.3, 0.8, 1)
    GameTooltip:Show()
  end)

  btn:SetScript("OnLeave", function() GameTooltip:Hide() end)

  btn:SetScript("OnClick", function(self, button)
    if button == "RightButton" then
      WoWGuide:ShowSyncPopup()
    else
      WoWGuide:Toggle()
    end
  end)

  minimapButton = btn
  return minimapButton
end

-- ========================================================
-- 1-Click Sync Code Popup
-- ========================================================
function WoWGuide:ShowSyncPopup()
  WoWGuide:SaveCharacterSnapshot()
  local lvl = UnitLevel("player") or 1
  local name = UnitName("player") or "Player"
  local code = string.format("%s:%d", name, lvl)
  local url = string.format("https://ahumpo7.github.io/wow-druid-guide/?sync=%s:%d", name, lvl)

  if not syncPopupFrame then
    local p = CreateFrame("Frame", "WoWGuideSyncPopup", UIParent, backdropTemplate)
    p:SetSize(440, 220)
    p:SetPoint("CENTER", UIParent, "CENTER", 0, 80)
    p:SetFrameStrata("DIALOG")
    p:EnableMouse(true)
    ApplyCardBackdrop(p, 0.05, 0.06, 0.09, 0.98)

    local title = p:CreateFontString(nil, "OVERLAY", "GameFontHighlightLarge")
    title:SetPoint("TOP", p, "TOP", 0, -14)
    title:SetText(ColorText("🔗 Live Web Sync Code", "FF7D0A"))

    local desc = p:CreateFontString(nil, "OVERLAY", "GameFontNormal")
    desc:SetPoint("TOP", p, "TOP", 0, -40)
    desc:SetText("Press Ctrl+C to copy your character string, then paste into the site:")

    local editBox = CreateFrame("EditBox", nil, p, "InputBoxTemplate")
    editBox:SetSize(380, 28)
    editBox:SetPoint("CENTER", p, "CENTER", 0, -10)
    editBox:SetAutoFocus(true)
    p.editBox = editBox

    local urlBox = p:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
    urlBox:SetPoint("TOP", editBox, "BOTTOM", 0, -10)
    urlBox:SetText(ColorText("Or direct URL: " .. url, "38BDF8"))
    p.urlBox = urlBox

    local doneBtn = CreateFrame("Button", nil, p, "UIPanelButtonTemplate")
    doneBtn:SetSize(120, 28)
    doneBtn:SetPoint("BOTTOM", p, "BOTTOM", 0, 14)
    doneBtn:SetText("Done")
    doneBtn:SetScript("OnClick", function() p:Hide() end)

    local close = CreateFrame("Button", nil, p, "UIPanelCloseButton")
    close:SetPoint("TOPRIGHT", p, "TOPRIGHT", -2, -2)

    syncPopupFrame = p
  end

  if DEFAULT_CHAT_FRAME then
    DEFAULT_CHAT_FRAME:AddMessage(string.format("|cFFFF7D0A[WoWGuide]|r Character snapshot saved! Sync string: |cFF4ADE80%s|r", code))
  end

  syncPopupFrame.editBox:SetText(code)
  syncPopupFrame.editBox:HighlightText()
  syncPopupFrame.editBox:SetFocus()
  syncPopupFrame:Show()
end

-- ========================================================
-- Character Snapshot Persistence
-- ========================================================
function WoWGuide:SaveCharacterSnapshot()
  local name = UnitName("player") or "Player"
  local lvl = UnitLevel("player") or 1
  local classToken = DetectPlayerClass()
  local money = GetMoney()

  local equip = {}
  for slot = 1, 19 do
    local id = GetInventoryItemID("player", slot)
    if id then equip[slot] = id end
  end

  WoWGuide_SavedData = WoWGuide_SavedData or {}
  WoWGuide_SavedData[name] = {
    name = name,
    level = lvl,
    class = classToken,
    money = money,
    equip = equip,
    updatedAt = time()
  }
end

-- ========================================================
-- Toggle & Slash Commands
-- ========================================================
function WoWGuide:Toggle()
  local win = CreateMainGuideWindow()
  if win:IsShown() then
    win:Hide()
  else
    selectedLevel = UnitLevel("player") or 1
    WoWGuide:RefreshView()
    win:Show()
  end
end

-- Event Handling
local eventFrame = CreateFrame("Frame")
eventFrame:RegisterEvent("PLAYER_LOGIN")
eventFrame:RegisterEvent("PLAYER_LEVEL_UP")
eventFrame:RegisterEvent("PLAYER_LOGOUT")
eventFrame:RegisterEvent("UNIT_INVENTORY_CHANGED")

eventFrame:SetScript("OnEvent", function(self, event, ...)
  if event == "PLAYER_LOGIN" then
    liveLevel = UnitLevel("player") or 1
    selectedLevel = liveLevel
    playerName = UnitName("player") or "Player"
    playerClass = DetectPlayerClass()

    CreateMinimapButton()
    WoWGuide:SaveCharacterSnapshot()

    DEFAULT_CHAT_FRAME:AddMessage(string.format("|cFFFF7D0A[WoWGuide]|r Loaded for %s (Level %d %s). Type |cFF38BDF8/guide|r to open your leveling advisor, or |cFF38BDF8/sync|r to export!", playerName, liveLevel, playerClass))
  elseif event == "PLAYER_LEVEL_UP" then
    local newLvl = ...
    liveLevel = newLvl or UnitLevel("player") or 1
    selectedLevel = liveLevel
    DEFAULT_CHAT_FRAME:AddMessage(string.format("|cFFFF7D0A[WoWGuide]|r |cFF4ADE80DING! Level %d reached!|r Type |cFF38BDF8/guide|r to review your next talent and trainer spells.", liveLevel))
    if mainFrame and mainFrame:IsShown() then
      WoWGuide:RefreshView()
    end
    WoWGuide:SaveCharacterSnapshot()
  elseif event == "UNIT_INVENTORY_CHANGED" or event == "PLAYER_LOGOUT" then
    WoWGuide:SaveCharacterSnapshot()
  end
end)

SLASH_WOWGUIDE1 = "/guide"
SLASH_WOWGUIDE2 = "/wowguide"
SlashCmdList["WOWGUIDE"] = function(msg)
  local arg = string.lower(strtrim(msg or ""))
  if arg == "sync" or arg == "export" then
    WoWGuide:ShowSyncPopup()
  else
    WoWGuide:Toggle()
  end
end

SLASH_WOWSYNC1 = "/sync"
SLASH_WOWSYNC2 = "/wowsync"
SlashCmdList["WOWSYNC"] = function()
  WoWGuide:ShowSyncPopup()
end
