@echo off
:: skip����
for /f "skip=2" %%i in (test.txt) do echo %%i
pause