@echo off
for /f "delims=, tokens=1,*" %%i in (test1.txt) do echo %%i %%j
pause