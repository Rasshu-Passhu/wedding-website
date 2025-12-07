# Wedding Website

A beautiful, modern, and responsive wedding website built with HTML, CSS, and JavaScript. This website features a elegant design with smooth animations, mobile responsiveness, and all the essential sections for a wedding celebration.

## 🌟 Features

### Core Sections
- **Hero Section** - Beautiful introduction with couple names, wedding date, and live countdown timer
- **Our Story** - About the couple section with their love story
- **Wedding Details** - Ceremony and reception information with venues and timing
- **Photo Gallery** - Placeholder for couple photos with hover effects
- **RSVP Form** - Interactive form for guest responses with validation
- **Gift Registry** - Links to wedding registries and honeymoon fund
- **Contact Information** - Wedding party details and social media links

### Design Features
- **Responsive Design** - Optimized for all devices (desktop, tablet, mobile)
- **Modern Animations** - Smooth scroll animations and interactive elements
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Live Countdown** - Real-time countdown to the wedding day
- **Form Validation** - Client-side validation for RSVP form
- **Accessibility** - Proper ARIA labels and keyboard navigation support

## 🚀 Quick Start

### Prerequisites
- Visual Studio Code
- Live Server extension (already installed)

### Running the Website

1. **Using Live Server Extension:**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Or use `Ctrl+Shift+P` and type "Live Server: Open with Live Server"

2. **Manual Setup:**
   - Open `index.html` in any web browser
   - For development, use a local server to avoid CORS issues

3. **Preview URL:**
   - Local development: `http://127.0.0.1:5500/index.html`
   - The website will automatically reload when you make changes

## 📁 Project Structure

```
wedding-website/
├── .github/
│   └── copilot-instructions.md    # Project guidelines
├── styles/
│   ├── main.css                   # Main stylesheet
│   └── responsive.css             # Mobile responsive styles
├── scripts/
│   └── main.js                    # JavaScript functionality
├── .vscode/
│   └── tasks.json                 # VS Code tasks configuration
├── index.html                     # Main website file
└── README.md                      # This file
```

## 🎨 Customization Guide

### Personal Information
1. **Couple Names:** Update in `index.html` line 47
2. **Wedding Date:** Update in `index.html` line 48 and `scripts/main.js` line 35
3. **Wedding Venue:** Update in `index.html` lines 49, 89-97

### Colors and Styling
- **Primary Color:** `#d4a574` (Gold)
- **Secondary Color:** `#2c3e50` (Dark Blue)
- **Accent Color:** `#7f8c8d` (Gray)

To change colors, update the CSS variables in `styles/main.css`.

### Content Updates
1. **Love Story:** Edit the story cards in the "About" section
2. **Wedding Details:** Update ceremony and reception information
3. **Contact Info:** Update footer contact details
4. **Social Media:** Add your social media links in the footer

### Adding Photos
Replace the placeholder images in the gallery section:
1. Create an `images` folder
2. Add your photos
3. Update the `src` attributes in the gallery section
4. Consider optimizing images for web (WebP format recommended)

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints for:
- **Desktop:** 1024px and above
- **Tablet:** 768px - 1023px
- **Mobile:** 320px - 767px

## 🔧 Advanced Features

### RSVP Form Integration
The current RSVP form includes client-side validation. To make it functional:

1. **Backend Integration Options:**
   - Netlify Forms (recommended for static hosting)
   - Formspree
   - Custom backend API
   - Google Forms integration

2. **Email Service Integration:**
   - EmailJS for client-side email sending
   - SendGrid API
   - Mailchimp integration

### SEO Optimization
- Add meta descriptions and Open Graph tags
- Implement structured data for events
- Optimize images with alt text
- Add sitemap.xml

### Performance Optimization
- Compress images
- Minify CSS and JavaScript
- Implement lazy loading for images
- Add service worker for offline functionality

## 🚀 Deployment Options

### Static Hosting (Recommended)
- **Netlify:** Drag and drop deployment with forms support
- **Vercel:** Git-based deployment with automatic builds
- **GitHub Pages:** Free hosting with GitHub integration
- **Firebase Hosting:** Google's hosting platform

### Traditional Hosting
- Upload files to any web hosting service
- Ensure HTTPS is enabled
- Configure custom domain if needed

## 🛠 Development

### Making Changes
1. Edit HTML, CSS, or JavaScript files
2. Live Server will automatically reload the page
3. Test on multiple devices using browser dev tools

### Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### Performance Tips
- Images are currently placeholders - replace with optimized photos
- Consider using a CDN for external resources
- Implement caching strategies for production

## 📞 Support

For customization help or questions:
- Check the inline comments in the code
- Refer to the `.github/copilot-instructions.md` file
- Use VS Code's Live Server for local development

## 📄 License

This project is open source. Feel free to customize it for your own wedding or share it with others planning their special day.

## 🎉 Final Notes

**Important Customizations Needed:**
1. Replace placeholder couple names with actual names
2. Update wedding date and venue information
3. Add real photos to replace placeholder images
4. Update contact information and social media links
5. Configure RSVP form backend for form submissions
6. Add actual registry links
7. Customize colors and styling to match wedding theme

**To Start Live Server:**
Right-click on `index.html` in the VS Code explorer and select "Open with Live Server" to begin development.

---

Made with ❤️ for celebrating love stories around the world.