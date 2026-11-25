-- ====================================================================
-- WoW Forever: Master Leveling Guide & Live Sync Codex
-- High-Fidelity In-Game Leveling Suite for Warlock & Rogue
-- 100% Native Font Rendering: Zero Unicode/Emoji Square Boxes
-- ====================================================================

local addonName, addonTable = ...
WoWGuide = addonTable or {}
_G["WoWGuide"] = WoWGuide

WoWGuide_SavedData = WoWGuide_SavedData or {}

local playerClass = "WARLOCK"
local selectedClass = "WARLOCK"
local liveLevel = 1
local selectedLevel = 1
local playerName = "Player"

-- Safe backdrop template
local backdropTemplate = BackdropTemplateMixin and "BackdropTemplate" or nil

local function SafeTrim(s)
  if not s then return "" end
  if _G.strtrim then return _G.strtrim(s) end
  return (string.gsub(s, "^%s*(.-)%s*$", "%1"))
end

local function ColorText(text, hexColor)
  return string.format("|cFF%s%s|r", hexColor or "FFFFFF", text or "")
end

local function DetectPlayerClass()
  local locClass, engClass = UnitClass("player")
  local str = string.upper(engClass or locClass or "")
  if str:find("DRUID") then
    return "DRUID"
  elseif str:find("ROGUE") then
    return "ROGUE"
  end
  return "WARLOCK"
end

local function GetClassGuideData(cls)
  local c = cls or selectedClass or DetectPlayerClass()
  if c == "ROGUE" then
    return addonTable.Rogue or _G["WoWGuide_Rogue"] or WoWGuide_Rogue
  elseif c == "DRUID" then
    return addonTable.Druid or _G["WoWGuide_Druid"] or WoWGuide_Druid
  else
    return addonTable.Warlock or _G["WoWGuide_Warlock"] or WoWGuide_Warlock
  end
end

local function GetClassColorHex(cls)
  local c = cls or selectedClass or DetectPlayerClass()
  if c == "ROGUE" then return "FFF569" end
  if c == "DRUID" then return "FF7D0A" end
  return "9482C9"
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
local milestoneButtons = {}

local function ApplyCardBackdrop(frame, r, g, b, a, borderR, borderG, borderB, borderA)
  if frame.SetBackdrop then
    frame:SetBackdrop({
      bgFile = "Interface\\Buttons\\WHITE8x8",
      edgeFile = "Interface\\Tooltips\\UI-Tooltip-Border",
      tile = true, tileSize = 16, edgeSize = 12,
      insets = { left = 3, right = 3, top = 3, bottom = 3 }
    })
    frame:SetBackdropColor(r or 0.08, g or 0.10, b or 0.15, a or 0.94)
    frame:SetBackdropBorderColor(borderR or 0.28, borderG or 0.35, borderB or 0.48, borderA or 0.7)
  end
end

-- Forward Declarations
function WoWGuide:RefreshView() end
function WoWGuide:SwitchTab(tabId) end
function WoWGuide:SetSelectedClass(cls) end
function WoWGuide:SetSelectedLevel(lvl) end

-- ====================================================================
-- Window Creation & UI Architecture
-- ====================================================================
local function CreateMainGuideWindow()
  if mainFrame then return mainFrame end

  local f = CreateFrame("Frame", "WoWGuideMainFrame", UIParent, backdropTemplate)
  f:SetSize(780, 580)
  f:SetPoint("CENTER", UIParent, "CENTER", 0, 10)
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
    f:SetBackdropColor(0.04, 0.05, 0.08, 0.98)
  end

  -- ==========================================
  -- 1. TOP HEADER BAR
  -- ==========================================
  local header = CreateFrame("Frame", nil, f, backdropTemplate)
  header:SetSize(764, 62)
  header:SetPoint("TOPLEFT", f, "TOPLEFT", 8, -8)
  ApplyCardBackdrop(header, 0.07, 0.08, 0.13, 0.95, 0.45, 0.35, 0.15, 0.9)

  -- Class Crest Icon with Border
  local iconBorder = CreateFrame("Frame", nil, header, backdropTemplate)
  iconBorder:SetSize(46, 46)
  iconBorder:SetPoint("LEFT", header, "LEFT", 10, 0)
  ApplyCardBackdrop(iconBorder, 0, 0, 0, 0.9, 0.9, 0.7, 0.2, 0.9)

  local classIcon = iconBorder:CreateTexture(nil, "ARTWORK")
  classIcon:SetSize(40, 40)
  classIcon:SetPoint("CENTER", iconBorder, "CENTER", 0, 0)
  f.classIcon = classIcon

  -- Title & Subtitle
  local title = header:CreateFontString(nil, "OVERLAY", "GameFontHighlightLarge")
  title:SetPoint("TOPLEFT", iconBorder, "TOPRIGHT", 12, -2)
  title:SetText(ColorText("WoW Forever Leveling Codex", "FF7D0A"))
  f.title = title

  local subTitle = header:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  subTitle:SetPoint("BOTTOMLEFT", iconBorder, "BOTTOMRIGHT", 12, 4)
  subTitle:SetWidth(280)
  subTitle:SetJustifyH("LEFT")
  f.subTitle = subTitle

  -- Class Switcher Toggle Buttons (Top Center)
  local classSwitcherFrame = CreateFrame("Frame", nil, header)
  classSwitcherFrame:SetSize(225, 32)
  classSwitcherFrame:SetPoint("RIGHT", header, "RIGHT", -235, 0)

  local lockBtn = CreateFrame("Button", nil, classSwitcherFrame, "UIPanelButtonTemplate")
  lockBtn:SetSize(72, 28)
  lockBtn:SetPoint("LEFT", classSwitcherFrame, "LEFT", 0, 0)
  lockBtn:SetText("Warlock")
  lockBtn:SetScript("OnClick", function()
    WoWGuide:SetSelectedClass("WARLOCK")
  end)
  f.lockBtn = lockBtn

  local rogueBtn = CreateFrame("Button", nil, classSwitcherFrame, "UIPanelButtonTemplate")
  rogueBtn:SetSize(72, 28)
  rogueBtn:SetPoint("LEFT", lockBtn, "RIGHT", 4, 0)
  rogueBtn:SetText("Rogue")
  rogueBtn:SetScript("OnClick", function()
    WoWGuide:SetSelectedClass("ROGUE")
  end)
  f.rogueBtn = rogueBtn

  local druidBtn = CreateFrame("Button", nil, classSwitcherFrame, "UIPanelButtonTemplate")
  druidBtn:SetSize(72, 28)
  druidBtn:SetPoint("LEFT", rogueBtn, "RIGHT", 4, 0)
  druidBtn:SetText("Druid")
  druidBtn:SetScript("OnClick", function()
    WoWGuide:SetSelectedClass("DRUID")
  end)
  f.druidBtn = druidBtn

  -- Level Stepper Frame (Top Right)
  local stepperFrame = CreateFrame("Frame", nil, header, backdropTemplate)
  stepperFrame:SetSize(195, 34)
  stepperFrame:SetPoint("RIGHT", header, "RIGHT", -36, 0)
  ApplyCardBackdrop(stepperFrame, 0.05, 0.06, 0.10, 0.9, 0.3, 0.4, 0.5, 0.6)

  local prevBtn = CreateFrame("Button", nil, stepperFrame, "UIPanelButtonTemplate")
  prevBtn:SetSize(30, 26)
  prevBtn:SetPoint("LEFT", stepperFrame, "LEFT", 4, 0)
  prevBtn:SetText("<")
  prevBtn:SetScript("OnClick", function()
    if selectedLevel > 1 then
      WoWGuide:SetSelectedLevel(selectedLevel - 1)
    end
  end)

  local levelText = stepperFrame:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  levelText:SetPoint("LEFT", prevBtn, "RIGHT", 4, 0)
  levelText:SetWidth(90)
  levelText:SetJustifyH("CENTER")
  f.levelText = levelText

  local nextBtn = CreateFrame("Button", nil, stepperFrame, "UIPanelButtonTemplate")
  nextBtn:SetSize(30, 26)
  nextBtn:SetPoint("LEFT", levelText, "RIGHT", 4, 0)
  nextBtn:SetText(">")
  nextBtn:SetScript("OnClick", function()
    if selectedLevel < 60 then
      WoWGuide:SetSelectedLevel(selectedLevel + 1)
    end
  end)

  local liveSnapBtn = CreateFrame("Button", nil, stepperFrame, "UIPanelButtonTemplate")
  liveSnapBtn:SetSize(30, 26)
  liveSnapBtn:SetPoint("LEFT", nextBtn, "RIGHT", 4, 0)
  liveSnapBtn:SetText("Live")
  liveSnapBtn:SetScript("OnClick", function()
    WoWGuide:SetSelectedLevel(liveLevel or 1)
  end)
  liveSnapBtn:SetScript("OnEnter", function(self)
    GameTooltip:SetOwner(self, "ANCHOR_RIGHT")
    GameTooltip:AddLine("Snap to Current Character Level (" .. (liveLevel or 1) .. ")", 1, 1, 1)
    GameTooltip:Show()
  end)
  liveSnapBtn:SetScript("OnLeave", function() GameTooltip:Hide() end)

  -- Close Button
  local closeBtn = CreateFrame("Button", nil, f, "UIPanelCloseButton")
  closeBtn:SetPoint("TOPRIGHT", f, "TOPRIGHT", -4, -4)
  closeBtn:SetScript("OnClick", function() f:Hide() end)

  -- ==========================================
  -- 2. QUICK MILESTONE JUMP STRIP
  -- ==========================================
  local milestoneBar = CreateFrame("Frame", nil, f, backdropTemplate)
  milestoneBar:SetSize(764, 28)
  milestoneBar:SetPoint("TOPLEFT", header, "BOTTOMLEFT", 0, -4)
  ApplyCardBackdrop(milestoneBar, 0.05, 0.06, 0.09, 0.9)

  local mLabel = milestoneBar:CreateFontString(nil, "OVERLAY", "GameFontNormalSmall")
  mLabel:SetPoint("LEFT", milestoneBar, "LEFT", 10, 0)
  mLabel:SetText(ColorText("Quick Milestones:", "FCD34D"))

  local milestones = {
    { lvl = 1, label = "Lvl 1" },
    { lvl = 10, label = "Lvl 10 (Talents)" },
    { lvl = 20, label = "Lvl 20" },
    { lvl = 30, label = "Lvl 30" },
    { lvl = 40, label = "Lvl 40 (Mount)" },
    { lvl = 50, label = "Lvl 50" },
    { lvl = 60, label = "Lvl 60 (Raid)" }
  }

  local startX = 115
  for i, m in ipairs(milestones) do
    local mBtn = CreateFrame("Button", nil, milestoneBar, "UIPanelButtonTemplate")
    mBtn:SetSize(88, 22)
    mBtn:SetPoint("LEFT", milestoneBar, "LEFT", startX + (i - 1) * 91, 0)
    mBtn:SetText(m.label)
    mBtn:SetScript("OnClick", function()
      WoWGuide:SetSelectedLevel(m.lvl)
    end)
    milestoneButtons[m.lvl] = mBtn
  end

  -- ==========================================
  -- 3. NAVIGATION TAB BUTTONS
  -- ==========================================
  local tabDefs = {
    { id = 1, name = "Roadmap" },
    { id = 2, name = "Talents" },
    { id = 3, name = "Gear Upgrades" },
    { id = 4, name = "Rotation & Tactics" },
    { id = 5, name = "Class Quests" },
    { id = 6, name = "Macros & Sync" }
  }

  local tabWidth = 124
  for i, t in ipairs(tabDefs) do
    local tabBtn = CreateFrame("Button", nil, f, "UIPanelButtonTemplate")
    tabBtn:SetSize(tabWidth, 28)
    tabBtn:SetPoint("TOPLEFT", f, "TOPLEFT", 10 + (i - 1) * (tabWidth + 4), -106)
    tabBtn:SetText(t.name)
    tabBtn.tabName = t.name
    tabBtn:SetScript("OnClick", function()
      WoWGuide:SwitchTab(t.id)
    end)
    tabButtons[t.id] = tabBtn

    local panel = CreateFrame("Frame", nil, f, backdropTemplate)
    panel:SetSize(760, 412)
    panel:SetPoint("TOPLEFT", f, "TOPLEFT", 10, -138)
    ApplyCardBackdrop(panel, 0.04, 0.05, 0.08, 0.96, 0.25, 0.32, 0.44, 0.6)
    panel:Hide()
    tabPanels[t.id] = panel
  end

  -- ==========================================
  -- TAB 1: ROADMAP (Zone, Quests, Spells, Stats)
  -- ==========================================
  local p1 = tabPanels[1]

  -- Zone Header Card
  local zoneCard = CreateFrame("Frame", nil, p1, backdropTemplate)
  zoneCard:SetSize(740, 56)
  zoneCard:SetPoint("TOPLEFT", p1, "TOPLEFT", 10, -10)
  ApplyCardBackdrop(zoneCard, 0.08, 0.12, 0.18, 0.95, 0.2, 0.6, 0.9, 0.7)

  p1.zoneTitle = zoneCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightLarge")
  p1.zoneTitle:SetPoint("TOPLEFT", zoneCard, "TOPLEFT", 14, -8)

  p1.zoneHubs = zoneCard:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  p1.zoneHubs:SetPoint("TOPLEFT", zoneCard, "TOPLEFT", 14, -32)
  p1.zoneHubs:SetWidth(500)
  p1.zoneHubs:SetJustifyH("LEFT")

  p1.zoneRange = zoneCard:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  p1.zoneRange:SetPoint("TOPRIGHT", zoneCard, "TOPRIGHT", -14, -14)

  -- Quest Walkthrough Card
  local questCard = CreateFrame("Frame", nil, p1, backdropTemplate)
  questCard:SetSize(740, 195)
  questCard:SetPoint("TOPLEFT", zoneCard, "BOTTOMLEFT", 0, -8)
  ApplyCardBackdrop(questCard, 0.07, 0.09, 0.14, 0.95, 0.25, 0.45, 0.7, 0.6)

  local qHeaderBar = CreateFrame("Frame", nil, questCard, backdropTemplate)
  qHeaderBar:SetSize(732, 28)
  qHeaderBar:SetPoint("TOPLEFT", questCard, "TOPLEFT", 4, -4)
  ApplyCardBackdrop(qHeaderBar, 0.09, 0.13, 0.22, 0.9)

  p1.questHeader = qHeaderBar:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  p1.questHeader:SetPoint("LEFT", qHeaderBar, "LEFT", 10, 0)

  p1.questText = questCard:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  p1.questText:SetPoint("TOPLEFT", questCard, "TOPLEFT", 14, -38)
  p1.questText:SetWidth(712)
  p1.questText:SetJustifyH("LEFT")
  p1.questText:SetJustifyV("TOP")

  -- Bottom Split Row: Trainer Card (Left) & Stat Priority Card (Right)
  local trainerCard = CreateFrame("Frame", nil, p1, backdropTemplate)
  trainerCard:SetSize(366, 130)
  trainerCard:SetPoint("TOPLEFT", questCard, "BOTTOMLEFT", 0, -8)
  ApplyCardBackdrop(trainerCard, 0.07, 0.12, 0.09, 0.95, 0.2, 0.7, 0.3, 0.6)

  local tHeaderBar = CreateFrame("Frame", nil, trainerCard, backdropTemplate)
  tHeaderBar:SetSize(358, 26)
  tHeaderBar:SetPoint("TOPLEFT", trainerCard, "TOPLEFT", 4, -4)
  ApplyCardBackdrop(tHeaderBar, 0.09, 0.18, 0.12, 0.9)

  local tHeader = tHeaderBar:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  tHeader:SetPoint("LEFT", tHeaderBar, "LEFT", 10, 0)
  tHeader:SetText(ColorText("[Class Trainer Spells]", "4ADE80"))

  p1.trainerText = trainerCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
  p1.trainerText:SetPoint("TOPLEFT", trainerCard, "TOPLEFT", 12, -34)
  p1.trainerText:SetWidth(342)
  p1.trainerText:SetJustifyH("LEFT")
  p1.trainerText:SetJustifyV("TOP")

  local tipCard = CreateFrame("Frame", nil, p1, backdropTemplate)
  tipCard:SetSize(366, 130)
  tipCard:SetPoint("TOPRIGHT", questCard, "BOTTOMRIGHT", 0, -8)
  ApplyCardBackdrop(tipCard, 0.13, 0.10, 0.06, 0.95, 0.8, 0.6, 0.1, 0.6)

  local tipHeaderBar = CreateFrame("Frame", nil, tipCard, backdropTemplate)
  tipHeaderBar:SetSize(358, 26)
  tipHeaderBar:SetPoint("TOPLEFT", tipCard, "TOPLEFT", 4, -4)
  ApplyCardBackdrop(tipHeaderBar, 0.18, 0.14, 0.08, 0.9)

  local tipHeader = tipHeaderBar:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  tipHeader:SetPoint("LEFT", tipHeaderBar, "LEFT", 10, 0)
  tipHeader:SetText(ColorText("[Class Stat Priority & Pro Tip]", "FCD34D"))

  p1.tipText = tipCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
  p1.tipText:SetPoint("TOPLEFT", tipCard, "TOPLEFT", 12, -34)
  p1.tipText:SetWidth(342)
  p1.tipText:SetJustifyH("LEFT")
  p1.tipText:SetJustifyV("TOP")

  -- ==========================================
  -- TAB 2: TALENTS (Spotlight + Progression)
  -- ==========================================
  local p2 = tabPanels[2]

  local talentTopCard = CreateFrame("Frame", nil, p2, backdropTemplate)
  talentTopCard:SetSize(740, 85)
  talentTopCard:SetPoint("TOPLEFT", p2, "TOPLEFT", 10, -10)
  ApplyCardBackdrop(talentTopCard, 0.12, 0.08, 0.16, 0.95, 0.6, 0.3, 0.8, 0.7)

  p2.talentHeader = talentTopCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightLarge")
  p2.talentHeader:SetPoint("TOPLEFT", talentTopCard, "TOPLEFT", 14, -10)

  p2.talentDesc = talentTopCard:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  p2.talentDesc:SetPoint("TOPLEFT", talentTopCard, "TOPLEFT", 14, -36)
  p2.talentDesc:SetWidth(712)
  p2.talentDesc:SetJustifyH("LEFT")
  p2.talentDesc:SetJustifyV("TOP")

  local talentListCard = CreateFrame("Frame", nil, p2, backdropTemplate)
  talentListCard:SetSize(740, 305)
  talentListCard:SetPoint("TOPLEFT", talentTopCard, "BOTTOMLEFT", 0, -8)
  ApplyCardBackdrop(talentListCard, 0.06, 0.07, 0.11, 0.95)

  local tProgBar = CreateFrame("Frame", nil, talentListCard, backdropTemplate)
  tProgBar:SetSize(732, 26)
  tProgBar:SetPoint("TOPLEFT", talentListCard, "TOPLEFT", 4, -4)
  ApplyCardBackdrop(tProgBar, 0.09, 0.10, 0.16, 0.9)

  local tProgTitle = tProgBar:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  tProgTitle:SetPoint("LEFT", tProgBar, "LEFT", 10, 0)
  tProgTitle:SetText(ColorText("51-Point Talent Roadmap (Levels 10-60)", "38BDF8"))

  p2.talentListText = talentListCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
  p2.talentListText:SetPoint("TOPLEFT", talentListCard, "TOPLEFT", 14, -36)
  p2.talentListText:SetWidth(712)
  p2.talentListText:SetJustifyH("LEFT")
  p2.talentListText:SetJustifyV("TOP")

  -- ==========================================
  -- TAB 3: GEAR UPGRADES
  -- ==========================================
  local p3 = tabPanels[3]

  local gearTopCard = CreateFrame("Frame", nil, p3, backdropTemplate)
  gearTopCard:SetSize(740, 65)
  gearTopCard:SetPoint("TOPLEFT", p3, "TOPLEFT", 10, -10)
  ApplyCardBackdrop(gearTopCard, 0.08, 0.11, 0.17, 0.95, 0.3, 0.6, 0.9, 0.7)

  p3.gearHeader = gearTopCard:CreateFontString(nil, "OVERLAY", "GameFontHighlightLarge")
  p3.gearHeader:SetPoint("TOPLEFT", gearTopCard, "TOPLEFT", 14, -8)

  p3.gearTip = gearTopCard:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  p3.gearTip:SetPoint("TOPLEFT", gearTopCard, "TOPLEFT", 14, -34)
  p3.gearTip:SetWidth(712)
  p3.gearTip:SetJustifyH("LEFT")
  p3.gearTip:SetJustifyV("TOP")

  local gearListCard = CreateFrame("Frame", nil, p3, backdropTemplate)
  gearListCard:SetSize(740, 325)
  gearListCard:SetPoint("TOPLEFT", gearTopCard, "BOTTOMLEFT", 0, -8)
  ApplyCardBackdrop(gearListCard, 0.06, 0.07, 0.11, 0.95)

  p3.gearItemsText = gearListCard:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  p3.gearItemsText:SetPoint("TOPLEFT", gearListCard, "TOPLEFT", 14, -14)
  p3.gearItemsText:SetWidth(712)
  p3.gearItemsText:SetJustifyH("LEFT")
  p3.gearItemsText:SetJustifyV("TOP")

  -- ==========================================
  -- TAB 4: ROTATION & TACTICS
  -- ==========================================
  local p4 = tabPanels[4]

  local rotCard = CreateFrame("Frame", nil, p4, backdropTemplate)
  rotCard:SetSize(740, 395)
  rotCard:SetPoint("TOPLEFT", p4, "TOPLEFT", 10, -10)
  ApplyCardBackdrop(rotCard, 0.07, 0.09, 0.14, 0.95)

  local rHeaderBar = CreateFrame("Frame", nil, rotCard, backdropTemplate)
  rHeaderBar:SetSize(732, 28)
  rHeaderBar:SetPoint("TOPLEFT", rotCard, "TOPLEFT", 4, -4)
  ApplyCardBackdrop(rHeaderBar, 0.09, 0.13, 0.22, 0.9)

  local rHeader = rHeaderBar:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  rHeader:SetPoint("LEFT", rHeaderBar, "LEFT", 10, 0)
  rHeader:SetText(ColorText("Step-by-Step Combat Pull Sequence & Demon / Solo Tactics", "38BDF8"))

  p4.rotationText = rotCard:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  p4.rotationText:SetPoint("TOPLEFT", rotCard, "TOPLEFT", 14, -40)
  p4.rotationText:SetWidth(712)
  p4.rotationText:SetJustifyH("LEFT")
  p4.rotationText:SetJustifyV("TOP")

  -- ==========================================
  -- TAB 5: CLASS QUESTS
  -- ==========================================
  local p5 = tabPanels[5]

  local cqCard = CreateFrame("Frame", nil, p5, backdropTemplate)
  cqCard:SetSize(740, 395)
  cqCard:SetPoint("TOPLEFT", p5, "TOPLEFT", 10, -10)
  ApplyCardBackdrop(cqCard, 0.07, 0.09, 0.14, 0.95)

  local cqHeaderBar = CreateFrame("Frame", nil, cqCard, backdropTemplate)
  cqHeaderBar:SetSize(732, 28)
  cqHeaderBar:SetPoint("TOPLEFT", cqCard, "TOPLEFT", 4, -4)
  ApplyCardBackdrop(cqHeaderBar, 0.14, 0.11, 0.06, 0.9)

  local cqHeader = cqHeaderBar:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  cqHeader:SetPoint("LEFT", cqHeaderBar, "LEFT", 10, 0)
  cqHeader:SetText(ColorText("Essential Horde Class Quests & Mount Unlocks", "FCD34D"))

  p5.questsText = cqCard:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  p5.questsText:SetPoint("TOPLEFT", cqCard, "TOPLEFT", 14, -40)
  p5.questsText:SetWidth(712)
  p5.questsText:SetJustifyH("LEFT")
  p5.questsText:SetJustifyV("TOP")

  -- ==========================================
  -- TAB 6: MACROS & WEB SYNC
  -- ==========================================
  local p6 = tabPanels[6]

  local syncBox = CreateFrame("Frame", nil, p6, backdropTemplate)
  syncBox:SetSize(740, 140)
  syncBox:SetPoint("TOPLEFT", p6, "TOPLEFT", 10, -10)
  ApplyCardBackdrop(syncBox, 0.08, 0.12, 0.18, 0.95, 0.3, 0.7, 0.9, 0.8)

  local syncHeader = syncBox:CreateFontString(nil, "OVERLAY", "GameFontHighlightLarge")
  syncHeader:SetPoint("TOPLEFT", syncBox, "TOPLEFT", 14, -10)
  syncHeader:SetText(ColorText("Live Multi-Computer Web Sync", "38BDF8"))

  local syncExpl = syncBox:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  syncExpl:SetPoint("TOPLEFT", syncBox, "TOPLEFT", 14, -36)
  syncExpl:SetWidth(500)
  syncExpl:SetJustifyH("LEFT")
  syncExpl:SetText(
    "1. " .. ColorText("Auto-Sync:", "4ADE80") .. " Double-click " .. ColorText("start_live_sync.bat", "FCD34D") .. " on Computer B to auto-sync.\n" ..
    "2. " .. ColorText("1-Click Code:", "38BDF8") .. " Click the button below to copy your character string into the site.\n" ..
    "3. " .. ColorText("Slash Command:", "FFFFFF") .. " Type " .. ColorText("/sync", "4ADE80") .. " anytime in chat to export your level & gear."
  )

  local syncTriggerBtn = CreateFrame("Button", nil, syncBox, "UIPanelButtonTemplate")
  syncTriggerBtn:SetSize(200, 38)
  syncTriggerBtn:SetPoint("RIGHT", syncBox, "RIGHT", -20, 0)
  syncTriggerBtn:SetText("Open 1-Click Sync Code")
  syncTriggerBtn:SetScript("OnClick", function()
    WoWGuide:ShowSyncPopup()
  end)

  local macroCard = CreateFrame("Frame", nil, p6, backdropTemplate)
  macroCard:SetSize(740, 248)
  macroCard:SetPoint("TOPLEFT", syncBox, "BOTTOMLEFT", 0, -8)
  ApplyCardBackdrop(macroCard, 0.07, 0.09, 0.14, 0.95)

  local mHeaderBar = CreateFrame("Frame", nil, macroCard, backdropTemplate)
  mHeaderBar:SetSize(732, 26)
  mHeaderBar:SetPoint("TOPLEFT", macroCard, "TOPLEFT", 4, -4)
  ApplyCardBackdrop(mHeaderBar, 0.14, 0.09, 0.06, 0.9)

  local mHeadTitle = mHeaderBar:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  mHeadTitle:SetPoint("LEFT", mHeaderBar, "LEFT", 10, 0)
  mHeadTitle:SetText(ColorText("Essential Horde Leveling Macros", "FF7D0A"))

  p6.macroText = macroCard:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  p6.macroText:SetPoint("TOPLEFT", macroCard, "TOPLEFT", 14, -34)
  p6.macroText:SetWidth(712)
  p6.macroText:SetJustifyH("LEFT")
  p6.macroText:SetJustifyV("TOP")

  -- Bottom Status Bar
  local statusBar = f:CreateFontString(nil, "OVERLAY", "GameFontNormalSmall")
  statusBar:SetPoint("BOTTOMLEFT", f, "BOTTOMLEFT", 18, 10)
  statusBar:SetWidth(720)
  statusBar:SetJustifyH("LEFT")
  f.statusBar = statusBar

  -- Start hidden
  f:Hide()
  mainFrame = f
  WoWGuide:SwitchTab(1)
  return mainFrame
end

-- ====================================================================
-- Tab Switching Logic
-- ====================================================================
function WoWGuide:SwitchTab(tabId)
  activeTab = tabId
  for id, panel in pairs(tabPanels) do
    if id == tabId then
      panel:Show()
      if tabButtons[id] then
        tabButtons[id]:SetText(ColorText("[" .. tabButtons[id].tabName .. "]", "FCD34D"))
      end
    else
      panel:Hide()
      if tabButtons[id] then
        tabButtons[id]:SetText(ColorText(tabButtons[id].tabName, "94A3B8"))
      end
    end
  end
  WoWGuide:RefreshView()
end

-- ====================================================================
-- Class & Level Switchers
-- ====================================================================
function WoWGuide:SetSelectedClass(cls)
  if cls == "ROGUE" then
    selectedClass = "ROGUE"
  elseif cls == "DRUID" then
    selectedClass = "DRUID"
  else
    selectedClass = "WARLOCK"
  end
  WoWGuide:RefreshView()
end

function WoWGuide:SetSelectedLevel(lvl)
  if lvl < 1 then lvl = 1 end
  if lvl > 60 then lvl = 60 end
  selectedLevel = lvl
  WoWGuide:RefreshView()
end

-- ====================================================================
-- Dynamic High-Fidelity View Refresh
-- ====================================================================
function WoWGuide:RefreshView()
  if not mainFrame then return end

  local ok, err = pcall(function()
    liveLevel = UnitLevel("player") or 1
    playerName = UnitName("player") or "Player"
    playerClass = DetectPlayerClass()

    if selectedLevel < 1 then selectedLevel = 1 end
    if selectedLevel > 60 then selectedLevel = 60 end

    local classData = GetClassGuideData(selectedClass)
    local classHex = GetClassColorHex(selectedClass)

    -- Header Icons & Buttons
    if selectedClass == "WARLOCK" then
      mainFrame.classIcon:SetTexture("Interface\\Icons\\Spell_Nature_Drowsy")
      if mainFrame.lockBtn then mainFrame.lockBtn:SetText(ColorText("[Warlock]", "FCD34D")) end
      if mainFrame.rogueBtn then mainFrame.rogueBtn:SetText(ColorText("Rogue", "64748B")) end
      if mainFrame.druidBtn then mainFrame.druidBtn:SetText(ColorText("Druid", "64748B")) end
    elseif selectedClass == "ROGUE" then
      mainFrame.classIcon:SetTexture("Interface\\Icons\\Ability_Stealth")
      if mainFrame.lockBtn then mainFrame.lockBtn:SetText(ColorText("Warlock", "64748B")) end
      if mainFrame.rogueBtn then mainFrame.rogueBtn:SetText(ColorText("[Rogue]", "FCD34D")) end
      if mainFrame.druidBtn then mainFrame.druidBtn:SetText(ColorText("Druid", "64748B")) end
    elseif selectedClass == "DRUID" then
      mainFrame.classIcon:SetTexture("Interface\\Icons\\Ability_Druid_CatForm")
      if mainFrame.lockBtn then mainFrame.lockBtn:SetText(ColorText("Warlock", "64748B")) end
      if mainFrame.rogueBtn then mainFrame.rogueBtn:SetText(ColorText("Rogue", "64748B")) end
      if mainFrame.druidBtn then mainFrame.druidBtn:SetText(ColorText("[Druid]", "FCD34D")) end
    else
      mainFrame.classIcon:SetTexture("Interface\\Icons\\INV_Misc_Book_09")
    end

    -- Title Section
    mainFrame.title:SetText(string.format("%s - %s Codex", ColorText(playerName, classHex), ColorText(selectedClass, "FFFFFF")))
    if classData then
      mainFrame.subTitle:SetText(ColorText(classData.title or "Leveling Guide", "38BDF8") .. "  |  " .. ColorText(classData.specSummary or "", "A0A0B0"))
    end

    -- Level Display
    local liveIndicator = (selectedLevel == liveLevel) and (" " .. ColorText("(Live)", "4ADE80")) or ""
    mainFrame.levelText:SetText(ColorText("Level " .. selectedLevel, "FCD34D") .. liveIndicator)

    -- Highlight Active Milestone Button
    for mLvl, mBtn in pairs(milestoneButtons) do
      if selectedLevel >= mLvl and (selectedLevel < (mLvl == 1 and 10 or mLvl + 10)) then
        mBtn:SetText(ColorText("*" .. mLvl .. "*", "FCD34D"))
      else
        mBtn:SetText(ColorText("Lvl " .. mLvl, "94A3B8"))
      end
    end

    -- Status Bar Gear & Currency
    local equippedCount = 0
    for slot = 1, 19 do
      if GetInventoryItemID("player", slot) then equippedCount = equippedCount + 1 end
    end
    mainFrame.statusBar:SetText(string.format("Character: %s (Lvl %d %s) - Gear: %s items - Gold: %s - Type %s for instant web export", ColorText(playerName, classHex), liveLevel, playerClass, ColorText(tostring(equippedCount), "38BDF8"), ColorText(FormatMoney(GetMoney()), "FFFFFF"), ColorText("/sync", "4ADE80")))

    local lvlData = classData and classData.levels and classData.levels[selectedLevel] or {}

    -- ==========================================
    -- TAB 1: ROADMAP REFRESH
    -- ==========================================
    local p1 = tabPanels[1]
    if activeTab == 1 and p1 then
      p1.zoneTitle:SetText(ColorText("[Zone] ", "38BDF8") .. ColorText(lvlData.zone or "Azeroth Leveling", "FFFFFF"))
      p1.zoneHubs:SetText(ColorText("Quest Hubs: ", "A0A0B0") .. ColorText(lvlData.hubs or "General Quests", "FFFFFF"))
      p1.zoneRange:SetText(ColorText("Level Bracket: ", "A0A0B0") .. ColorText(lvlData.zoneRange or "1-60", "FCD34D"))

      p1.questHeader:SetText(ColorText("[Level " .. selectedLevel .. " Objectives]: " .. (lvlData.title or "Leveling Walkthrough"), "FCD34D"))

      -- Format walkthrough into clean numbered directives
      local rawInstr = lvlData.zoneInstructions or "Explore the zone and complete local quest chains."
      local sentences = {}
      local stepNum = 1
      for s in string.gmatch(rawInstr, "([^%.]+)%.?") do
        local trimmed = SafeTrim(s)
        if #trimmed > 2 then
          table.insert(sentences, string.format("%s %s.", ColorText("[" .. stepNum .. "]", "38BDF8"), trimmed))
          stepNum = stepNum + 1
        end
      end
      if #sentences == 0 then table.insert(sentences, "[1] " .. rawInstr) end
      p1.questText:SetText(table.concat(sentences, "\n\n"))

      -- Trainer Spells
      if lvlData.trainerTrain and #lvlData.trainerTrain > 0 then
        local spLines = {}
        for _, sp in ipairs(lvlData.trainerTrain) do
          table.insert(spLines, ColorText("  [Learn] ", "4ADE80") .. ColorText(sp, "FFFFFF"))
        end
        p1.trainerText:SetText(ColorText("Visit Class Trainer at Level " .. selectedLevel .. ":\n", "FCD34D") .. table.concat(spLines, "\n"))
      else
        p1.trainerText:SetText(ColorText("No new spells to learn at Level " .. selectedLevel .. ".\n\n", "9CA3AF") .. ColorText("Save your gold and silver for future ability ranks and Level 40 Riding Mount!", "FCD34D"))
      end

      -- Pro Tip & Primary Stats
      local statInfo = ""
      if selectedClass == "WARLOCK" then
        statInfo = ColorText("Warlock Primary Stats:\n", "38BDF8") .. "Stamina (Health & Life Tap fuel)\nIntellect (Mana Pool & Spell Crit)\nSpirit (Health/Mana regen between pulls)\n\n"
      elseif selectedClass == "DRUID" then
        statInfo = ColorText("Horde Druid Primary Stats:\n", "FF7D0A") .. "Agility (Attack Power, Crit %, Dodge %)\nStrength (2 AP per point in Cat Form!)\nStamina (Bear/Cat health pool)\n\n"
      else
        statInfo = ColorText("Rogue Primary Stats:\n", "FFF569") .. "Agility (Attack Power, Crit %, Dodge %)\nStrength (Attack Power)\nStamina (Health Pool)\n\n"
      end
      p1.tipText:SetText(statInfo .. ColorText("Level Tip: ", "FCD34D") .. (lvlData.gearTip or "Prioritize gear with your primary stats."))
    end

    -- ==========================================
    -- TAB 2: TALENTS REFRESH
    -- ==========================================
    local p2 = tabPanels[2]
    if activeTab == 2 and p2 then
      local currentTalent = classData and classData.talentOrder and classData.talentOrder[selectedLevel]
      if selectedLevel < 10 then
        p2.talentHeader:SetText(ColorText("Talents Unlock at Level 10", "9CA3AF"))
        p2.talentDesc:SetText("You earn your first talent point upon reaching Level 10, earning +1 point each level through Level 60 (51 total points).\n\n" ..
          ColorText("Recommended Starting Tree: ", "38BDF8") .. (selectedClass == "WARLOCK" and ColorText("Affliction (Improved Corruption)", "C084FC") or ColorText("Assassination (Remorseless Attacks)", "FFF569")))
      elseif currentTalent then
        p2.talentHeader:SetText(ColorText("Level " .. selectedLevel .. " Point: " .. currentTalent.name, "4ADE80"))
        p2.talentDesc:SetText(ColorText("Tree: " .. currentTalent.tree:upper(), "C084FC") .. "  |  " .. ColorText("Strategy: ", "FCD34D") .. currentTalent.desc)
      else
        p2.talentHeader:SetText(ColorText("Talents Fully Maxed (Level 60)", "C084FC"))
        p2.talentDesc:SetText("All 51 talent points are completely allocated across your leveling build. You are raid-ready!")
      end

      local lines = {}
      if classData and classData.talentOrder then
        local startLvl = math.max(10, selectedLevel - 4)
        local endLvl = math.min(60, startLvl + 10)
        for l = startLvl, endLvl do
          local t = classData.talentOrder[l]
          if t then
            local badge = (l < liveLevel and ColorText("[Done]", "4ADE80")) or
                          (l == liveLevel and ColorText("[NEXT]", "FCD34D")) or
                          ColorText("[Upcoming]", "64748B")
            table.insert(lines, string.format("%s  %s  %s  %s", badge, ColorText("Level " .. l .. ":", "FFFFFF"), ColorText(t.name, l <= liveLevel and "FFFFFF" or "94A3B8"), ColorText("(" .. t.tree .. ")", "38BDF8")))
          end
        end
      end
      p2.talentListText:SetText(table.concat(lines, "\n\n"))
    end

    -- ==========================================
    -- TAB 3: GEAR REFRESH
    -- ==========================================
    local p3 = tabPanels[3]
    if activeTab == 3 and p3 then
      p3.gearHeader:SetText(ColorText("Level " .. selectedLevel .. " Recommended Weapons & Upgrades", "38BDF8"))
      p3.gearTip:SetText(ColorText("Stat Focus: ", "FCD34D") .. (lvlData.gearTip or "Look for upgrades with your primary class stats."))

      local lines = {}
      local dGear = lvlData.dungeonGear or {}
      if #dGear > 0 then
        for i, g in ipairs(dGear) do
          local qColor = g.quality == "rare" and "0070DD" or "1EFF00"
          table.insert(lines, string.format("%d. %s - %s", i, ColorText(g.name, qColor), ColorText(g.stats or "", "FFFFFF")))
          table.insert(lines, string.format("   Source: %s", ColorText(g.source or "", "A0A0B0")))
          if g.tip and g.tip ~= "" then
            table.insert(lines, string.format("   Tip: %s", ColorText(g.tip, "FCD34D")))
          end
          table.insert(lines, "")
        end
      else
        table.insert(lines, ColorText("No major weapon milestones at Level " .. selectedLevel .. ".", "9CA3AF"))
        table.insert(lines, "Check ahead using the < and > buttons at the top to preview future weapon upgrades.")
        table.insert(lines, "")
        if selectedClass == "WARLOCK" then
          table.insert(lines, ColorText("Core Warlock Wand Progression Milestones:", "FCD34D"))
          table.insert(lines, "- Level 5:  " .. ColorText("Lesser Magic Wand", "1EFF00") .. " (11.3 DPS) - Enchanting craft / AH")
          table.insert(lines, "- Level 13: " .. ColorText("Greater Magic Wand", "1EFF00") .. " (17.5 DPS) - Enchanting craft / AH")
          table.insert(lines, "- Level 27: " .. ColorText("Gravestone Scepter", "0070DD") .. " (29.0 DPS) - Blackfathom Deeps Quest (Must Have!)")
          table.insert(lines, "- Level 42: " .. ColorText("Nether Force Wand", "1EFF00") .. " (40.5 DPS) - Gadgetzan Quest")
        else
          table.insert(lines, ColorText("Core Rogue Weapon Progression Milestones:", "FCD34D"))
          table.insert(lines, "- Level 17: " .. ColorText("Thief's Blade", "1EFF00") .. " (16.5 DPS Sword) - World drop")
          table.insert(lines, "- Level 19: " .. ColorText("Shadowfang", "0070DD") .. " (18.1 DPS Sword) - SFK Rare drop")
          table.insert(lines, "- Level 38: " .. ColorText("Vanquisher's Sword", "0070DD") .. " (30.6 DPS Sword) - RFD Dungeon Quest")
          table.insert(lines, "- Level 45: " .. ColorText("Thrash Blade", "0070DD") .. " (39.4 DPS Extra Attack) - Maraudon Quest")
        end
      end
      p3.gearItemsText:SetText(table.concat(lines, "\n"))
    end

    -- ==========================================
    -- TAB 4: ROTATION & TACTICS REFRESH
    -- ==========================================
    local p4 = tabPanels[4]
    if activeTab == 4 and p4 then
      local rot = lvlData.rotation or {}
      local rotLines = {}
      table.insert(rotLines, ColorText("Step-by-Step Combat Pull Sequence (Level " .. selectedLevel .. "):", "FCD34D"))
      table.insert(rotLines, "")
      for i, step in ipairs(rot) do
        table.insert(rotLines, string.format("  %s %s", ColorText("Step " .. i .. ":", "38BDF8"), step))
      end

      table.insert(rotLines, "")
      table.insert(rotLines, ColorText("-----------------------------------------------------------------", "334155"))
      table.insert(rotLines, "")

      if selectedClass == "WARLOCK" then
        table.insert(rotLines, ColorText("Demon Pet Mastery & Rotation Guide:", "C084FC"))
        table.insert(rotLines, "- Level 1-9 (Imp): Firebolt burst + Blood Pact stamina aura. Keep on Defensive.")
        table.insert(rotLines, "- Level 10-19 (Voidwalker): Your solo tank. VW Torment first, then cast DoTs.")
        table.insert(rotLines, "- Level 20+ (Succubus): Highest solo DPS! Pair with Drain Life for zero downtime.")
        table.insert(rotLines, "")
        table.insert(rotLines, ColorText("Infinite Mana / Zero Downtime Rule:", "4ADE80"))
        table.insert(rotLines, "- Never drink water! Kill mob -> Drain Soul for 100% mana regen -> Life Tap -> First Aid Bandage / Cannibalize!")
      elseif selectedClass == "DRUID" then
        table.insert(rotLines, ColorText("Horde Feral Druid Solo Strategy:", "FF7D0A"))
        table.insert(rotLines, "- Level 1-9: Wrath pull -> Moonfire -> Melee. Cast Rejuvenation to keep healing.")
        table.insert(rotLines, "- Level 10-19: Bear Form! Enrage for instant rage -> Demoralizing Roar -> Maul spam. Bash + Regrowth for healing.")
        table.insert(rotLines, "- Level 20+: Cat Form! Prowl opener -> Rake DoT -> Claw to 4-5 CP -> Ferocious Bite! Zero mana downtime!")
      else
        table.insert(rotLines, ColorText("Combat Rogue Solo Leveling Strategy:", "FFF569"))
        table.insert(rotLines, "- Opener: Sinister Strike (or Garrote if opening from stealth).")
        table.insert(rotLines, "- Finisher: Slice and Dice priority! Keep +30% attack speed buff active at all times.")
        table.insert(rotLines, "- Emergency Reset: Gouge mob (4s incapacitate) -> step back 5 yards -> use First Aid Bandage!")
      end

      p4.rotationText:SetText(table.concat(rotLines, "\n"))
    end

    -- ==========================================
    -- TAB 5: CLASS QUESTS REFRESH
    -- ==========================================
    local p5 = tabPanels[5]
    if activeTab == 5 and p5 and classData and classData.classQuests then
      local lines = {}
      for i, q in ipairs(classData.classQuests) do
        local isDone = liveLevel >= q.lvl
        local status = isDone and ColorText("[Completed]", "4ADE80") or ColorText("[Available Now]", "FCD34D")
        table.insert(lines, string.format("%s  %s  %s", status, ColorText("Level " .. q.lvl .. ": " .. q.title, isDone and "E2E8F0" or "FCD34D"), ColorText("Location: " .. q.zone, "38BDF8")))
        table.insert(lines, string.format("   NPC: %s", ColorText(q.npc or "", "A0A0B0")))
        table.insert(lines, string.format("   %s", q.desc or ""))
        table.insert(lines, "")
      end
      p5.questsText:SetText(table.concat(lines, "\n"))
    end

    -- ==========================================
    -- TAB 6: MACROS & WEB SYNC REFRESH
    -- ==========================================
    local p6 = tabPanels[6]
    if activeTab == 6 and p6 and classData and classData.macros then
      local lines = {}
      for i, m in ipairs(classData.macros) do
        table.insert(lines, string.format("%d. %s", i, ColorText(m.title, "38BDF8")))
        table.insert(lines, string.format("   Command: %s", ColorText(m.code:gsub("\n", "  |  "), "FCD34D")))
        table.insert(lines, string.format("   Tip: %s", ColorText(m.desc or "", "94A3B8")))
        table.insert(lines, "")
      end
      p6.macroText:SetText(table.concat(lines, "\n"))
    end
  end)

  if not ok and DEFAULT_CHAT_FRAME then
    DEFAULT_CHAT_FRAME:AddMessage("|cFFFF0000[WoWGuide Refresh Error]: |r" .. tostring(err))
  end
end

-- ====================================================================
-- Minimap Floating Button
-- ====================================================================
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
    GameTooltip:AddLine("Left-Click: Open / Close Guide Window", 1, 1, 1)
    GameTooltip:AddLine("Right-Click: Open 1-Click Sync Code", 0.3, 0.8, 1)
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

-- ====================================================================
-- 1-Click Sync Code Popup Modal
-- ====================================================================
function WoWGuide:ShowSyncPopup()
  local ok, err = pcall(function()
    WoWGuide:SaveCharacterSnapshot(liveLevel)
    local lvl = UnitLevel("player") or 1
    local name = UnitName("player") or "Player"
    local code = string.format("%s:%d", name, lvl)
    local url = string.format("https://ahumpo7.github.io/wow-druid-guide/?sync=%s:%d", name, lvl)

    if not syncPopupFrame then
      local p = CreateFrame("Frame", "WoWGuideSyncPopup", UIParent, backdropTemplate)
      p:SetSize(460, 230)
      p:SetPoint("CENTER", UIParent, "CENTER", 0, 80)
      p:SetFrameStrata("DIALOG")
      p:EnableMouse(true)
      ApplyCardBackdrop(p, 0.05, 0.06, 0.09, 0.98, 0.9, 0.7, 0.2, 0.9)

      local title = p:CreateFontString(nil, "OVERLAY", "GameFontHighlightLarge")
      title:SetPoint("TOP", p, "TOP", 0, -14)
      title:SetText(ColorText("1-Click Web Sync Code", "FF7D0A"))

      local desc = p:CreateFontString(nil, "OVERLAY", "GameFontNormal")
      desc:SetPoint("TOP", p, "TOP", 0, -42)
      desc:SetText("Press Ctrl+C to copy this code, then paste it on your website:")

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
      close:SetScript("OnClick", function() p:Hide() end)

      syncPopupFrame = p
    end

    if DEFAULT_CHAT_FRAME then
      DEFAULT_CHAT_FRAME:AddMessage(string.format("|cFFFF7D0A[WoWGuide]|r Character snapshot saved! Sync string: |cFF4ADE80%s|r", code))
    end

    syncPopupFrame.editBox:SetText(code)
    syncPopupFrame.editBox:HighlightText()
    syncPopupFrame.editBox:SetFocus()
    syncPopupFrame:Show()
  end)

  if not ok and DEFAULT_CHAT_FRAME then
    DEFAULT_CHAT_FRAME:AddMessage("|cFFFF0000[WoWGuide Sync Error]: |r" .. tostring(err))
  end
end

-- ====================================================================
-- Character Snapshot Persistence
-- ====================================================================
function WoWGuide:SaveCharacterSnapshot(overrideLvl)
  local name = UnitName("player") or "Player"
  local lvl = overrideLvl or UnitLevel("player") or 1
  local classToken = DetectPlayerClass()
  local money = GetMoney()

  local equip = {}
  for slot = 1, 19 do
    local id = GetInventoryItemID and GetInventoryItemID("player", slot) or nil
    if not id and GetInventoryItemLink then
      local link = GetInventoryItemLink("player", slot)
      if link then
        local _, _, idStr = string.find(link, "item:(%d+)")
        if idStr then id = tonumber(idStr) end
      end
    end
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

-- ====================================================================
-- Window Toggle & Slash Commands
-- ====================================================================
function WoWGuide:Toggle()
  local win = CreateMainGuideWindow()
  if win:IsShown() then
    win:Hide()
  else
    selectedLevel = liveLevel or UnitLevel("player") or 1
    win:Show()
    WoWGuide:RefreshView()
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
    selectedClass = playerClass

    CreateMinimapButton()
    WoWGuide:SaveCharacterSnapshot(liveLevel)

    if DEFAULT_CHAT_FRAME then
      DEFAULT_CHAT_FRAME:AddMessage(string.format("|cFFFF7D0A[WoWGuide]|r Loaded for %s (Level %d %s). Type |cFF38BDF8/guide|r to open your leveling advisor, or |cFF38BDF8/sync|r to export!", playerName, liveLevel, playerClass))
    end
  elseif event == "PLAYER_LEVEL_UP" then
    local newLvl = ...
    liveLevel = newLvl or UnitLevel("player") or 1
    selectedLevel = liveLevel
    if DEFAULT_CHAT_FRAME then
      DEFAULT_CHAT_FRAME:AddMessage(string.format("|cFFFF7D0A[WoWGuide]|r |cFF4ADE80DING! Level %d reached!|r Type |cFF38BDF8/guide|r to review your next talent and trainer spells.", liveLevel))
    end
    if mainFrame and mainFrame:IsShown() then
      WoWGuide:RefreshView()
    end
    WoWGuide:SaveCharacterSnapshot(liveLevel)
  elseif event == "UNIT_INVENTORY_CHANGED" or event == "PLAYER_LOGOUT" then
    WoWGuide:SaveCharacterSnapshot(liveLevel)
  end
end)

SLASH_WOWGUIDE1 = "/guide"
SLASH_WOWGUIDE2 = "/wowguide"
SlashCmdList["WOWGUIDE"] = function(msg)
  local ok, err = pcall(function()
    local arg = string.lower(SafeTrim(msg or ""))
    if arg == "sync" or arg == "export" then
      WoWGuide:ShowSyncPopup()
    elseif arg == "warlock" or arg == "lock" then
      WoWGuide:SetSelectedClass("WARLOCK")
      if not (mainFrame and mainFrame:IsShown()) then WoWGuide:Toggle() end
    elseif arg == "rogue" then
      WoWGuide:SetSelectedClass("ROGUE")
      if not (mainFrame and mainFrame:IsShown()) then WoWGuide:Toggle() end
    elseif arg == "druid" then
      WoWGuide:SetSelectedClass("DRUID")
      if not (mainFrame and mainFrame:IsShown()) then WoWGuide:Toggle() end
    else
      WoWGuide:Toggle()
    end
  end)
  if not ok and DEFAULT_CHAT_FRAME then
    DEFAULT_CHAT_FRAME:AddMessage("|cFFFF0000[WoWGuide Error]: |r" .. tostring(err))
  end
end

SLASH_WOWSYNC1 = "/sync"
SLASH_WOWSYNC2 = "/wowsync"
SlashCmdList["WOWSYNC"] = function()
  local ok, err = pcall(function()
    WoWGuide:ShowSyncPopup()
  end)
  if not ok and DEFAULT_CHAT_FRAME then
    DEFAULT_CHAT_FRAME:AddMessage("|cFFFF0000[WoWGuide Sync Error]: |r" .. tostring(err))
  end
end
