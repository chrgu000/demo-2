@echo off
rem delims�Ƿָ�,tokens������,ָ��
for /f "delims=, tokens=1-5" %%i in (test1.txt) do echo %%i %%j %%k %%l %%m
pause