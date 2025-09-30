import React from "react";
import "../styles/CartDrawer.css";
import { useCart } from "../context/CartContext";

function CartDrawer({ isOpen, onClose }) {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  // Calculate subtotal
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>My Cart</h2>
        <button className="close-btn" onClick={onClose}>❌</button>
      </div>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <div className="item-info">
                <p className="item-title">{item.title}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
                <p className="item-price">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>❌</button>
            </div>
          ))}

          {/* ✅ Checkout Section */}
          <div className="cart-footer">
            <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartDrawer;
