# GitHub Repository Setup Guide

This guide will help you set up a new GitHub repository and push your code for deployment.

## Creating a New GitHub Repository

1. **Sign in to GitHub**
   - Go to [GitHub](https://github.com) and sign in to your account.

2. **Create a New Repository**
   - Click on the '+' icon in the top-right corner and select 'New repository'.
   - Name your repository (e.g., `ACMsigai`).
   - Add a description (optional).
   - Choose whether the repository should be public or private.
   - Do NOT initialize the repository with a README, .gitignore, or license.
   - Click 'Create repository'.

3. **Push Your Code to GitHub**
   - Open a terminal/command prompt.
   - Navigate to your project directory:
     ```sh
     cd path/to/your/project
     ```
   - Initialize a Git repository (if not already done):
     ```sh
     git init
     ```
   - Add all files to the staging area:
     ```sh
     git add .
     ```
   - Commit the changes:
     ```sh
     git commit -m "Initial commit"
     ```
   - Add the remote repository URL:
     ```sh
     git remote add origin https://github.com/yourusername/ACMsigai.git
     ```
     (Replace 'yourusername' with your GitHub username)
   - Push the code to GitHub:
     ```sh
     git push -u origin main
     ```
     (If your default branch is 'master', use that instead of 'main')

## Setting Up GitHub Pages

1. **Enable GitHub Pages**
   - Go to your repository on GitHub.
   - Click on 'Settings'.
   - Scroll down to the 'GitHub Pages' section.
   - Under 'Source', select the 'gh-pages' branch.
   - Click 'Save'.

2. **Verify Deployment**
   - After a few minutes, your site should be available at:
     `https://yourusername.github.io/ACMsigai/`
   - GitHub will also show a link to your deployed site in the GitHub Pages section of the repository settings.

## Troubleshooting

- If your site doesn't appear, check the GitHub Actions tab to see if the deployment workflow completed successfully.
- Make sure your repository name and username are correctly set in the `homepage` field in `package.json` and the `base` field in `vite.config.ts`.
- If you're using a custom domain, you'll need to configure it in the GitHub Pages settings.