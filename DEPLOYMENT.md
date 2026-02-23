# Deployment Checklist

## Pre-Deployment

- [x] All HTML is valid and semantic
- [x] CSS is organized and commented
- [x] JavaScript is functional and error-free
- [x] All images and assets are optimized
- [x] Responsive design tested on mobile, tablet, desktop
- [x] Cross-browser testing completed
- [x] Accessibility audit passed
- [x] Performance optimization completed

## GitHub Pages Deployment

### Step 1: Create Repository

1. Go to [GitHub](https://github.com)
2. Click "New repository"
3. Name it: `onekarma-landing-website` (or your preferred name)
4. Make it public
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Push Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: OneKarma.AI landing website"

# Add remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/onekarma-landing-website.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"
6. Wait 1-2 minutes for deployment
7. Your site will be live at: `https://USERNAME.github.io/onekarma-landing-website/`

### Step 4: Custom Domain (Optional)

If you have a custom domain:

1. In GitHub Pages settings, enter your custom domain
2. Add DNS records at your domain provider:
   - Type: `A` Record
   - Host: `@`
   - Value: GitHub Pages IPs (see GitHub docs)
   - Or use `CNAME` record pointing to `USERNAME.github.io`
3. Wait for DNS propagation (up to 24 hours)
4. Enable "Enforce HTTPS" in GitHub Pages settings

## Alternative Deployment Options

### Netlify

1. Go to [Netlify](https://netlify.com)
2. Sign up or log in
3. Click "Add new site" → "Deploy manually"
4. Drag and drop your project folder
5. Site will be live at: `https://random-name.netlify.app`
6. Optional: Configure custom domain in site settings

### Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign up or log in
3. Click "Add New" → "Project"
4. Import from Git or drag and drop
5. Click "Deploy"
6. Site will be live at: `https://project-name.vercel.app`

### Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
2. Sign up or log in
3. Click "Create a project"
4. Connect to Git repository or upload files
5. Configure build settings (none needed for static site)
6. Click "Save and Deploy"

## Post-Deployment

### Verify Deployment

- [ ] Visit the live URL
- [ ] Test all sections load correctly
- [ ] Test CTA buttons scroll to correct sections
- [ ] Test on mobile device
- [ ] Test all links work
- [ ] Verify animations play smoothly
- [ ] Check console for errors

### Performance Check

- [ ] Run [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [ ] Target scores: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 90+
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Verify First Contentful Paint < 2s

### SEO Setup (Optional)

- [ ] Add Google Analytics tracking code
- [ ] Submit sitemap to Google Search Console
- [ ] Add meta tags for social sharing (Open Graph, Twitter Cards)
- [ ] Verify robots.txt allows indexing

## Updating Content

### To Update Products

1. Edit `js/main.js`
2. Add/modify products in the `products` array
3. Commit and push changes
4. GitHub Pages will auto-deploy (1-2 minutes)

### To Update Text Content

1. Edit `index.html`
2. Modify text within HTML elements
3. Commit and push changes
4. Auto-deploy will update the site

### To Update Styles

1. Edit `css/style.css`
2. Modify colors, spacing, or layouts
3. Commit and push changes
4. Auto-deploy will update the site

## Troubleshooting

### Site Not Loading

- Check GitHub Pages settings are correct
- Verify branch is `main` and folder is `/ (root)`
- Wait 5 minutes and clear browser cache
- Check repository is public

### Styles Not Applying

- Verify CSS file path is correct: `css/style.css`
- Check for CSS syntax errors
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### JavaScript Not Working

- Open browser console (F12) and check for errors
- Verify JS file path is correct: `js/main.js`
- Ensure `defer` attribute is on script tag

### Images Not Loading

- Verify image paths are relative (not absolute)
- Check file names match exactly (case-sensitive)
- Ensure images are in the repository

## Maintenance

### Regular Updates

- Update copyright year in footer (automatic via JavaScript)
- Add new products as they launch
- Update status badges (Live/Beta/Coming Soon)
- Refresh content and messaging as needed

### Monitoring

- Check Google Analytics monthly
- Monitor Lighthouse scores quarterly
- Test on new browser versions
- Update dependencies if any are added

## Support

For deployment issues:
- GitHub Pages: [GitHub Pages Documentation](https://docs.github.com/en/pages)
- Netlify: [Netlify Documentation](https://docs.netlify.com/)
- Vercel: [Vercel Documentation](https://vercel.com/docs)

---

**Ready to deploy!** 🚀
