# PowerShell script to push changes to GitHub

# Navigate to the project directory
cd "$PSScriptRoot"

# Configure Git user information if not already set
$gitUserName = Read-Host -Prompt "Enter your Git username"
$gitUserEmail = Read-Host -Prompt "Enter your Git email"

git config --global user.name "$gitUserName"
git config --global user.email "$gitUserEmail"

# Add all changes
git add .

# Commit changes
$commitMessage = Read-Host -Prompt "Enter commit message (default: 'Fix GitHub Pages deployment with .nojekyll')"
if (-not $commitMessage) {
    $commitMessage = "Fix GitHub Pages deployment with .nojekyll"
}
git commit -m "$commitMessage"

# Rename branch to main if needed
$currentBranch = git branch --show-current
if ($currentBranch -ne "main") {
    Write-Host "Current branch is $currentBranch, renaming to main..."
    git branch -M main
}

# Push to GitHub
Write-Host "Pushing to GitHub..."
git push -u origin main

Write-Host "Done! Check your GitHub repository for the changes."
Write-Host "GitHub Pages should automatically deploy from the gh-pages branch."
Write-Host "It may take a few minutes for the changes to take effect."
Pause