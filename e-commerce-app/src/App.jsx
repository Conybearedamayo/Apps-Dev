import React from 'react';
import ProductListingPage from './pages/ProductListingPage';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="logo">UrbanUtopia Shop</h1>
      </header>

      <main className="app-main">
        <ProductListingPage />
      </main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} E-Commerce App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
