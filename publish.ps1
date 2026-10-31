# Publishes the current folder as a single snapshot (no git history) to GitHub Pages.
# Usage:  .\publish.ps1
#         .\publish.ps1 -Message "Сборка 0.2"

param(
    [string]$Message = "Обновление сборки Unity Web"
)

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

if (-not (Test-Path ".git")) {
    throw "Это не git-репозиторий."
}

$remote = git remote get-url origin
if (-not $remote) {
    throw "Не задан remote origin."
}

$name = git config user.name
$email = git config user.email
if (-not $name) { $name = git log -1 --format=%an }
if (-not $email) { $email = git log -1 --format=%ae }
if (-not $name -or -not $email) {
    throw "Задайте автора: git config --global user.name `"Имя`" и git config --global user.email `"email@example.com`""
}
$env:GIT_AUTHOR_NAME = $name
$env:GIT_AUTHOR_EMAIL = $email
$env:GIT_COMMITTER_NAME = $name
$env:GIT_COMMITTER_EMAIL = $email

Write-Host "Remote: $remote"
Write-Host "Создаю снимок без истории..."

git checkout --orphan "publish-tmp"
git add -A

$staged = git diff --cached --name-only
if (-not $staged) {
    git checkout main --force
    git branch -D "publish-tmp" 2>$null
    throw "Нет файлов для публикации."
}

git commit -m $Message
if ($LASTEXITCODE -ne 0) {
    git checkout main --force
    git branch -D "publish-tmp" 2>$null
    throw "Коммит не создан."
}

git branch -M main
git push --force origin main

Write-Host ""
Write-Host "Готово. История на GitHub заменена одним коммитом."
Write-Host "Сайт: https://magisterbyte.github.io/"
Write-Host "В Settings → Pages источник должен быть: Deploy from a branch → main → / (root)."
