# Web3ShopAppUi

This project provides a Web3-enabled Shopify Admin UI for integrating blockchain and cryptocurrency features into e-commerce stores.

## Overview

This Admin UI provides merchants with:

- Web3 integration capabilities for Shopify stores
- Cryptocurrency payment processing
- NFT and digital asset management
- Blockchain-based loyalty programs

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- A Shopify Partner account
- A Shopify development store for testing

### Installation

1. Clone this repository:
   ```
   git clone https://github.com/SNRose0317/Web3ShopAppUi.git
   cd Web3ShopAppUi
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Your app will run at `http://localhost:3000`

## Shopify App Setup

To configure this app to appear in your Shopify Admin:

1. Go to your [Shopify Partner Dashboard](https://partners.shopify.com)
2. Navigate to your app's details
3. Under "App setup", find the "Embedded app" section and click "Manage"
4. Configure the navigation by clicking "Configure" in the Navigation section
5. Add navigation items that correspond to the routes in this application

## Project Structure

```
Web3ShopAppUi/
├── public/                 # Static files
├── src/                    # Source code
│   ├── components/         # Reusable components
│   │   ├── Logo.tsx        # App logo component
│   │   └── Navigation.tsx  # Sidebar navigation component
│   ├── pages/              # Page components
│   │   ├── Dashboard.tsx   # Home page
│   │   ├── Instructions.tsx # Documentation page
│   │   ├── Support.tsx     # Support & FAQ page
│   │   └── Settings.tsx    # Account settings page
│   ├── assets/             # Images, icons, etc.
│   ├── utils/              # Utility functions
│   ├── hooks/              # Custom React hooks
│   ├── App.tsx             # Main app component
│   └── index.tsx           # Entry point
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Development Notes

- This UI is built with React and TypeScript
- Uses Shopify Polaris for UI components
- Uses React Router for navigation
- Integrates with Web3 libraries for blockchain functionality

## Support

For any issues or questions, please contact support at:

- GitHub Issues: https://github.com/SNRose0317/Web3ShopAppUi/issues
