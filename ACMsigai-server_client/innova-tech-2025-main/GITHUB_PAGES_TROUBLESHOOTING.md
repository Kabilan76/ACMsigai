# GitHub Pages Deployment Troubleshooting

## Common Issues and Solutions

### 1. Build Failure

If you see "pages build and deployment / build failed" in your GitHub repository:

#### Possible Causes and Solutions:

**a) Missing or incorrect base path**

Ensure your `vite.config.ts` has the correct base path:

```ts
export default defineConfig(({ mode }) => ({
  base: "/ACMsigai/", // Must match your repository name
  // rest of config...
}))
```

**b) Routing issues with React Router**

Make sure your BrowserRouter has the correct basename:

```tsx
<BrowserRouter basename="/ACMsigai">
  {/* routes */}
</BrowserRouter>
```

**c) Dependency installation issues**

The GitHub Actions workflow has been updated to use `npm install` instead of `npm ci` which can be more reliable in some cases.

### 2. 404 Errors After Deployment

If your site deploys but shows 404 errors:

- Check that assets are being loaded with the correct paths
- Verify that the `homepage` field in `package.json` is set correctly
- Make sure all imports use relative paths or alias paths (like `@/components`)

### 3. Blank Page After Deployment

If you see a blank page:

- Open browser developer tools (F12) to check for errors
- Verify that the `index.html` file is being served correctly
- Check that all JavaScript files are loading properly

## Debugging Steps

1. The GitHub workflow now includes a debug step that lists the contents of the `dist` directory
2. Check the GitHub Actions logs for any error messages
3. Try building locally with `npm run build` and then serving the dist folder with `npx serve -s dist` to see if there are any issues

## Getting Help

If you continue to have issues:

1. Check the GitHub Actions logs for detailed error messages
2. Search for specific error messages online
3. Consider posting an issue on the GitHub repository