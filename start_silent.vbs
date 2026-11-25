Set WshShell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")
strDir = fso.GetParentFolderName(WScript.ScriptFullName)
cmd = "node """ & strDir & "\server.js"""
WshShell.Run cmd, 0, False
