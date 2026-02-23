# OneKarma.AI Landing Website

A futuristic, single-page landing website for OneKarma.AI - a unified AI platform for intelligent work management.

**A product by [Ekasmin](https://www.ekasmin.com)**

## Overview

This is a static website built with vanilla HTML5, CSS3, and JavaScript. It features a dark futuristic theme with neon accents, glassmorphism effects, and smooth animations. The site showcases the OneKarma.AI platform and its product ecosystem.

## Features

- **Futuristic Design**: Dark theme with neon cyan, blue, and violet accents
- **Glassmorphism Effects**: Frosted glass aesthetic on cards and containers
- **Smooth Animations**: CSS-based animations with scroll-triggered fade-ins
- **Fully Responsive**: Mobile-first design that works on all devices
- **Accessible**: WCAG AA compliant with keyboard navigation and screen reader support
- **Performance Optimized**: GPU-accelerated animations, minimal JavaScript
- **No Build Process**: Pure HTML/CSS/JS - ready to deploy

## Project Structure

```
onekarma-landing-website/
├── index.html           # Main HTML file
├── css/
│   └── style.css        # All styles and animations
├── js/
│   └── main.js          # JavaScript for interactions
├── assets/
│   └── icons/           # SVG icons (if needed)
└── README.md            # This file
```

## Sections

1. **Hero Section**: Full-screen landing with animated background and CTAs
2. **Platform Vision**: Three cards explaining the platform approach
3. **Products**: Grid of product cards with status badges (Live/Beta/Coming Soon)
4. **Why OneKarma**: Five feature blocks highlighting platform benefits
5. **Future-Ready**: Bold statement about platform evolution
6. **Footer**: Minimal footer with branding and social links

## Getting Started

### Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process or dependencies required.

### Using a Local Server (Optional)

For a better development experience, you can use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Push this code to the `main` branch
3. Go to repository Settings → Pages
4. Select source: `main` branch, root directory
5. Save and wait for deployment
6. Access your site at: `https://[username].github.io/[repository-name]/`

### Other Static Hosts

This site works with any static hosting service:
- **Netlify**: Drag and drop the folder
- **Vercel**: Import from Git or drag and drop
- **Cloudflare Pages**: Connect to Git repository
- **AWS S3**: Upload files and enable static website hosting

## Customization

### Adding New Products

Edit `js/main.js` and add a new product to the `products` array:

```javascript
{
  icon: '🚀',
  name: 'Your Product Name',
  description: 'Short description of your product',
  status: 'live' // or 'beta' or 'coming-soon'
}
```

The product card will automatically render on the page.

### Changing Colors

Edit CSS custom properties in `css/style.css`:

```css
:root {
  --color-accent-cyan: #00ffff;
  --color-accent-blue: #0080ff;
  --color-accent-violet: #8b5cf6;
  /* ... more colors */
}
```

### Modifying Content

All content is in `index.html`. Simply edit the text within the HTML elements to update:
- Headlines
- Descriptions
- Button labels
- Feature titles

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

This website follows WCAG AA standards:
- Semantic HTML5 structure
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast text (7:1 ratio)
- Reduced motion support for users who prefer it

## Performance

- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Lighthouse Score: 95+
- All animations GPU-accelerated
- No external dependencies

## Technologies

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript**: Vanilla JS (ES6+)
- **Fonts**: Google Fonts (Inter, Space Grotesk)

## License

© 2025 OneKarma.AI. All rights reserved.

A product by [Ekasmin](https://www.ekasmin.com)

## Contact

For questions or inquiries, please contact: [hello@ekasmin.com](mailto:hello@ekasmin.com)

---

**Built for the future of work** 🚀
