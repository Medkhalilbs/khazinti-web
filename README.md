# Khazinti Web — خزينتي

Official website and privacy policy for the Khazinti personal finance app.

## 🚀 Tech Stack

- **Vue 3** (Composition API)
- **Vite** (Build tool)
- **Vue Router** (SPA routing)
- **Vue I18n** (Multilingual: EN / FR / AR)
- **GitHub Pages** (Hosting)

## 📁 Project Structure

```
khazinti-web/
├── public/
│   ├── favicon.svg
│   └── 404.html              # SPA redirect for GitHub Pages
├── src/
│   ├── assets/
│   │   └── styles.css        # Global styles
│   ├── components/
│   │   ├── Navbar.vue
│   │   ├── Footer.vue
│   │   └── LanguageSwitcher.vue
│   ├── i18n/
│   │   ├── index.js
│   │   └── locales/
│   │       ├── en.json
│   │       ├── fr.json
│   │       └── ar.json
│   ├── router/
│   │   └── index.js
│   ├── views/
│   │   ├── Home.vue
│   │   └── Privacy.vue
│   ├── App.vue
│   └── main.js
├── .github/
│   └── workflows/
│       └── deploy.yml        # Auto-deploy on push to main
├── index.html
├── vite.config.js
└── package.json
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

The site auto-deploys to GitHub Pages on every push to `main` via GitHub Actions.

### Manual Setup:
1. Create a new repo: `khazinti-web`
2. Push this code to `main`
3. Go to **Settings → Pages → Source: GitHub Actions**
4. The workflow will build and deploy automatically

### Custom Domain (optional):
1. Add a `CNAME` file in `public/` with your domain
2. Update `base` in `vite.config.js` to `'/'`
3. Configure DNS records

## 🌍 Languages

- 🇬🇧 English
- 🇫🇷 Français
- 🇹🇳 العربية (Tunisian Arabic)

The language auto-detects from browser settings. Users can switch manually via the language toggle.

## 📧 Contact

support.khazinti@gmail.com

## 📄 License

© 2026 Khazinti. All rights reserved.
