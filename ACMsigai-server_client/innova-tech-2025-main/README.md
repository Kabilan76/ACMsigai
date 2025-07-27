# InnoTech 2025 - ACM SIGAI Hackathon Website

## Project info

**Live Demo**: https://kabilan76.github.io/ACMsigai/

**GitHub Repository**: https://github.com/Kabilan76/ACMsigai

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/468aaa9f-a6b2-41d6-a4d3-cc857fd3366f) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.

## Deploying to GitHub Pages

This project is configured to deploy to GitHub Pages automatically. Here's how it works:

### Automatic Deployment (Recommended)

Whenever you push changes to the `main` branch, a GitHub Actions workflow will automatically:
1. Build the project
2. Deploy it to the `gh-pages` branch
3. GitHub Pages will serve the content from this branch

### Manual Deployment

If you need to deploy manually:

```sh
# Install dependencies if you haven't already
npm install

# Deploy to GitHub Pages
npm run deploy
```

### Troubleshooting Deployment

If you encounter issues with deployment:

1. Check that the `homepage` field in `package.json` matches your GitHub Pages URL
2. Ensure the `base` path in `vite.config.ts` matches your repository name
3. Verify that the GitHub Pages source is set to the `gh-pages` branch in your repository settings

You can also run the included PowerShell script to push changes to GitHub:

```sh
./push_to_github.ps1
```
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.

## Deploying to GitHub Pages

This project is configured for GitHub Pages deployment. Follow these steps to deploy:

1. **Fork or Clone the Repository**
   - Fork this repository to your GitHub account or create a new repository and push this code.

2. **Update Configuration**
   - In `package.json`, update the homepage URL to match your GitHub username:
     ```json
     "homepage": "https://yourusername.github.io/ACMsigai/",
     ```
   - In `vite.config.ts`, update the base path if needed:
     ```js
     base: "/ACMsigai/", // Change if your repo has a different name
     ```

3. **Deploy Manually**
   ```sh
   # Install dependencies
   npm install
   
   # Deploy to GitHub Pages
   npm run deploy
   ```

4. **Automatic Deployment**
   - The project includes a GitHub Actions workflow in `.github/workflows/deploy.yml`
   - It will automatically deploy to GitHub Pages when you push to the main branch
   - Make sure to enable GitHub Pages in your repository settings and select the `gh-pages` branch

- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/468aaa9f-a6b2-41d6-a4d3-cc857fd3366f) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
