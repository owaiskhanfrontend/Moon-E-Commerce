# Moon E-Commerce

Responsive e-commerce frontend built from a Figma design using React.

## Project Links

* **Figma Design:** [Moon E-Commerce Figma Design](https://www.figma.com/design/OA5JQHlCktJlOEFDCD6mou/Moon-Ceramic---Furniture-Store-ECommerce-Website-Shop--Community-?node-id=0-1)
* **YouTube Channel:** [@OwaisKhanFrontEnd-dev](https://www.youtube.com/@OwaisKhanFrontEnd-dev)

## Tech

React, Tailwind CSS, React Router, Context API, `useReducer`, JavaScript, DummyJSON API, localStorage, Blender 3D

## Features

* Responsive e-commerce interface
* Figma-to-code implementation
* Product discovery and search
* Category filtering
* Price filtering
* Product sorting
* Product summary page
* Dynamic product data from DummyJSON API
* Shopping cart
* Wishlist system
* Cart quantity management
* Wishlist quantity limits
* Product stock handling
* Discounted product pricing
* Persistent cart state with localStorage
* Persistent wishlist state with localStorage
* Checkout form
* Payment method selection
* Form validation
* Auto-fill demo checkout data
* Simulated login/signup interface
* Responsive navigation and mobile menu
* Loading states
* Offline/network error handling
* Popup feedback messages
* Responsive layouts from desktop to mobile
* Custom Blender visual assets
* Reusable React components
* Context-based cart state management
* Context-based wishlist state management
* React Router page navigation

## Project Structure

```text
src/
├── assets/
│
├── Components/
│   ├── About/
│   │   └── About.jsx
│   │
│   ├── CartUI/
│   │   └── CartSystemui.jsx
│   │
│   ├── Checkout/
│   │   └── Checkout.jsx
│   │
│   ├── Common/
│   │   ├── OfflineErrorState.jsx
│   │   └── PopupMessage.jsx
│   │
│   ├── Contact/
│   │   └── Contact.jsx
│   │
│   ├── Context/
│   │   ├── CartContext.jsx
│   │   └── WishlistContext.jsx
│   │
│   ├── Home/
│   │   ├── FeaturedCategory.jsx
│   │   ├── FeaturedProducts.jsx
│   │   ├── Hero.jsx
│   │   └── Home.jsx
│   │
│   ├── Login/
│   │   └── Signup.jsx
│   │
│   ├── ProductSummary/
│   │   └── ProductSummary.jsx
│   │
│   ├── Share/
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx
│   │   │
│   │   └── UI/
│   │       └── ProductUI.jsx
│   │
│   ├── Shop/
│   │   ├── ProductsStateHook/
│   │   │   └── ProductsState.jsx
│   │   │
│   │   ├── FilterPanelUI.jsx
│   │   ├── Shop.jsx
│   │   ├── ShopingGrid.jsx
│   │   └── ShoppingProductsUI.jsx
│   │
│   └── WishlistUI/
│       └── WishlistUI.jsx
│
├── App.jsx
├── index.css
└── main.jsx
```

## Folder Overview

**assets/**
Contains all optimized project assets, including Blender-rendered visuals and Figma assets.

* Blender assets: approximately 616.7 KB total
* Figma assets: approximately 33.21 KB total

**Context/**
Contains the global cart and wishlist state using React Context and `useReducer`.

**Home/**
Contains the homepage composition, hero section, featured categories, and featured products.

**Shop/**
Contains the main product discovery interface, filters, sorting, product grid, and custom product state hook.

**ProductSummary/**
Handles the dynamic product details page, quantity selection, wishlist actions, cart actions, product information, and reviews.

**CartUI/**
Contains the shopping cart interface, quantity controls, totals, item removal, and checkout navigation.

**WishlistUI/**
Handles wishlist items, wishlist actions, stock state, and adding wishlist products to the cart.

**Checkout/**
Contains the checkout form, payment selection, order summary, validation, and order flow UI.

**Login/**
Contains the simulated login/signup interface.

**Common/**
Contains small reusable UI components such as network error handling and popup messages.

**Share/**
Contains components reused across the application, including the Navbar, Footer, and shared Product UI.

## Notes

Moon E-Commerce is a frontend portfolio project focused on React component architecture, state management, API integration, responsive UI development, Figma-to-code implementation, and optimized Blender 3D visuals.

Authentication, checkout processing, and ordering are frontend demonstrations and are not connected to a production backend.
