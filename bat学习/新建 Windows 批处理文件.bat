@echo off
	if 1 == 2 (
		set /a �﷨, var������ 1 + 1 ��ѧʽ��
	)
set num = 0
for /f %%i in ('dir /a-d /b *.exe') do (
    set /a num += 1
    echo num ��ǰ��ֵ�� %num%
)
echo ��ǰĿ¼�¹��� %num% ��exe�ļ�
dir /a-d /b *.txt|findstr "test">nul&&(
    echo ���ں��� test �ַ������ı�����
)||echo �����ں��� test �ַ������ı��ļ�
if exist test.ini (
    echo ���� test.ini �ļ�
) else echo ������ test.ini �ļ�
pause