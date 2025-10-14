# 🚀 Deployment Guide

## Before You Deploy - Checklist

- [ ] Replace `assets/img/profile.jpg` with your actual profile photo
- [ ] Replace `cv/Cheng-En_Tsai_CV.pdf` with your actual CV
- [ ] Update your links in `index.html` (email, Google Scholar, LinkedIn)
- [ ] Review and customize content in all HTML pages
- [ ] Test locally by opening `index.html` in a browser

## Deploy to GitHub Pages (xntsai.github.io)

Since your repo is already named `xNTsai.github.io`, it will automatically deploy to the root domain.

### Step 1: Commit and Push

```bash
# Make sure you're in the repo directory
cd /Users/cheng_en/Code/xNTsai.github.io

# Check git status
git status

# Add all files
git add .

# Commit
git commit -m "Initial personal website"

# Push to GitHub
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your GitHub repo: https://github.com/xNTsai/xNTsai.github.io
2. Click **Settings** (top right)
3. Scroll down to **Pages** in the left sidebar
4. Under **Build and deployment**:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**

### Step 3: Wait & Visit

- GitHub will build your site (takes 1-2 minutes)
- Your site will be live at: **https://xntsai.github.io/**
- You'll see a green checkmark in the Pages section when it's ready

## Updating Your Site

Whenever you make changes:

```bash
git add .
git commit -m "Update content"
git push origin main
```

GitHub will automatically rebuild and deploy your site in ~1 minute.

## Testing Locally

To test before deploying:

1. Open `index.html` directly in your browser
2. Or use a simple local server:
   ```bash
   # Python 3
   python3 -m http.server 8000
   
   # Then visit: http://localhost:8000
   ```

## Custom Domain (Optional)

If you want to use a custom domain like `yourname.com`:

1. Buy a domain from a registrar (Namecheap, Google Domains, etc.)
2. Create a file named `CNAME` in the repo root with your domain:
   ```
   yourname.com
   ```
3. In your domain registrar, add DNS records:
   - Type: `A` → Points to GitHub IPs (see GitHub docs)
   - Type: `CNAME` → `www` → `xntsai.github.io`
4. In GitHub repo Settings → Pages → Custom domain, enter your domain

## Troubleshooting

**Site not loading?**
- Check that your repo is public (Settings → General)
- Make sure Pages is enabled and set to `main` branch
- Wait 2-3 minutes for initial deploy
- Check Actions tab for build errors

**Images not showing?**
- Make sure file paths are correct (case-sensitive!)
- Replace placeholder files with actual images

**Projects page empty?**
- Check browser console for errors
- Verify `assets/data/projects.json` is valid JSON

## Next Steps

- Share your site: https://xntsai.github.io/
- Update projects regularly
- Add blog posts (optional)
- Connect Google Analytics (optional)
- Set up a custom domain (optional)

---

Need help? Check the [GitHub Pages docs](https://docs.github.com/en/pages) or open an issue!

