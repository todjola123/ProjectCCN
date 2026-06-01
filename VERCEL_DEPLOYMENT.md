# Vercel Deployment Guide for EcoPulse

This guide walks you through deploying the EcoPulse React/Vite application to Vercel.

## Prerequisites

- A Vercel account (sign up at https://vercel.com)
- GitHub account with the ProjectCCN repository
- Git installed locally

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Connect GitHub Repository**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your GitHub account and the `ProjectCCN` repository
   - Click "Import"

2. **Configure Project**
   - **Project Name:** EcoPulse (or your preferred name)
   - **Framework Preset:** Vite
   - **Root Directory:** ./ (default)
   - **Build Command:** `pnpm run build`
   - **Output Directory:** `dist/public`
   - **Install Command:** `pnpm install`

3. **Environment Variables** (Optional)
   - Add any required environment variables in the "Environment Variables" section
   - For this project, no environment variables are strictly required

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `https://<project-name>.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from Project Root**
   ```bash
   cd /path/to/ProjectCCN
   vercel
   ```

4. **Follow the prompts:**
   - Confirm project name
   - Confirm framework (Vite)
   - Confirm build settings
   - Wait for deployment to complete

## Post-Deployment

### Verify the Deployment

- Visit your Vercel deployment URL
- Test all sections: Hero, Threats, Solutions, Take Action
- Verify the pledge form works correctly
- Test mobile responsiveness

### Custom Domain (Optional)

1. In Vercel Dashboard, go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Environment Variables (If Needed)

1. In Vercel Dashboard, go to "Settings" → "Environment Variables"
2. Add any required variables
3. Redeploy to apply changes

## Troubleshooting

### Build Fails

**Issue:** Build fails during deployment
**Solution:** 
- Check that `pnpm` is being used (not npm)
- Ensure all dependencies are in `package.json`
- Run `pnpm install && pnpm run build` locally to verify

### Static Files Not Loading

**Issue:** Images or CSS not loading on deployed site
**Solution:**
- Verify all image URLs are absolute (not relative paths)
- Check that images are hosted on CDN (cloudfront.net URLs)
- Ensure `dist/public` is the correct output directory

### Routes Not Working

**Issue:** Client-side routes return 404
**Solution:**
- This is already configured in `vercel.json` with rewrites
- All routes should redirect to `index.html` for client-side routing

### Port Issues

**Issue:** Server won't start on Vercel
**Solution:**
- Vercel automatically assigns the PORT environment variable
- The server is configured to use `process.env.PORT || 3000`
- No manual port configuration needed

## Configuration Files

### vercel.json
Defines build settings, output directory, and routing rules for Vercel.

### .vercelignore
Lists files and directories to exclude from deployment (similar to .gitignore).

### server/index.ts
Express server configured for production with proper static file serving and client-side routing support.

## Performance Optimization

- Images are already optimized (WebP format with CDN hosting)
- CSS and JavaScript are minified during build
- Static assets are cached with 1-day expiration
- Consider enabling Vercel's Edge Caching for faster global delivery

## Support

For additional help:
- Vercel Documentation: https://vercel.com/docs
- Vite Documentation: https://vitejs.dev
- React Documentation: https://react.dev
