# MBTI Activity Generator

A beautiful, AI-powered activity suggestion app based on MBTI personality types.

## 🚀 Live Demo

Visit the live app: [Your GitHub Pages URL will be here]

## ✨ Features

- 🎨 Dreamy pastel glassmorphism design
- 🤖 AI-powered activity generation via Google Gemini
- ❤️ Save favorite activities
- ⚙️ Customizable settings
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion

## 🛠️ Tech Stack

- React 18
- Vite
- Framer Motion
- Lucide React Icons
- Google Gemini API

## 📦 Local Development

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

## 🌐 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Setup Steps:

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Navigate to Pages (in the sidebar)
   - Under "Build and deployment", select "GitHub Actions" as the source
   - The workflow will automatically deploy on every push to `main`

3. **Access your site**:
   - Your app will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Manual Deployment:

If you prefer manual deployment:

```bash
npm run build
# Then upload the 'dist' folder to your hosting service
```

## 🔑 API Configuration

The app uses Google Gemini API for activity generation. The API key is stored in `src/config.js`.

**For production**: Consider using environment variables or a backend proxy to keep your API key secure.

## 📝 License

MIT License - feel free to use this project however you'd like!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using React and Vite
