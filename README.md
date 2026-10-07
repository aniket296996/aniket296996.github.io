# Aniket Jain — Interactive Data & AI Portfolio

A self-contained responsive portfolio website for Data Science, Artificial Intelligence and Data Engineering roles.

## What changed in this version

- Rich dark/light visual theme with gradients and glass-style panels
- Single-file `index.html` (CSS + JavaScript embedded) so the styling cannot be lost when the page is opened directly
- Animated role text and scroll progress
- Responsive bento-style About section
- Project cards with category filters and expandable project stories
- Interactive project/profile tilt effects on desktop
- Animated skills and pipeline visualisations
- Experience timeline and measurable-impact cards
- Copy-email interaction with fallback
- Reduced-motion and mobile accessibility support

## Preview locally

You can open `index.html` directly in a browser.

For the most reliable local preview, from this folder run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy

### GitHub Pages
1. Create a GitHub repository.
2. Upload all files in this folder, preserving the `assets` directory.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**, choose `main` and `/root`.
5. Save.

### Netlify
Drag the whole `aniket-portfolio` folder into Netlify Drop.

### Vercel
Import the repository as a static site. No build command is required.

## Personalise next

Add your real LinkedIn/GitHub URLs to the contact/footer area if desired. The résumé is stored at `assets/Aniket_Jain_Resume.pdf` and the profile image at `assets/aniket-headshot.jfif`.
