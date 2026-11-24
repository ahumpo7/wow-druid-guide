-- ========================================================
-- WoW Forever Leveling Guide & Live Sync Addon
-- Automatic Leveling Steps, Talents, Spells & 1-Click Sync
-- ========================================================

local addonName = "WoWGuide"
WoWGuide_SavedData = WoWGuide_SavedData or {}

local playerClass = nil
local playerLevel = 1
local playerName = ""

-- Helper color formatting
local function ColorText(text, hexColor)
  return string.format("|cFF%s%s|r", hexColor or "FFFFFF", text or "")
end

-- Slash Commands
SLASH_WOWGUIDE1 = "/guide"
SLASH_WOWGUIDE2 = "/wowguide"
SLASH_WOWGUIDE3 = "/sync"

-- Main UI Frame
local mainFrame = nil
local syncPopupFrame = nil

local function GetClassGuideData()
  if playerClass == "WARLOCK" then
    return WoWGuide_Warlock
  elseif playerClass == "ROGUE" then
    return WoWGuide_Rogue
  end
  return nil
end

-- Create the In-Game Guide Window
local function CreateGuideWindow()
  if mainFrame then return mainFrame end

  -- Backdrop template compatible with modern Classic / Forever client
  local frame = CreateFrame("Frame", "WoWGuideMainFrame", UIParent, "BackdropTemplate")
  frame:SetSize(460, 480)
  frame:SetPoint("CENTER", UIParent, "CENTER", 100, 50)
  frame:SetMovable(true)
  frame:EnableMouse(true)
  frame:RegisterForDrag("LeftButton")
  frame:SetScript("OnDragStart", frame.StartMoving)
  frame:SetScript("OnDragStop", frame.StopMovingOrSizing)
  frame:SetClampedToScreen(true)
  frame:SetFrameStrata("HIGH")

  if frame.SetBackdrop then
    frame:SetBackdrop({
      bgFile = "Interface\\DialogFrame\\UI-DialogBox-Background-Dark",
      edgeFile = "Interface\\DialogFrame\\UI-DialogBox-Border",
      tile = true, tileSize = 32, edgeSize = 24,
      insets = { left = 6, right = 6, top = 6, bottom = 6 }
    })
    frame:SetBackdropColor(0.08, 0.08, 0.12, 0.94)
  end

  -- Header Bar
  local title = frame:CreateFontString(nil, "OVERLAY", "GameFontHighlightLarge")
  title:SetPoint("TOPLEFT", 18, -16)
  title:SetText(ColorText("⚔ WoW Forever Guide", "FF7D0A"))
  frame.title = title

  local subTitle = frame:CreateFontString(nil, "OVERLAY", "GameFontNormalSmall")
  subTitle:SetPoint("TOPLEFT", 18, -36)
  subTitle:SetText(ColorText("Live Leveling & Talent Advisor", "A0A0B0"))
  frame.subTitle = subTitle

  -- Close Button
  local closeBtn = CreateFrame("Button", nil, frame, "UIPanelCloseButton")
  closeBtn:SetPoint("TOPRIGHT", frame, "TOPRIGHT", -4, -4)

  -- Level Badge
  local levelBadge = frame:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  levelBadge:SetPoint("TOPRIGHT", closeBtn, "TOPLEFT", -10, -6)
  frame.levelBadge = levelBadge

  -- Section 1: Current Leveling Zone & Objectives
  local zoneBox = CreateFrame("Frame", nil, frame, "BackdropTemplate")
  zoneBox:SetSize(424, 90)
  zoneBox:SetPoint("TOPLEFT", 18, -60)
  if zoneBox.SetBackdrop then
    zoneBox:SetBackdrop({
      bgFile = "Interface\\Buttons\\WHITE8x8",
      edgeFile = "Interface\\Tooltips\\UI-Tooltip-Border",
      tile = true, tileSize = 16, edgeSize = 12,
      insets = { left = 3, right = 3, top = 3, bottom = 3 }
    })
    zoneBox:SetBackdropColor(0.12, 0.15, 0.22, 0.8)
    zoneBox:SetBackdropBorderColor(0.3, 0.4, 0.6, 0.6)
  end

  local zoneHeader = zoneBox:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  zoneHeader:SetPoint("TOPLEFT", 10, -8)
  zoneHeader:SetText(ColorText("📍 Current Recommended Zone", "38BDF8"))

  local zoneName = zoneBox:CreateFontString(nil, "OVERLAY", "GameFontHighlightLarge")
  zoneName:SetPoint("TOPLEFT", 10, -26)
  frame.zoneName = zoneName

  local zoneTip = zoneBox:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
  zoneTip:SetPoint("TOPLEFT", 10, -48)
  zoneTip:SetPoint("BOTTOMRIGHT", -10, 8)
  zoneTip:SetJustifyH("LEFT")
  zoneTip:SetJustifyV("TOP")
  frame.zoneTip = zoneTip

  -- Section 2: Next Talent Recommendation
  local talentBox = CreateFrame("Frame", nil, frame, "BackdropTemplate")
  talentBox:SetSize(424, 85)
  talentBox:SetPoint("TOPLEFT", zoneBox, "BOTTOMLEFT", 0, -10)
  if talentBox.SetBackdrop then
    talentBox:SetBackdrop({
      bgFile = "Interface\\Buttons\\WHITE8x8",
      edgeFile = "Interface\\Tooltips\\UI-Tooltip-Border",
      tile = true, tileSize = 16, edgeSize = 12,
      insets = { left = 3, right = 3, top = 3, bottom = 3 }
    })
    talentBox:SetBackdropColor(0.18, 0.12, 0.22, 0.8)
    talentBox:SetBackdropBorderColor(0.6, 0.3, 0.7, 0.6)
  end

  local talentHeader = talentBox:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  talentHeader:SetPoint("TOPLEFT", 10, -8)
  talentHeader:SetText(ColorText("🌟 Next Talent Point Choice", "C084FC"))

  local talentChoice = talentBox:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  talentChoice:SetPoint("TOPLEFT", 10, -26)
  frame.talentChoice = talentChoice

  local talentTip = talentBox:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
  talentTip:SetPoint("TOPLEFT", 10, -46)
  talentTip:SetPoint("BOTTOMRIGHT", -10, 8)
  talentTip:SetJustifyH("LEFT")
  talentTip:SetJustifyV("TOP")
  frame.talentTip = talentTip

  -- Section 3: Class Trainer Spells at Current Level
  local trainerBox = CreateFrame("Frame", nil, frame, "BackdropTemplate")
  trainerBox:SetSize(424, 75)
  trainerBox:SetPoint("TOPLEFT", talentBox, "BOTTOMLEFT", 0, -10)
  if trainerBox.SetBackdrop then
    trainerBox:SetBackdrop({
      bgFile = "Interface\\Buttons\\WHITE8x8",
      edgeFile = "Interface\\Tooltips\\UI-Tooltip-Border",
      tile = true, tileSize = 16, edgeSize = 12,
      insets = { left = 3, right = 3, top = 3, bottom = 3 }
    })
    trainerBox:SetBackdropColor(0.15, 0.18, 0.12, 0.8)
    trainerBox:SetBackdropBorderColor(0.4, 0.7, 0.3, 0.6)
  end

  local trainerHeader = trainerBox:CreateFontString(nil, "OVERLAY", "GameFontNormal")
  trainerHeader:SetPoint("TOPLEFT", 10, -8)
  trainerHeader:SetText(ColorText("🎓 Class Trainer Spells", "4ADE80"))

  local trainerText = trainerBox:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
  trainerText:SetPoint("TOPLEFT", 10, -28)
  trainerText:SetPoint("BOTTOMRIGHT", -10, 8)
  trainerText:SetJustifyH("LEFT")
  trainerText:SetJustifyV("TOP")
  frame.trainerText = trainerText

  -- Section 4: Live Equipped Gear Summary
  local gearSummary = frame:CreateFontString(nil, "OVERLAY", "GameFontNormalSmall")
  gearSummary:SetPoint("TOPLEFT", trainerBox, "BOTTOMLEFT", 4, -10)
  gearSummary:SetPoint("RIGHT", frame, "RIGHT", -18)
  gearSummary:SetJustifyH("LEFT")
  frame.gearSummary = gearSummary

  -- Action Buttons at bottom
  local syncBtn = CreateFrame("Button", nil, frame, "UIPanelButtonTemplate")
  syncBtn:SetSize(190, 32)
  syncBtn:SetPoint("BOTTOMLEFT", 18, 16)
  syncBtn:SetText("⚡ Export Sync String")
  syncBtn:SetScript("OnClick", function()
    WoWGuide:ShowSyncPopup()
  end)

  local refreshBtn = CreateFrame("Button", nil, frame, "UIPanelButtonTemplate")
  refreshBtn:SetSize(110, 32)
  refreshBtn:SetPoint("BOTTOMLEFT", syncBtn, "BOTTOMRIGHT", 8, 0)
  refreshBtn:SetText("↻ Refresh")
  refreshBtn:SetScript("OnClick", function()
    WoWGuide:UpdateUI()
  end)

  local closeBottomBtn = CreateFrame("Button", nil, frame, "UIPanelButtonTemplate")
  closeBottomBtn:SetSize(100, 32)
  closeBottomBtn:SetPoint("BOTTOMRIGHT", -18, 16)
  closeBottomBtn:SetText("Close")
  closeBottomBtn:SetScript("OnClick", function()
    frame:Hide()
  end)

  mainFrame = frame
  return mainFrame
end

-- Export / Sync Popup Window with Copyable EditBox
function WoWGuide:ShowSyncPopup()
  if not syncPopupFrame then
    local p = CreateFrame("Frame", "WoWGuideSyncPopup", UIParent, "BackdropTemplate")
    p:SetSize(420, 200)
    p:SetPoint("CENTER", UIParent, "CENTER", 0, 80)
    p:SetFrameStrata("DIALOG")
    p:EnableMouse(true)
    if p.SetBackdrop then
      p:SetBackdrop({
        bgFile = "Interface\\DialogFrame\\UI-DialogBox-Background-Dark",
        edgeFile = "Interface\\DialogFrame\\UI-DialogBox-Border",
        tile = true, tileSize = 32, edgeSize = 20,
        insets = { left = 5, right = 5, top = 5, bottom = 5 }
      })
      p:SetBackdropColor(0.05, 0.05, 0.08, 0.98)
    end

    local title = p:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
    title:SetPoint("TOP", 0, -14)
    title:SetText(ColorText("🔗 1-Click Live Web Sync Code", "FF7D0A"))

    local desc = p:CreateFontString(nil, "OVERLAY", "GameFontNormalSmall")
    desc:SetPoint("TOP", 0, -36)
    desc:SetText("Press Ctrl+C to copy your character code, then paste into the website:")

    local editBox = CreateFrame("EditBox", nil, p, "InputBoxTemplate")
    editBox:SetSize(360, 30)
    editBox:SetPoint("CENTER", 0, -8)
    editBox:SetAutoFocus(true)
    p.editBox = editBox

    local doneBtn = CreateFrame("Button", nil, p, "UIPanelButtonTemplate")
    doneBtn:SetSize(120, 28)
    doneBtn:SetPoint("BOTTOM", 0, 16)
    doneBtn:SetText("Done")
    doneBtn:SetScript("OnClick", function() p:Hide() end)

    local close = CreateFrame("Button", nil, p, "UIPanelCloseButton")
    close:SetPoint("TOPRIGHT", p, "TOPRIGHT", -2, -2)

    syncPopupFrame = p
  end

  local lvl = UnitLevel("player")
  local name = UnitName("player")
  local code = string.format("%s:%d", name, lvl)

  syncPopupFrame.editBox:SetText(code)
  syncPopupFrame.editBox:HighlightText()
  syncPopupFrame.editBox:SetFocus()
  syncPopupFrame:Show()
end

-- Update all UI Elements from Live Game State
function WoWGuide:UpdateUI()
  if not mainFrame then return end

  playerLevel = UnitLevel("player")
  playerName = UnitName("player")
  local _, classToken = UnitClass("player")
  playerClass = classToken

  local classData = GetClassGuideData()

  -- Update Title & Badges
  local classColor = playerClass == "WARLOCK" and "9482C9" or (playerClass == "ROGUE" and "FFF569" or "FF7D0A")
  mainFrame.title:SetText(string.format("%s %s", ColorText(playerName, classColor), ColorText(string.format("(Level %d %s)", playerLevel, playerClass or ""), "FFFFFF")))

  if classData then
    mainFrame.subTitle:SetText(ColorText(classData.title, "38BDF8"))
  end

  -- Update Zone Recommendation
  local curZone = nil
  if classData and classData.zones then
    for _, z in ipairs(classData.zones) do
      if playerLevel >= z.min and playerLevel <= z.max then
        curZone = z
        break
      end
    end
  end

  if curZone then
    mainFrame.zoneName:SetText(curZone.name)
    mainFrame.zoneTip:SetText(curZone.tip)
  else
    mainFrame.zoneName:SetText("Azeroth Leveling")
    mainFrame.zoneTip:SetText("Continue questing in your faction leveling zones.")
  end

  -- Update Next Talent Recommendation
  if playerLevel < 10 then
    mainFrame.talentChoice:SetText(ColorText("First talent unlocks at Level 10!", "9CA3AF"))
    mainFrame.talentTip:SetText("Keep questing. You will gain 1 talent point every level from 10 to 60.")
  elseif classData and classData.talents and classData.talents[playerLevel] then
    local t = classData.talents[playerLevel]
    mainFrame.talentChoice:SetText(ColorText(t.point, "4ADE80"))
    mainFrame.talentTip:SetText(t.tip)
  else
    mainFrame.talentChoice:SetText(ColorText(string.format("Level %d Talent Allocated", playerLevel), "C084FC"))
    mainFrame.talentTip:SetText("Check your talent tree (press N) to ensure points match your spec.")
  end

  -- Update Trainer Spells
  if classData and classData.trainerSpells and classData.trainerSpells[playerLevel] then
    mainFrame.trainerText:SetText(ColorText("⭐ New Spells Available at Trainer:\n", "FCD34D") .. classData.trainerSpells[playerLevel])
  else
    -- Find next upcoming spell level
    local nextLvl = nil
    if classData and classData.trainerSpells then
      for lvl = playerLevel + 1, 60 do
        if classData.trainerSpells[lvl] then
          nextLvl = lvl
          break
        end
      end
    end
    if nextLvl then
      mainFrame.trainerText:SetText(string.format("No new spells at %d. Next spell training is at %s (%s).", playerLevel, ColorText("Level " .. nextLvl, "38BDF8"), classData.trainerSpells[nextLvl]))
    else
      mainFrame.trainerText:SetText("All core leveling spells trained. Visit trainer at 60 for final ranks.")
    end
  end

  -- Update Live Gear Summary
  local equippedCount = 0
  for slot = 1, 19 do
    if GetInventoryItemID("player", slot) then
      equippedCount = equippedCount + 1
    end
  end
  mainFrame.gearSummary:SetText(string.format("Equipped: %s items | Current Money: %s", ColorText(tostring(equippedCount), "38BDF8"), ColorText(GetCoinTextureString(GetMoney()), "FFFFFF")))
end

-- Save Character snapshot to SavedVariables on logout/reload
function WoWGuide:SaveCharacterSnapshot()
  local name = UnitName("player")
  local lvl = UnitLevel("player")
  local _, classToken = UnitClass("player")
  local money = GetMoney()

  local equip = {}
  for slot = 1, 19 do
    local id = GetInventoryItemID("player", slot)
    if id then
      equip[slot] = id
    end
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

-- Event Handling Frame
local eventFrame = CreateFrame("Frame")
eventFrame:RegisterEvent("PLAYER_LOGIN")
eventFrame:RegisterEvent("PLAYER_LEVEL_UP")
eventFrame:RegisterEvent("PLAYER_LOGOUT")
eventFrame:RegisterEvent("UNIT_INVENTORY_CHANGED")

eventFrame:SetScript("OnEvent", function(self, event, ...)
  if event == "PLAYER_LOGIN" then
    playerLevel = UnitLevel("player")
    playerName = UnitName("player")
    local _, classToken = UnitClass("player")
    playerClass = classToken

    DEFAULT_CHAT_FRAME:AddMessage(string.format("|cFFFF7D0A[WoWGuide]|r Loaded for %s (Level %d %s). Type |cFF38BDF8/guide|r to open your leveling advisor, or |cFF38BDF8/sync|r to export!", playerName, playerLevel, playerClass or ""))
    WoWGuide:SaveCharacterSnapshot()
  elseif event == "PLAYER_LEVEL_UP" then
    local newLvl = ...
    playerLevel = newLvl or UnitLevel("player")
    DEFAULT_CHAT_FRAME:AddMessage(string.format("|cFFFF7D0A[WoWGuide]|r |cFF4ADE80DING! Level %d reached!|r Type |cFF38BDF8/guide|r to see your next talent and trainer spells.", playerLevel))
    if mainFrame and mainFrame:IsShown() then
      WoWGuide:UpdateUI()
    end
    WoWGuide:SaveCharacterSnapshot()
  elseif event == "UNIT_INVENTORY_CHANGED" or event == "PLAYER_LOGOUT" then
    WoWGuide:SaveCharacterSnapshot()
  end
end)

-- Slash Command Handler
SlashCmdList["WOWGUIDE"] = function(msg)
  local arg = string.lower(strtrim(msg or ""))
  if arg == "sync" or arg == "export" then
    WoWGuide:ShowSyncPopup()
  else
    local win = CreateGuideWindow()
    if win:IsShown() then
      win:Hide()
    else
      WoWGuide:UpdateUI()
      win:Show()
    end
  end
end
