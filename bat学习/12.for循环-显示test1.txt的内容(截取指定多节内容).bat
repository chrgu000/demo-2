@echo off
rem delims�Ƿָ�,tokens������,ָ��
for /f "delims=, tokens=3,5" %%i in (test1.txt) do echo %%i %%j
pause