# TechHub - Product Showcase Website

A modern, responsive product showcase website for testing and demonstration purposes.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Product Grid**: Display multiple products with images, descriptions, and pricing
- **Interactive Cart**: Add products to cart with visual feedback
- **Navigation**: Smooth scrolling navigation menu
- **Modern UI**: Clean, professional design with hover effects and animations
- **Product Badges**: Display "New", "Hot", and "Sale" badges
- **Rating System**: Show customer reviews and ratings
- **Price Display**: Display current price and original price with strikethrough

## File Structure

```
├── index.html       # Main HTML page with product cards
├── styles.css       # Responsive CSS styling
├── script.js        # Interactive JavaScript functionality
└── README.md        # This file
```

## Getting Started

1. Clone or download this repository
2. Open `index.html` in a web browser
3. Browse products and test the "Add to Cart" functionality

## Features Overview

### Navigation
- Sticky header with navigation menu
- Cart button showing item count
- Smooth scroll navigation

### Hero Section
- Eye-catching banner with call-to-action button
- Modern gradient background

### Product Grid
- Responsive layout (auto-adjusts to screen size)
- 6 sample products with:
  - Product images (using placeholder service)
  - Product names and descriptions
  - Customer ratings and review counts
  - Original and sale prices
  - "Add to Cart" buttons

### Interactive Features
- Add products to cart (displays notification)
- Smooth hover animations on product cards
- Responsive navigation that adapts to mobile screens

### Footer
- Quick links section
- Contact information
- Social media links

## Customization

### Change Product Information
Edit `index.html` to modify:
- Product names (in `<h3>` tags)
- Product descriptions (in `.description` tags)
- Prices (in `.price` tags)
- Product images (change `src` in `<img>` tags)

### Modify Colors
Update CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;      /* Main blue */
    --secondary-color: #1e40af;    /* Dark blue */
    --accent-color: #f59e0b;       /* Orange */
    --text-color: #1f2937;         /* Dark gray */
}
```

### Add More Products
Copy and paste a product card block in `index.html`:
```html
<div class="product-card">
    <div class="product-image">
        <img src="..." alt="Product Name">
        <span class="badge">New</span>
    </div>
    <div class="product-info">
        <!-- Add product details -->
    </div>
</div>
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- Product images use placeholder service (placeholder.com)
- Replace with real product images for production use
- Cart data is stored in browser memory (refreshing page clears cart)
- Use `showCart()` in browser console to view current cart contents

## License

This is a dummy website for testing and demonstration purposes.

---

**Created for**: Agent External Page Testing
**Last Updated**: 2026-07-02