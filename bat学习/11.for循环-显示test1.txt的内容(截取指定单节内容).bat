@echo off
rem delims�Ƿָ�,tokens������,ָ��
for /f "delims=, tokens=3" %%i in (test1.txt) do echo %%i
pause