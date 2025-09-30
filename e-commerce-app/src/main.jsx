import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext"; // ✅ IMPORT IT

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>   {/* ✅ WRAP YOUR APP HERE */}
    <App />
  </CartProvider>
);
