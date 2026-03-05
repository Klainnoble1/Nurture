@echo off
setlocal
cd /d "%~dp0"

if not exist .git (
  echo Initializing git...
  git init
  if errorlevel 1 goto :err
)

git remote remove origin 2>nul
git remote add origin https://github.com/Klainnoble1/Nurture.git
if errorlevel 1 goto :err

echo.
echo Staging all files...
git add -A
if errorlevel 1 goto :err

echo.
echo Committing...
git commit -m "Nurture Nest: hero redesign, Ofsted removed, flags moved" 2>nul || git commit -m "Update: Nurture Nest Next.js"
if errorlevel 1 (
  echo No changes to commit, or commit failed. Trying push...
)

echo.
echo Pushing to GitHub...
git branch -M main 2>nul
git push -u origin main
if errorlevel 1 goto :err

echo.
echo Done. Code is at https://github.com/Klainnoble1/Nurture
goto :end

:err
echo.
echo Something went wrong. Check that:
echo - Git is installed and in PATH
echo - You are logged in to GitHub (e.g. git credential, or GitHub CLI gh auth login)
echo - The repo https://github.com/Klainnoble1/Nurture exists and you have push access
pause
exit /b 1

:end
pause
exit /b 0
