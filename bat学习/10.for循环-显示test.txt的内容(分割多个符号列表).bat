@echo off
for /f "delims=,.v" %%i in (test.txt) do echo %%i
pause