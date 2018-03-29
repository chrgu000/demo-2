@echo off
FOR /F "usebackq delims==" %%a IN (`set`) DO @echo %%a
echo 按任意键退出...
pause> nul