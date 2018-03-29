@echo off
rem delims是分割,tokens是令牌,指令
for /f "delims=, tokens=3" %%i in (test1.txt) do echo %%i
pause