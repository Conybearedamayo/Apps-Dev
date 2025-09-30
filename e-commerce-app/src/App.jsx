import React, { useState } from "react";
import ProductListingPage from "./pages/ProductListingPage";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/CartDrawer";
import "./styles/index.css";

function App() {
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="app-container">
        <header className="app-header">
          <h1 className="logo">7Lepitin Shop</h1>
          <button className="cart-button" onClick={() => setCartOpen(true)}>🛒</button>
        </header>

        <main className="app-main">
          <ProductListingPage />
        </main>

        <CartDrawer isOpen={isCartOpen} onClose={() => setCartOpen(false)} />

        <footer className="app-footer">
          <p>© {new Date().getFullYear()} Need help? Contact support@7lepitin.com.</p>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;
