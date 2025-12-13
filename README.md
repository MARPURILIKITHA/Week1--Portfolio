# Personal Portfolio Website

A responsive personal portfolio website showcasing skills, projects, and contact information. Built with HTML5, CSS3, and responsive design principles.

## Project Description

This is a professional personal portfolio website that demonstrates modern web development practices. The website is fully responsive, accessible, and follows semantic HTML5 structure. It includes sections for hero introduction, about me, skills, projects showcase, and a contact form with validation.

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Semantic HTML5 structure
- ✅ CSS Grid and Flexbox layouts
- ✅ Accessible navigation with ARIA labels
- ✅ Contact form with client-side validation
- ✅ Hover effects and smooth animations
- ✅ Mobile hamburger menu
- ✅ Smooth scrolling navigation
- ✅ Cross-browser compatible
- ✅ SEO-friendly markup

## Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with CSS Variables, Grid, and Flexbox
- **JavaScript** - Basic interactivity for navigation and form validation
- **Git** - Version control

## Project Structure

```
week1-portfolio/
├── index.html
├── css/
│   ├── variables.css      # CSS custom properties
│   ├── style.css          # Main stylesheet
│   └── responsive.css     # Media queries and responsive styles
├── js/
│   └── navigation.js      # Mobile menu and navigation functionality
├── images/
│   ├── profile.jpg        # Profile picture
│   ├── project1.jpg       # Project images
│   └── icons/             # Icon assets
├── README.md
└── .gitignore
```

## Setup Instructions

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd week1-portfolio
   ```

2. **Open the project**
   - Open the project folder in your code editor
   - For VS Code, you can use the command: `code .`

3. **Add images**
   - Place your profile picture in `images/profile.jpg`
   - Add project images to the `images/` directory
   - Update image paths in `index.html` if using different filenames

4. **Open in browser**
   - Right-click on `index.html` and select "Open with" your preferred browser
   - Or use a live server extension in VS Code

### Using VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Code Structure

### HTML Structure

The HTML follows semantic structure:
- `<header>` - Site header with navigation
- `<nav>` - Main navigation menu
- `<main>` - Main content area
  - Hero section
  - About section
  - Skills section
  - Projects section
  - Contact section
- `<footer>` - Site footer with social links

### CSS Organization

- **variables.css**: CSS custom properties for colors, typography, spacing, and transitions
- **style.css**: Main stylesheet with component styles
- **responsive.css**: Media queries for responsive design (mobile-first approach)

### JavaScript

- **navigation.js**: Handles mobile menu toggle, smooth scrolling, and active link highlighting

## Customization

### Colors

Edit CSS variables in `css/variables.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #64748b;
    /* ... other variables */
}
```

### Content

1. Update personal information in `index.html`
2. Replace placeholder text with your own content
3. Add your projects in the projects section
4. Update contact information

### Images

- Replace `images/profile.jpg` with your profile picture
- Add project screenshots to `images/` directory
- Update image `src` attributes in HTML

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Alt text for images
- Proper heading hierarchy
- Screen reader friendly

## Performance Optimization

- CSS organized for efficient loading
- Optimized images (recommended to compress images)
- Minimal JavaScript for fast page load
- Efficient CSS Grid and Flexbox layouts

## Testing

### Manual Testing Checklist

- [ ] Test navigation on mobile, tablet, and desktop
- [ ] Verify all links work correctly
- [ ] Test contact form validation
- [ ] Check responsive design at different screen sizes
- [ ] Test keyboard navigation
- [ ] Verify accessibility with screen reader
- [ ] Test in different browsers

### Validation

- HTML: Use [W3C HTML Validator](https://validator.w3.org/)
- CSS: Use [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- Accessibility: Use [WAVE](https://wave.webaim.org/) or Lighthouse

## Future Enhancements

- Add more interactive animations
- Implement dark mode toggle
- Add blog section
- Integrate with backend for contact form
- Add project filtering functionality
- Implement lazy loading for images




