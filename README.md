# Paradise Nursery Shopping Application

A responsive React and Redux Toolkit e-commerce demo for browsing houseplants and managing a shopping cart.

## Features
- Landing page and About Us page
- 18 plants across three categories
- Add-to-cart buttons that disable after adding a plant
- Shared navigation with live cart quantity
- Increase/decrease quantities, remove items, subtotals and cart total
- Responsive layout for desktop and mobile
- Checkout placeholder message

## Technologies
React, Vite, React Router, Redux Toolkit, React Redux, CSS, JavaScript.

## Run locally
1. Install Node.js (18 or newer).
2. In this folder run `npm install`.
3. Run `npm run dev` and open the local URL shown in the terminal.
4. Run `npm run build` to check the production build.

## Project structure
- `src/App.jsx` — application routes and landing page
- `src/components/AboutUs.jsx` — company information
- `src/components/ProductList.jsx` — categorized plant catalogue
- `src/components/CartItem.jsx` — shopping cart page
- `src/redux/CartSlice.jsx` — Redux cart state and actions
