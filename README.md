# Cartify — Online Mega Shopping Store

Cartify is a polished multi-category shopping discovery web application designed around a premium, modern shopping experience. The interface brings electronics, fashion, shoes, jewelry, beauty, perfumes and everyday lifestyle finds into one responsive storefront.

> **Important:** This project documentation intentionally does not contain passwords, API keys, database credentials, private tokens, payment secrets, SMTP credentials, production URLs or other sensitive information.

---

## 1. Introduction

Cartify is a modern online shopping and product-discovery platform created with a premium visual identity and a responsive user experience.

The application is designed to bring multiple shopping categories together in one place, allowing users to explore products, search and filter items, view product details, manage a wishlist, add products to a shopping cart and interact with a basic account interface.

The project focuses on creating a professional frontend foundation that can later be connected to real affiliate programs, product APIs, databases and secure backend services.

---

## 2. Project Overview

Cartify provides a multi-category shopping experience covering:

- Smart Gadgets & Electronics
- Family Fashion & Clothing
- Shoes & Footwear
- Jewelry & Fashion Accessories
- Beauty & Cosmetics
- Perfumes & Scents

The application uses a premium cream, deep-green and gold visual theme to create a modern shopping-oriented interface.

The project includes responsive layouts so that the interface can adapt to desktop, tablet and mobile screen sizes.

---

## 3. Purpose of the Project

The main purpose of Cartify is to provide a professional foundation for a multi-category online shopping and affiliate product-discovery platform.

The project demonstrates how a modern shopping interface can combine:

- Product discovery
- Category browsing
- Search
- Product filtering
- Product details
- Wishlist functionality
- Shopping cart functionality
- User account interface
- Theme switching
- Affiliate-ready product presentation
- Responsive frontend design

The architecture is intentionally structured so that additional backend and business functionality can be integrated in future development stages.

---

# 4. Main Features

## Homepage

The homepage includes:

- Cartify branding
- Hero section
- Shopping-focused messaging
- Category shortcuts
- Featured/trending products
- Trust and benefit sections
- Responsive product sections
- Premium visual styling

---

## Product Categories

Products are organized into multiple categories:

### Electronics
- Wireless earbuds
- Smartwatches
- Fast chargers
- Headphones
- Power banks
- Smart home gadgets
- Laptop and desk accessories
- Content creator technology

### Fashion
- Women's fashion
- Men's fashion
- Kids' fashion
- Everyday clothing
- Seasonal fashion

### Shoes
- Sneakers
- Casual shoes
- Sandals
- Flats
- Heels
- Boots
- Everyday footwear

### Jewelry & Accessories
- Necklaces
- Earrings
- Rings
- Bracelets
- Watches
- Handbags
- Sunglasses
- Fashion accessories

### Beauty
- Makeup
- Lip products
- Foundation
- Beauty tools
- Skincare
- Self-care products

### Perfumes
- Women's fragrances
- Men's fragrances
- Fresh scents
- Floral scents
- Fruity scents
- Sweet scents
- Woody scents
- Musky fragrances

---

# 5. Product Experience

Product cards provide information such as:

- Product image
- Product name
- Category
- Rating
- Current price
- Previous price
- Wishlist option
- Add-to-cart option
- Product details access

The product experience is designed to keep the interface simple, visual and shopping-focused.

---

# 6. Shopping Cart

The cart functionality allows users to:

- Add products
- Increase product quantity
- Decrease product quantity
- Remove products
- View selected items
- View estimated totals
- Continue toward a retailer/checkout handoff

The current implementation is intended as a frontend shopping experience and can later be connected to real commerce or affiliate systems.

---

# 7. Wishlist

Users can save products to their wishlist.

Wishlist functionality includes:

- Add product to wishlist
- Remove product from wishlist
- View saved products
- Persistent browser-side storage for the demo experience

---

# 8. Account Experience

Cartify includes a basic account interface containing:

- Sign-up interface
- Sign-in interface
- Account page
- Sign-out functionality

The current account functionality is designed as a frontend demonstration and is not intended to replace production-grade authentication.

---

# 9. Theme System

Cartify supports:

- Light mode
- Dark mode
- Browser-side theme persistence

The theme system is designed to maintain the same visual identity while providing users with an alternative viewing experience.

---

# 10. Tools & Technologies

The project uses the following technologies:

### React
Used to build the component-based frontend interface.

### Vite
Used as the development server and frontend build tool.

### React Router DOM
Used for client-side navigation and product/detail routes.

### JavaScript (ES6+)
Used for application logic and interactive functionality.

### CSS3
Used for:

- Responsive layouts
- Components
- Animations
- Theme system
- Product cards
- Navigation
- Visual styling

### Lucide React
Used for modern interface icons.

### LocalStorage
Used for frontend demo persistence such as:

- Cart data
- Wishlist data
- Theme preference
- Local account session

### npm
Used for dependency management and project scripts.

---

# 11. Project Structure

```text
cartify-final/
│
├── public/
│   └── assets/
│       ├── logo.svg
│       ├── hero.svg
│       ├── earbuds.svg
│       ├── smartwatch.svg
│       ├── charger.svg
│       ├── headphones.svg
│       ├── powerbank.svg
│       ├── home.svg
│       ├── laptop.svg
│       ├── camera.svg
│       ├── fashion.svg
│       ├── shoes.svg
│       ├── jewelry.svg
│       ├── perfume.svg
│       ├── lipstick.svg
│       ├── hair-tools.svg
│       └── foundation.svg
│
├── src/
│   ├── main.jsx
│   └── styles.css
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md