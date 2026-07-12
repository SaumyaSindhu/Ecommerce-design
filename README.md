# Eco-Mart — Premium E-Commerce Storefront

Eco-Mart is a pixel-perfect, modern, and highly responsive e-commerce storefront built using **React**, **Vite**, and **pure CSS** (without external frameworks like Tailwind, ensuring maximum style control and optimized bundle sizes).

The project replicates high-fidelity designs with fluid hover transitions, interactive elements, a modular layout structure, and is designed to provide a premium user experience.

---

## 🚀 Key Features

*   **Responsive Header System**: Features a top announcement bar with a language picker and a sticky navigation header equipped with a search bar and interactive count badges.
*   **Hero Section**: Integrates an elegant categories sidebar aligned with a full-bleed promotional banner.
*   **Flash Sales Rail**: Features a dynamic, live countdown timer and a smooth, swipeable horizontal product scroll container with custom navigation arrows.
*   **Browse by Category**: An interactive horizontal selector showcasing specific product categories.
*   **Best Sellers & Explore Products**: Includes dynamic product lists complete with rating calculations, discount tags, and active category filtering tabs.
*   **Featured New Arrivals**: A masonry-style CSS grid layout featuring full-bleed hover scaling and overlay effects.
*   **Download App & Footer Section**: Includes a grid-based footer featuring a mock QR code and store badges cropped to fit their container borders perfectly.

---

## 🛠️ Tech Stack

*   **Core**: React 18+ & JavaScript (ES6+)
*   **Build Tool**: Vite (Fast HMR & Dev Server)
*   **Styling**: Pure CSS3 (CSS Variables, Flexbox, CSS Grid)
*   **Icons**: `react-icons`

---

## 📁 Directory Structure

```text
src/
├── assets/                    # Image and media assets
├── components/
│   ├── AnnouncementBar/       # Announcement banner styles & markup
│   ├── Navbar/                # Sticky header & responsive menu
│   ├── HeroBanner/            # Sidebar categories & main hero image
│   ├── FlashSales/            # Countdown timer & sliding product rail
│   ├── BrowseByCategory/      # Horizontal category list
│   ├── BestSelling/           # Best selling products section
│   ├── ExploreProducts/       # Explore products section with category filters
│   ├── NewArrival/            #Masonry-style grids with scale transitions
│   ├── ProductCard/           # Reusable product card component
│   └── Footer/                # Multi-column footer and app badges
├── App.css                    # Structural page layout
├── App.jsx                    # Core page orchestrator
├── index.css                  # Global design tokens (fonts, colors, resets)
└── main.jsx                   # React root entry point




Production Build
To build the static assets for production deployment:

bash
npm run build
The build assets will be generated in the dist/ directory, optimized and ready for hosting.
