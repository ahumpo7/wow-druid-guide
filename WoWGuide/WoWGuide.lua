-- ========================================================
-- WoW Forever: Master Leveling Guide & Live Sync AddOn
-- High-Fidelity In-Game Leveling Suite for Warlock & Rogue
-- ========================================================

local addonName, addonTable = ...
WoWGuide = addonTable or {}
_G["WoWGuide"] = WoWGuide

WoWGuide_SavedData = WoWGuide_SavedData or {}

local playerClass = nil
local liveLevel = 1
local selectedLevel = 1
local playerName = ""

-- Safe font & backdrop utilities
local backdropTemplate = BackdropTemplateMixin and "BackdropTemplate" or nil

local function ColorText(text, hexColor)
  return string.format("|cFF%s%s|r", hexColor or "FFFFFF", text or "")
end

local function GetClassColorHex()
  if playerClass == "WARLOCK" then return "9482C9" end
  if playerClass == "ROGUE" then return "FFF569" end
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

local function GetClassGuideData()
  if playerClass == "WARLOCK" then
    return WoWGuide_Warlock
  elseif playerClass == "ROGUE" then
    return WoWGuide_Rogue
  end
  return nil
end

-- Main Frames
local mainFrame = nil
local activeTab = 1
local tabButtons = {}
local tabPanels = {}
local minimapButton = nil
local syncPopupFrame = nil

-- Helper to apply standard dark styling
local function ApplyCardBackdrop(frame, r, g, b, a)
  if frame.SetBackdrop then
    frame:SetBackdrop({
      bgFile = "Interface\\Buttons\\WHITE8x8",
      edgeFile = "Interface\\Tooltips\\UI-Tooltip-Border",
      tile = true, tileSize = 16, edgeSize = 12,
      insets = { left = 3, right = 3, top = 3, bottom = 3 }
    })
    frame:SetBackdropColor(r or 0.1, g or 0.12, b or 0.18, a or 0.85)
    frame:SetBackdropBorderColor(0.35, 0.4, 0.5, 0.6)
  end
end

-- ========================================================
-- GUI Construction
-- ========================================================
local function CreateMainGuideWindow()
  if mainFrame then return mainFrame end

  local f = CreateFrame("Frame", "WoWGuideMainFrame", UIParent, backdropTemplate)
  f:SetSize(720, 560)
  f:SetPoint("CENTER", UIParent, "CENTER", 40, 20)
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
  header:SetPoint("TOPLEFT", 8, -8)
  ApplyCardBackdrop(header, 0.08, 0.09, 0.14, 0.9)

  -- Class Icon
  local classIcon = header:CreateTexture(nil, "ARTWORK")
  classIcon:SetSize(40, 40)
  classIcon:SetPoint("LEFT", 10, 0)
  f.classIcon = classIcon

  -- Title & Subtitle
  local title = header:CreateFontString(nil, "OVERLAY", "GameFontHighlightLarge")
  title:SetPoint("TOPLEFT", classIcon, "TOPRIGHT", 10, -2)
  title:SetText(ColorText("WoW Forever Leveling Codex", "FF7D0A"))
  f.title = title

  local subTitle = header:CreateFontString(nil, "OVERLAY", "GameFontNormalSmall")
  subTitle:SetPoint("BOTTOMLEFT", classIcon, "BOTTOMRIGHT", 10, 2)
  f.subTitle = subTitle

  -- Level Stepper in Header
  local stepperFrame = CreateFrame("Frame", nil, header)
  stepperFrame:SetSize(210, 36)
  stepperFrame:SetPoint("RIGHT", -50, 0)

  local prevBtn = CreateFrame("Button", nil, stepperFrame, "UIPanelButtonTemplate")
  prevBtn:SetSize(28, 26)
  prevBtn:SetPoint("LEFT", 0, 0)
  prevBtn:SetText("<")
  prevBtn:SetScript("OnClick", function()
    if selectedLevel > 1 then
      selectedLevel = selectedLevel - 1
      WoWGuide:RefreshView()
    end
  end)

  local levelText = stepperFrame:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  levelText:SetPoint("CENTER", -20, 0)
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
  liveSnapBtn:SetSize(62, 26)
  liveSnapBtn:SetPoint("LEFT", nextBtn, "RIGHT", 6, 0)
  liveSnapBtn:SetText("Live")
  liveSnapBtn:SetScript("OnClick", function()
    selectedLevel = liveLevel
    WoWGuide:RefreshView()
  end)

  -- Close Button
  local closeBtn = CreateFrame("Button", nil, f, "UIPanelCloseButton")
  closeBtn:SetPoint("TOPRIGHT", f, "TOPRIGHT", -4, -4)

  -- Tab Buttons Bar
  local tabDefs = {
    { id = 1, name = "Roadmap",   icon = "Interface\\Icons\\INV_Misc_Map02" },
    { id = 2, name = "Talents",   icon = "Interface\\Icons\\Spell_Nature_NatureBlessing" },
    { id = 3, name = "Gear",      icon = "Interface\\Icons\\INV_Sword_04" },
    { id = 4, name = "Rotation",  icon = "Interface\\Icons\\Spell_Shadow_LifeDrain02" },
    { id = 5, name = "Quests",    icon = "Interface\\Icons\\INV_Misc_Book_08" },
    { id = 6, name = "Macros",    icon = "Interface\\Icons\\INV_Misc_Gear_08" },
    { id = 7, name = "Sync",      icon = "Interface\\Icons\\Spell_Arcane_TeleportOrgrimmar" }
  }

  local tabWidth = 98
  for i, t in ipairs(tabDefs) do
    local tabBtn = CreateFrame("Button", nil, f, "UIPanelButtonTemplate")
    tabBtn:SetSize(tabWidth, 26)
    tabBtn:SetPoint("TOPLEFT", f, "TOPLEFT", 14 + (i - 1) * (tabWidth + 2), -68)
    tabBtn:SetText(t.name)
    tabBtn:SetScript("OnClick", function()
      WoWGuide:SwitchTab(t.id)
    end)
    tabButtons[t.id] = tabBtn

    -- Panel container
    local panel = CreateFrame("Frame", nil, f, backdropTemplate)
    panel:SetSize(692, 415)
    panel:SetPoint("TOPLEFT", 14, -98)
    ApplyCardBackdrop(panel, 0.05, 0.06, 0.09, 0.95)
    panel:Hide()
    tabPanels[t.id] = panel
  end

  -- ========================================================
  -- TAB 1: ROADMAP (Zone, Quest Instructions, Trainer)
  -- ========================================================
  local p1 = tabPanels[1]
  
  -- Top Zone Card
  local zoneCard = CreateFrame("Frame", nil, p1, backdropTemplate)
  zoneCard:SetSize(670, 75)
  zoneCard:SetPoint("TOPLEFT", 10, -10)
  ApplyCardBackdrop(zoneCard, 0.09, 0.12, 0.18, 0.85)

  p1.zoneTitle = zoneCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightLarge")
  p1.zoneTitle:SetPoint("TOPLEFT", 12, -10)

  p1.zoneHubs = zoneCard:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  p1.zoneHubs:SetPoint("TOPLEFT", 12, -32)

  p1.zoneRange = zoneCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
  p1.zoneRange:SetPoint("TOPRIGHT", -12, -10)

  -- Quest Instructions Card
  local questCard = CreateFrame("Frame", nil, p1, backdropTemplate)
  questCard:SetSize(670, 195)
  questCard:SetPoint("TOPLEFT", zoneCard, "BOTTOMLEFT", 0, -8)
  ApplyCardBackdrop(questCard, 0.08, 0.10, 0.15, 0.85)

  local qHeader = questCard:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  qHeader:SetPoint("TOPLEFT", 12, -10)
  qHeader:SetText(ColorText("📜 Level Objectives & Quest Walkthrough", "38BDF8"))

  local qScroll = CreateFrame("ScrollFrame", "WoWGuideRoadmapScroll", questCard, "UIPanelScrollFrameTemplate")
  qScroll:SetSize(630, 155)
  qScroll:SetPoint("TOPLEFT", 12, -30)

  local qContent = CreateFrame("Frame", nil, qScroll)
  qContent:SetSize(610, 300)
  qScroll:SetScrollChild(qContent)

  p1.questText = qContent:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  p1.questText:SetPoint("TOPLEFT", 0, 0)
  p1.questText:SetPoint("RIGHT", qContent, "RIGHT", 0)
  p1.questText:SetJustifyH("LEFT")
  p1.questText:SetJustifyV("TOP")

  -- Bottom Split: Trainer Spells & Leveling Tip
  local trainerCard = CreateFrame("Frame", nil, p1, backdropTemplate)
  trainerCard:SetSize(330, 115)
  trainerCard:SetPoint("TOPLEFT", questCard, "BOTTOMLEFT", 0, -8)
  ApplyCardBackdrop(trainerCard, 0.09, 0.14, 0.10, 0.85)

  local tHeader = trainerCard:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  tHeader:SetPoint("TOPLEFT", 10, -8)
  tHeader:SetText(ColorText("🎓 Class Trainer Spells", "4ADE80"))

  p1.trainerText = trainerCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
  p1.trainerText:SetPoint("TOPLEFT", 10, -28)
  p1.trainerText:SetPoint("BOTTOMRIGHT", -10, 8)
  p1.trainerText:SetJustifyH("LEFT")
  p1.trainerText:SetJustifyV("TOP")

  local tipCard = CreateFrame("Frame", nil, p1, backdropTemplate)
  tipCard:SetSize(332, 115)
  tipCard:SetPoint("TOPRIGHT", questCard, "BOTTOMRIGHT", 0, -8)
  ApplyCardBackdrop(tipCard, 0.14, 0.11, 0.08, 0.85)

  local tipHeader = tipCard:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  tipHeader:SetPoint("TOPLEFT", 10, -8)
  tipHeader:SetText(ColorText("💡 Leveling Pro Tip", "FCD34D"))

  p1.tipText = tipCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
  p1.tipText:SetPoint("TOPLEFT", 10, -28)
  p1.tipText:SetPoint("BOTTOMRIGHT", -10, 8)
  p1.tipText:SetJustifyH("LEFT")
  p1.tipText:SetJustifyV("TOP")

  -- ========================================================
  -- TAB 2: TALENTS (Full 10-60 Path & Allocation)
  -- ========================================================
  local p2 = tabPanels[2]

  local talentTopCard = CreateFrame("Frame", nil, p2, backdropTemplate)
  talentTopCard:SetSize(670, 75)
  talentTopCard:SetPoint("TOPLEFT", 10, -10)
  ApplyCardBackdrop(talentTopCard, 0.12, 0.08, 0.16, 0.85)

  p2.talentHeader = talentTopCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightLarge")
  p2.talentHeader:SetPoint("TOPLEFT", 12, -10)

  p2.talentDesc = talentTopCard:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  p2.talentDesc:SetPoint("TOPLEFT", 12, -34)
  p2.talentDesc:SetPoint("RIGHT", -12, 0)
  p2.talentDesc:SetJustifyH("LEFT")

  -- Scrollable full path list
  local talentListCard = CreateFrame("Frame", nil, p2, backdropTemplate)
  talentListCard:SetSize(670, 315)
  talentListCard:SetPoint("TOPLEFT", talentTopCard, "BOTTOMLEFT", 0, -8)
  ApplyCardBackdrop(talentListCard, 0.07, 0.08, 0.11, 0.85)

  local tScroll = CreateFrame("ScrollFrame", "WoWGuideTalentsScroll", talentListCard, "UIPanelScrollFrameTemplate")
  tScroll:SetSize(630, 295)
  tScroll:SetPoint("TOPLEFT", 12, -10)

  local tContent = CreateFrame("Frame", nil, tScroll)
  tContent:SetSize(610, 1400)
  tScroll:SetScrollChild(tContent)
  p2.tContent = tContent

  -- ========================================================
  -- TAB 3: GEAR & UPGRADES
  -- ========================================================
  local p3 = tabPanels[3]

  local gearTopCard = CreateFrame("Frame", nil, p3, backdropTemplate)
  gearTopCard:SetSize(670, 65)
  gearTopCard:SetPoint("TOPLEFT", 10, -10)
  ApplyCardBackdrop(gearTopCard, 0.09, 0.12, 0.18, 0.85)

  local gHeader = gearTopCard:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  gHeader:SetPoint("TOPLEFT", 12, -8)
  gHeader:SetText(ColorText("⚔ Equipment Milestone for Level ", "38BDF8"))
  p3.gearLvlHeader = gHeader

  p3.gearTipText = gearTopCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
  p3.gearTipText:SetPoint("TOPLEFT", 12, -28)
  p3.gearTipText:SetPoint("RIGHT", -12, 0)
  p3.gearTipText:SetJustifyH("LEFT")

  local gearScrollCard = CreateFrame("Frame", nil, p3, backdropTemplate)
  gearScrollCard:SetSize(670, 325)
  gearScrollCard:SetPoint("TOPLEFT", gearTopCard, "BOTTOMLEFT", 0, -8)
  ApplyCardBackdrop(gearScrollCard, 0.07, 0.08, 0.11, 0.85)

  local gScroll = CreateFrame("ScrollFrame", "WoWGuideGearScroll", gearScrollCard, "UIPanelScrollFrameTemplate")
  gScroll:SetSize(630, 305)
  gScroll:SetPoint("TOPLEFT", 12, -10)

  local gContent = CreateFrame("Frame", nil, gScroll)
  gContent:SetSize(610, 800)
  gScroll:SetScrollChild(gContent)
  p3.gContent = gContent

  -- ========================================================
  -- TAB 4: ROTATION & PETS
  -- ========================================================
  local p4 = tabPanels[4]

  local rotCard = CreateFrame("Frame", nil, p4, backdropTemplate)
  rotCard:SetSize(670, 395)
  rotCard:SetPoint("TOPLEFT", 10, -10)
  ApplyCardBackdrop(rotCard, 0.08, 0.10, 0.14, 0.85)

  local rHeader = rotCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightLarge")
  rHeader:SetPoint("TOPLEFT", 14, -12)
  rHeader:SetText(ColorText("⚡ Combat Rotation & Pet Strategy", "38BDF8"))

  local rScroll = CreateFrame("ScrollFrame", "WoWGuideRotationScroll", rotCard, "UIPanelScrollFrameTemplate")
  rScroll:SetSize(630, 345)
  rScroll:SetPoint("TOPLEFT", 14, -38)

  local rContent = CreateFrame("Frame", nil, rScroll)
  rContent:SetSize(610, 600)
  rScroll:SetScrollChild(rContent)

  p4.rotationText = rContent:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  p4.rotationText:SetPoint("TOPLEFT", 0, 0)
  p4.rotationText:SetPoint("RIGHT", rContent, "RIGHT", 0)
  p4.rotationText:SetJustifyH("LEFT")
  p4.rotationText:SetJustifyV("TOP")

  -- ========================================================
  -- TAB 5: CLASS QUESTS
  -- ========================================================
  local p5 = tabPanels[5]

  local cqScrollCard = CreateFrame("Frame", nil, p5, backdropTemplate)
  cqScrollCard:SetSize(670, 395)
  cqScrollCard:SetPoint("TOPLEFT", 10, -10)
  ApplyCardBackdrop(cqScrollCard, 0.08, 0.10, 0.14, 0.85)

  local cqHeader = cqScrollCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightLarge")
  cqHeader:SetPoint("TOPLEFT", 14, -12)
  cqHeader:SetText(ColorText("📜 Essential Class Quests & Mount Unlocks", "FCD34D"))

  local cqScroll = CreateFrame("ScrollFrame", "WoWGuideClassQuestScroll", cqScrollCard, "UIPanelScrollFrameTemplate")
  cqScroll:SetSize(630, 345)
  cqScroll:SetPoint("TOPLEFT", 14, -38)

  local cqContent = CreateFrame("Frame", nil, cqScroll)
  cqContent:SetSize(610, 800)
  cqScroll:SetScrollChild(cqContent)
  p5.cqContent = cqContent

  -- ========================================================
  -- TAB 6: MACROS
  -- ========================================================
  local p6 = tabPanels[6]

  local mScrollCard = CreateFrame("Frame", nil, p6, backdropTemplate)
  mScrollCard:SetSize(670, 395)
  mScrollCard:SetPoint("TOPLEFT", 10, -10)
  ApplyCardBackdrop(mScrollCard, 0.08, 0.10, 0.14, 0.85)

  local mHeader = mScrollCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightLarge")
  mHeader:SetPoint("TOPLEFT", 14, -12)
  mHeader:SetText(ColorText("🔥 Essential Horde Leveling Macros", "FF7D0A"))

  local mScroll = CreateFrame("ScrollFrame", "WoWGuideMacrosScroll", mScrollCard, "UIPanelScrollFrameTemplate")
  mScroll:SetSize(630, 345)
  mScroll:SetPoint("TOPLEFT", 14, -38)

  local mContent = CreateFrame("Frame", nil, mScroll)
  mContent:SetSize(610, 800)
  mScroll:SetScrollChild(mContent)
  p6.mContent = mContent

  -- ========================================================
  -- TAB 7: LIVE WEB SYNC
  -- ========================================================
  local p7 = tabPanels[7]

  local syncCard = CreateFrame("Frame", nil, p7, backdropTemplate)
  syncCard:SetSize(670, 395)
  syncCard:SetPoint("TOPLEFT", 10, -10)
  ApplyCardBackdrop(syncCard, 0.08, 0.10, 0.14, 0.85)

  local sHeader = syncCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightLarge")
  sHeader:SetPoint("TOPLEFT", 14, -14)
  sHeader:SetText(ColorText("🔗 Live Web Sync & Multi-Computer Bridge", "38BDF8"))

  local sDesc = syncCard:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  sDesc:SetPoint("TOPLEFT", 14, -44)
  sDesc:SetPoint("RIGHT", -14, 0)
  sDesc:SetJustifyH("LEFT")
  sDesc:SetText("Keep your web guide on Computer A synchronized with your live character here on Computer B using any of the two methods below:\n\n" ..
    ColorText("METHOD 1: Instant Real-Time Background Sync (Recommended)\n", "4ADE80") ..
    "• On Computer B, double-click " .. ColorText("start_live_sync.bat", "FCD34D") .. " in your wow project folder.\n" ..
    "• Keep it minimized while you play. Whenever you /sync, /reload, or level up, it pushes directly to GitHub Cloud Gist in 1 second!\n\n" ..
    ColorText("METHOD 2: 1-Click Code / URL Sync\n", "38BDF8") ..
    "• Click the button below to generate your character code and 1-click sync URL.\n" ..
    "• Visiting the URL on Computer A automatically syncs your level, talents, and gear in 1 click!")

  local openSyncBtn = CreateFrame("Button", nil, syncCard, "UIPanelButtonTemplate")
  openSyncBtn:SetSize(220, 36)
  openSyncBtn:SetPoint("BOTTOMLEFT", 18, 20)
  openSyncBtn:SetText("⚡ Open 1-Click Sync Code")
  openSyncBtn:SetScript("OnClick", function()
    WoWGuide:ShowSyncPopup()
  end)

  -- Bottom Status Bar
  local statusBar = f:CreateFontString(nil, "OVERLAY", "GameFontNormalSmall")
  statusBar:SetPoint("BOTTOMLEFT", 18, 10)
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
      tabButtons[id]:LockHighlight()
    else
      panel:Hide()
      tabButtons[id]:UnlockHighlight()
    end
  end
  WoWGuide:RefreshView()
end

-- ========================================================
-- Dynamic View Refresh
-- ========================================================
function WoWGuide:RefreshView()
  if not mainFrame then return end

  liveLevel = UnitLevel("player")
  playerName = UnitName("player")
  local _, classToken = UnitClass("player")
  playerClass = classToken

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

  mainFrame.title:SetText(string.format("%s %s", ColorText(playerName, classHex), ColorText(string.format("(Level %d %s)", liveLevel, playerClass or ""), "FFFFFF")))
  
  if classData then
    mainFrame.subTitle:SetText(ColorText(classData.title, "38BDF8") .. " • " .. ColorText(classData.specSummary or "", "A0A0B0"))
  end

  mainFrame.levelText:SetText(string.format("Level %s%d|r %s", ColorText(tostring(selectedLevel), "FCD34D"), (selectedLevel == liveLevel and ColorText("(Live)", "4ADE80") or "")))

  -- Equipped Items Count
  local equippedCount = 0
  for slot = 1, 19 do
    if GetInventoryItemID("player", slot) then equippedCount = equippedCount + 1 end
  end
  mainFrame.statusBar:SetText(string.format("Live Gear: %s items equipped • Money: %s • Type /sync for instant web code", ColorText(tostring(equippedCount), "38BDF8"), ColorText(FormatMoney(GetMoney()), "FFFFFF")))

  -- Get Data for Selected Level
  local lvlData = classData and classData.levels and classData.levels[selectedLevel] or {}

  -- TAB 1: ROADMAP
  local p1 = tabPanels[1]
  if p1:IsShown() then
    p1.zoneTitle:SetText(ColorText(lvlData.zone or "Azeroth Leveling", "38BDF8"))
    p1.zoneHubs:SetText(ColorText("Quest Hubs: ", "A0A0B0") .. (lvlData.hubs or "General Quests"))
    p1.zoneRange:SetText(ColorText("Bracket: " .. (lvlData.zoneRange or "1-60"), "FCD34D"))

    local questLines = {}
    table.insert(questLines, ColorText("🎯 Level " .. selectedLevel .. ": " .. (lvlData.title or "Leveling Objectives"), "FFFFFF"))
    table.insert(questLines, "")
    table.insert(questLines, lvlData.zoneInstructions or "Explore the zone and complete local quest chains.")
    p1.questText:SetText(table.concat(questLines, "\n"))

    -- Trainer Spells
    if lvlData.trainerTrain and #lvlData.trainerTrain > 0 then
      p1.trainerText:SetText(ColorText("⭐ Train Spells at Class Trainer:\n", "4ADE80") .. table.concat(lvlData.trainerTrain, "\n"))
    else
      p1.trainerText:SetText(ColorText("No new spells to train at Level " .. selectedLevel .. ".\nSave gold for future ranks & riding mount!", "9CA3AF"))
    end

    -- Gear Tip
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
      p2.talentHeader:SetText(ColorText("Level " .. selectedLevel .. ": " .. currentTalent.name, "4ADE80"))
      p2.talentDesc:SetText(currentTalent.desc)
    else
      p2.talentHeader:SetText(ColorText("Talents Maxed (Level 60)", "C084FC"))
      p2.talentDesc:SetText("All 51 talent points fully allocated across your spec.")
    end

    -- Render scrollable list of all 51 points
    if not p2.rowsCreated and classData and classData.talentOrder then
      p2.rowsCreated = true
      p2.talentRows = {}
      local yOffset = 0
      for lvl = 10, 60 do
        local tInfo = classData.talentOrder[lvl]
        if tInfo then
          local row = CreateFrame("Frame", nil, p2.tContent, backdropTemplate)
          row:SetSize(600, 26)
          row:SetPoint("TOPLEFT", 6, yOffset)
          ApplyCardBackdrop(row, 0.08, 0.09, 0.13, 0.7)

          local tag = row:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
          tag:SetPoint("LEFT", 8, 0)
          row.tag = tag

          local nameStr = row:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
          nameStr:SetPoint("LEFT", 80, 0)
          row.nameStr = nameStr

          local descStr = row:CreateFontString(nil, "OVERLAY", "GameFontNormalSmall")
          descStr:SetPoint("RIGHT", -8, 0)
          row.descStr = descStr

          p2.talentRows[lvl] = row
          yOffset = yOffset - 28
        end
      end
    end

    -- Update rows highlighting
    if p2.talentRows and classData and classData.talentOrder then
      for lvl = 10, 60 do
        local row = p2.talentRows[lvl]
        local tInfo = classData.talentOrder[lvl]
        if row and tInfo then
          local isAllocated = liveLevel >= lvl
          local isSelected = selectedLevel == lvl
          if isSelected then
            row.tag:SetText(ColorText("👉 Lvl " .. lvl, "FCD34D"))
            row.nameStr:SetText(ColorText(tInfo.name, "FCD34D"))
            row.descStr:SetText(ColorText(tInfo.tree:upper(), "FCD34D"))
            row:SetBackdropColor(0.25, 0.2, 0.08, 0.95)
          elseif isAllocated then
            row.tag:SetText(ColorText("✓ Lvl " .. lvl, "4ADE80"))
            row.nameStr:SetText(ColorText(tInfo.name, "E2E8F0"))
            row.descStr:SetText(ColorText(tInfo.tree:upper(), "64748B"))
            row:SetBackdropColor(0.08, 0.12, 0.09, 0.75)
          else
            row.tag:SetText(ColorText("  Lvl " .. lvl, "64748B"))
            row.nameStr:SetText(ColorText(tInfo.name, "94A3B8"))
            row.descStr:SetText(ColorText(tInfo.tree:upper(), "475569"))
            row:SetBackdropColor(0.06, 0.07, 0.10, 0.6)
          end
        end
      end
    end
  end

  -- TAB 3: GEAR
  local p3 = tabPanels[3]
  if p3:IsShown() then
    p3.gearLvlHeader:SetText(ColorText("⚔ Equipment Recommendations (Level " .. selectedLevel .. ")", "38BDF8"))
    p3.gearTipText:SetText(lvlData.gearTip or "Always check vendors and quest rewards for weapon/armor upgrades.")

    -- Render dungeonGear list
    if not p3.gearRows then p3.gearRows = {} end
    for _, r in ipairs(p3.gearRows) do r:Hide() end

    local dGear = lvlData.dungeonGear or {}
    local yOffset = 0
    for i, g in ipairs(dGear) do
      local row = p3.gearRows[i]
      if not row then
        row = CreateFrame("Frame", nil, p3.gContent, backdropTemplate)
        row:SetSize(600, 56)
        ApplyCardBackdrop(row, 0.09, 0.12, 0.18, 0.85)

        row.title = row:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
        row.title:SetPoint("TOPLEFT", 10, -8)

        row.source = row:CreateFontString(nil, "OVERLAY", "GameFontNormalSmall")
        row.source:SetPoint("TOPLEFT", 10, -28)

        row.stats = row:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
        row.stats:SetPoint("TOPRIGHT", -10, -8)

        row.tip = row:CreateFontString(nil, "OVERLAY", "GameFontNormalSmall")
        row.tip:SetPoint("BOTTOMLEFT", 10, 6)

        p3.gearRows[i] = row
      end

      row:SetPoint("TOPLEFT", 6, yOffset)
      row.title:SetText(ColorText(g.name, g.quality == "rare" and "0070DD" or "1EFF00"))
      row.source:SetText(ColorText("Source: ", "A0A0B0") .. (g.source or "World / Quest"))
      row.stats:SetText(ColorText(g.stats or "", "FFFFFF"))
      row.tip:SetText(ColorText(g.tip or "", "FCD34D"))
      row:Show()

      yOffset = yOffset - 62
    end
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
      table.insert(rotLines, ColorText("🐾 Demon Pet Management:", "C084FC"))
      table.insert(rotLines, "• Level 1-9 (Imp): Firebolt DPS + Blood Pact stamina buff. Keep on Defensive.")
      table.insert(rotLines, "• Level 10-19 (Voidwalker): Your solo tank. Send VW in first with Torment, then DoT mob.")
      table.insert(rotLines, "• Level 20+ (Succubus): Highest DPS pet! Pair with Drain Life for maximum kill speed.")
      table.insert(rotLines, "")
      table.insert(rotLines, ColorText("🩸 Infinite Mana / Zero Downtime Rule:", "4ADE80"))
      table.insert(rotLines, "• Never drink water! Kill mob -> Drain Soul for 100% mana regen -> Life Tap -> Bandage/Cannibalize!")
    else
      table.insert(rotLines, ColorText("🗡️ Combat Rogue Solo Strategy:", "FFF569"))
      table.insert(rotLines, "• Always open with Sinister Strike (or Garrote/Ambush if stealth grinding).")
      table.insert(rotLines, "• Keep Slice and Dice active for +30% attack speed.")
      table.insert(rotLines, "• Gouge + Bandage: In trouble? Gouge mob (4s incapacitate), step back, and use First Aid!")
    end

    p4.rotationText:SetText(table.concat(rotLines, "\n"))
  end

  -- TAB 5: CLASS QUESTS
  local p5 = tabPanels[5]
  if p5:IsShown() and classData and classData.classQuests then
    if not p5.questRows then p5.questRows = {} end
    local yOffset = 0
    for i, q in ipairs(classData.classQuests) do
      local row = p5.questRows[i]
      if not row then
        row = CreateFrame("Frame", nil, p5.cqContent, backdropTemplate)
        row:SetSize(600, 68)
        ApplyCardBackdrop(row, 0.08, 0.09, 0.14, 0.85)

        row.title = row:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
        row.title:SetPoint("TOPLEFT", 10, -8)

        row.location = row:CreateFontString(nil, "OVERLAY", "GameFontNormalSmall")
        row.location:SetPoint("TOPRIGHT", -10, -8)

        row.desc = row:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
        row.desc:SetPoint("TOPLEFT", 10, -28)
        row.desc:SetPoint("RIGHT", -10, 0)
        row.desc:SetJustifyH("LEFT")

        p5.questRows[i] = row
      end

      row:SetPoint("TOPLEFT", 6, yOffset)
      local isDone = liveLevel >= q.lvl
      row.title:SetText(string.format("%s %s", (isDone and ColorText("✓", "4ADE80") or ColorText("!", "FCD34D")), ColorText("Level " .. q.lvl .. ": " .. q.title, isDone and "4ADE80" or "FCD34D")))
      row.location:SetText(ColorText(q.zone or "", "A0A0B0"))
      row.desc:SetText(q.desc or "")
      row:Show()

      yOffset = yOffset - 74
    end
  end

  -- TAB 6: MACROS
  local p6 = tabPanels[6]
  if p6:IsShown() and classData and classData.macros then
    if not p6.macroRows then p6.macroRows = {} end
    local yOffset = 0
    for i, m in ipairs(classData.macros) do
      local row = p6.macroRows[i]
      if not row then
        row = CreateFrame("Frame", nil, p6.mContent, backdropTemplate)
        row:SetSize(600, 80)
        ApplyCardBackdrop(row, 0.08, 0.10, 0.15, 0.85)

        row.title = row:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
        row.title:SetPoint("TOPLEFT", 10, -8)

        local copyBtn = CreateFrame("Button", nil, row, "UIPanelButtonTemplate")
        copyBtn:SetSize(110, 24)
        copyBtn:SetPoint("TOPRIGHT", -10, -6)
        copyBtn:SetText("Copy to Chat")
        copyBtn:SetScript("OnClick", function()
          local eb = ChatFrame1EditBox or ChatFrameEditBox or (DEFAULT_CHAT_FRAME and DEFAULT_CHAT_FRAME.editBox)
          if eb then
            eb:Show()
            eb:SetFocus()
            eb:SetText(row.macroCode or "")
            eb:HighlightText()
          end
          DEFAULT_CHAT_FRAME:AddMessage(ColorText("[WoWGuide] Macro code copied to chat input box!", "4ADE80"))
        end)

        row.codeBox = row:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
        row.codeBox:SetPoint("TOPLEFT", 10, -28)
        row.codeBox:SetJustifyH("LEFT")

        row.desc = row:CreateFontString(nil, "OVERLAY", "GameFontNormalSmall")
        row.desc:SetPoint("BOTTOMLEFT", 10, 6)

        p6.macroRows[i] = row
      end

      row:SetPoint("TOPLEFT", 6, yOffset)
      row.title:SetText(ColorText(m.title, "38BDF8"))
      row.macroCode = m.code
      row.codeBox:SetText(ColorText(m.code:gsub("\n", "  |  "), "FCD34D"))
      row.desc:SetText(m.desc or "")
      row:Show()

      yOffset = yOffset - 86
    end
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
  icon:SetPoint("CENTER", 0, 0)
  icon:SetTexture("Interface\\Icons\\INV_Misc_Book_09")
  btn.icon = icon

  local border = btn:CreateTexture(nil, "OVERLAY")
  border:SetSize(52, 52)
  border:SetPoint("TOPLEFT", 0, 0)
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
  local lvl = UnitLevel("player")
  local name = UnitName("player")
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
    title:SetPoint("TOP", 0, -14)
    title:SetText(ColorText("🔗 Live Web Sync Code", "FF7D0A"))

    local desc = p:CreateFontString(nil, "OVERLAY", "GameFontNormal")
    desc:SetPoint("TOP", 0, -40)
    desc:SetText("Press Ctrl+C to copy your character string, then paste into the site:")

    local editBox = CreateFrame("EditBox", nil, p, "InputBoxTemplate")
    editBox:SetSize(380, 28)
    editBox:SetPoint("CENTER", 0, -10)
    editBox:SetAutoFocus(true)
    p.editBox = editBox

    local urlBox = p:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
    urlBox:SetPoint("TOP", editBox, "BOTTOM", 0, -10)
    urlBox:SetText(ColorText("Or direct URL: " .. url, "38BDF8"))
    p.urlBox = urlBox

    local doneBtn = CreateFrame("Button", nil, p, "UIPanelButtonTemplate")
    doneBtn:SetSize(120, 28)
    doneBtn:SetPoint("BOTTOM", 0, 14)
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
  local name = UnitName("player")
  local lvl = UnitLevel("player")
  local _, classToken = UnitClass("player")
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
    selectedLevel = UnitLevel("player")
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
    liveLevel = UnitLevel("player")
    selectedLevel = liveLevel
    playerName = UnitName("player")
    local _, classToken = UnitClass("player")
    playerClass = classToken

    CreateMinimapButton()
    WoWGuide:SaveCharacterSnapshot()

    DEFAULT_CHAT_FRAME:AddMessage(string.format("|cFFFF7D0A[WoWGuide]|r Loaded for %s (Level %d %s). Type |cFF38BDF8/guide|r to open your leveling advisor, or |cFF38BDF8/sync|r to export!", playerName, liveLevel, playerClass or ""))
  elseif event == "PLAYER_LEVEL_UP" then
    local newLvl = ...
    liveLevel = newLvl or UnitLevel("player")
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
