Set WshShell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")
strDir = fso.GetParentFolderName(WScript.ScriptFullName)
batPath = Chr(34) & strDir & "\start_auto_updater.bat" & Chr(34)
WshShell.Run "cmd.exe /c " & batPath, 0, False
