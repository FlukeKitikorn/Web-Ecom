# UniQon - Fashion E-Commerce Website

UniQon is a modern fashion e-commerce website where customers can discover their unique style. The platform emphasizes individuality and offers a curated selection of clothing, sneakers, and accessories from top brands.

> **Course Project**: Developed for CPE-117 Basic Web Design Laboratory

## 🌟 Features

- **Responsive Design** - Fully responsive layout that works on desktop, tablet, and mobile devices
- **Product Showcase** - Browse hot sales, special deals, and featured products
- **Smart Search** - Advanced search functionality with category filtering
- **Brand Collection** - Shop from top brands including Adidas, Nike, Champion, Lacoste, and more
- **Interactive UI** - Smooth animations and user-friendly interface
- **Newsletter Subscription** - Stay updated with the latest deals and fashion trends
- **Contact Form** - Easy communication with customer support
- **Location Map** - Find our physical store location

## 📁 Project Structure

```
UniQon/
├── index.html          # Home page
├── shop.html           # Shopping page with product listings
├── about.html          # About us, services, and team
├── contact.html        # Contact form and newsletter
├── CSS/
│   ├── styles_home.css
│   ├── styles_shop.css
│   ├── styles_about.css
│   └── styles_contact.css
├── JS/
│   ├── script.js
│   └── script_shop.js
└── img/                # Images and assets
    ├── logo/
    ├── bands/
    └── user/
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required - pure HTML, CSS, and JavaScript

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/uniqon.git
```

2. Navigate to the project directory:
```bash
cd uniqon
```

3. Open `index.html` in your web browser:
```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

Or simply double-click the `index.html` file to open it in your default browser.

### Using Docker

Run the application in a Docker container:

1. Build the Docker image:
```bash
docker build -t uniqon-website .
```

2. Run the container:
```bash
docker run -d -p 8080:80 uniqon-website
```

3. Open your browser and navigate to:
```
http://localhost:8080
```

To stop the container:
```bash
docker ps                    # Find the container ID
docker stop <container-id>   # Stop the container
```

## 📄 Pages Overview

### Home Page (`index.html`)
- Hero section with call-to-action
- Hot sales section featuring discounted products
- Special deals and promotions
- Top brands showcase
- Footer with quick links

### Shop Page (`shop.html`)
- Product catalog with search functionality
- Category filtering (Clothes, Sneakers, Accessories)
- Dynamic product display
- Add to cart functionality

### About Page (`about.html`)
- Company history and mission
- Service offerings
- Team member profiles
- Company values

### Contact Page (`contact.html`)
- Contact form for customer inquiries
- Newsletter subscription
- Google Maps integration for store location
- Social media links

## 🎨 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript** - Interactive functionality
- **Font Awesome** - Icon library
- **Google Maps API** - Location integration

### Live Demo
https://github.com/user-attachments/assets/9301aed9-ba9b-494a-a714-de0968205308

## 🛠️ Features in Detail

### Search Functionality
- Category-based filtering
- Real-time search results
- Dropdown menu for quick category selection

### Product Display
- Star ratings
- Original and discounted prices
- Quick add-to-cart buttons
- Product images and descriptions

### Responsive Navigation
- Mobile-friendly hamburger menu
- Shopping cart icon
- User account access
- Smooth page transitions

## 🙏 Acknowledgments

- Font Awesome for the icon library
- All brand logos are property of their respective owners
- Images used are for demonstration purposes

