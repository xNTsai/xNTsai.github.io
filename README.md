# Cheng-En (Johnny) Tsai — Personal Website

A clean, framework-free personal website built with vanilla HTML, CSS, and JavaScript.

## Features

- **Responsive design** with dark/light mode toggle
- **Split hero layout** (profile + links on left, about + CV on right)
- **Project gallery** with hover effects and modal details
- **Data-driven projects** via JSON (easy to update without touching HTML)
- Publications and News pages
- Modern, accessible design

## Folder Structure

```
xNTsai.github.io/
├─ index.html              # Home page
├─ projects.html           # Projects gallery
├─ publications.html       # Publications list
├─ news.html              # News & updates
├─ assets/
│  ├─ css/
│  │  └─ styles.css       # All styles
│  ├─ js/
│  │  ├─ main.js          # Theme toggle & utilities
│  │  └─ projects.js      # Project grid & modal logic
│  ├─ data/
│  │  └─ projects.json    # Project data
│  └─ img/
│     └─ profile.jpg      # ⚠️ REPLACE with your photo
└─ cv/
   └─ Cheng-En_Tsai_CV.pdf # ⚠️ REPLACE with your CV
```

## Quick Customization

1. **Profile photo**: Replace `assets/img/profile.jpg` with your own
2. **CV file**: Replace `cv/Cheng-En_Tsai_CV.pdf` with your CV
3. **Projects**: Edit `assets/data/projects.json` to add/remove projects
4. **Content**: Edit the HTML files directly to update text

## Deploy to GitHub Pages

### Option 1: User site (https://xntsai.github.io/)

This repo is already named `xNTsai.github.io`, so it will deploy to the root:

1. Commit and push:
   ```bash
   git add .
   git commit -m "Initial website"
   git push origin main
   ```

2. Enable GitHub Pages:
   - Go to repo **Settings → Pages**
   - **Source**: Deploy from a branch
   - **Branch**: `main` / folder: `/ (root)`
   - Click **Save**

3. Your site will be live at **https://xntsai.github.io/** in ~1 minute

### Option 2: Project site (https://xntsai.github.io/Personal-Website/)

If you want to keep this in a separate repo:

1. Create a new repo `Personal-Website`
2. Copy these files there
3. Follow the same GitHub Pages setup
4. Site will be at **https://xntsai.github.io/Personal-Website/**

## Customization Tips

- **Colors**: Edit CSS variables at the top of `assets/css/styles.css`
- **Theme toggle**: Automatically saves preference to localStorage
- **Add pages**: Duplicate any HTML file and update the nav menu
- **Dynamic publications**: You can create `publications.json` similar to `projects.json` for easier updates

## TODO Before Going Live

- [ ] Replace `assets/img/profile.jpg` with your photo
- [ ] Replace `cv/Cheng-En_Tsai_CV.pdf` with your CV
- [ ] Update links in `index.html` (Google Scholar, LinkedIn, etc.)
- [ ] Update project data in `assets/data/projects.json`
- [ ] Update publications in `publications.html`
- [ ] Update news items in `news.html`

## License

Feel free to use this template for your own site!

---

Built with vanilla HTML/CSS/JS · No framework required · Easy to customize

