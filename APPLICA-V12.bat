@echo off
setlocal
cd /d "%~dp0"

if not exist "package.json" (
  echo ERRORE: estrai prima il contenuto dello ZIP nella cartella principale del sito.
  pause
  exit /b 1
)

if exist "src\pages\contacts.astro" del /q "src\pages\contacts.astro"

echo Pagina Contatti rimossa correttamente.
echo Ora puoi controllare il sito con npm run dev.
pause
