# Deployment Guide

This Single Page Application (SPA) uses client-side routing with React and Wouter. To avoid 404 errors when users navigate directly to routes or refresh the page, the hosting platform must be configured to serve `index.html` for all routes.

## 🚀 Supported Platforms

### Netlify

**Configuration files included:**
- `netlify.toml` - Primary configuration
- `public/_redirects` - Fallback configuration (automatically copied to `dist/`)

**Deploy steps:**
1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect the configuration
3. Build command: `pnpm run build`
4. Publish directory: `dist`

The configuration redirects all routes to `index.html` with a 200 status code, allowing client-side routing to work properly.

### Vercel

**Configuration file included:**
- `vercel.json`

**Deploy steps:**
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the configuration
3. Build command: `pnpm run build`
4. Output directory: `dist`

The configuration rewrites all routes to `index.html`, enabling proper client-side routing.

### Other Static Hosting Services

For other platforms (GitHub Pages, AWS S3, etc.), you'll need to configure server-side redirects or rewrites to serve `index.html` for all routes. Refer to your hosting provider's documentation for SPA configuration.

## 📝 Routes

The application includes the following routes:
- `/` - Home page
- `/home-services` - Home Services landing page
- `/medical` - Medical/Dental landing page
- `/real-estate` - Real Estate landing page
- `/*` - 404 page (handled by React)

## 🧪 Testing Locally

### Development Server
```bash
pnpm run dev
```
Runs on http://localhost:3001

### Production Preview
```bash
pnpm run build
pnpm run preview
```

The preview server automatically handles SPA routing, so all routes will work correctly.

## 🔧 Build Output

After running `pnpm run build`, the `dist/` directory will contain:
- `index.html` - Main entry point
- `assets/` - JavaScript and CSS bundles
- `_redirects` - Netlify redirect rules (from `public/_redirects`)
- Static assets from `public/` (favicon, logos, etc.)

## ⚠️ Common Issues

### 404 Errors on Refresh
If you're getting 404 errors when refreshing or accessing routes directly:
1. Verify that your hosting platform is configured to redirect all routes to `index.html`
2. Check that the appropriate configuration file (`netlify.toml`, `vercel.json`, or `_redirects`) is present
3. Ensure the build output (`dist/`) includes the `_redirects` file

### Build Fails
If the build fails:
1. Ensure all dependencies are installed: `pnpm install`
2. Check for TypeScript errors: `pnpm run check`
3. Verify Node.js version is compatible (v18 or higher recommended)
