import React from 'react';
import ProductListingPage from './pages/ProductListingPage';
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="logo"> 7Lepitin Shop</h1>
      </header>

      <main className="app-main">
        <ProductListingPage />
      </main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Need help? Contact support@7lepitin.com.</p>
      </footer>
    </div>
  );
}

export default App;
