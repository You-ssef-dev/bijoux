import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Minus, Plus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="page cart-page empty-cart">
        <div className="container section">
          <h1>Your Cart</h1>
          <p>Your shopping bag is empty.</p>
          <Link to="/shop" className="btn btn-primary">Continue Shopping</Link>
        </div>
        <style>{`
            .empty-cart {
                text-align: center;
                min-height: 60vh;
                display: flex;
                align-items: center;
            }
            .empty-cart h1 { margin-bottom: 1rem; }
            .empty-cart p { margin-bottom: 2rem; color: var(--color-secondary); }
        `}</style>
      </div>
    );
  }

  return (
    <div className="page cart-page">
      <div className="container section">
        <h1>Your Cart</h1>

        <div className="cart-layout">
          <div className="cart-items">
            <div className="cart-header">
              <span>Product</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <div className="item-image-container">
                    {item.image && <img src={item.image} alt={item.name} className="item-image" />}
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-price">${item.price.toLocaleString()}</p>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                      <Trash2 size={16} /> Remove
                    </button>
                  </div>
                </div>
                <div className="item-quantity">
                  <div className="quantity-selector small">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={14} /></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={14} /></button>
                  </div>
                </div>
                <div className="item-total">
                  ${(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${cartTotal.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${cartTotal.toLocaleString()}</span>
            </div>
            <button className="btn btn-primary checkout-btn" onClick={() => {
              const message = `Hello Bijoux, I would like to place an order:\n\n${cart.map(item => `- ${item.name} (x${item.quantity}): $${(item.price * item.quantity).toLocaleString()}`).join('\n')}\n\nTotal: $${cartTotal.toLocaleString()}\n\nPlease confirm availability and shipping details.`;
              const encodedMessage = encodeURIComponent(message);
              window.open(`https://wa.me/15551234567?text=${encodedMessage}`, '_blank');
            }}>
              Order on WhatsApp <ArrowRight size={16} />
            </button>
            <div className="payment-badges">
              {/* Placeholder for payment icons */}
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cart-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          margin-top: 3rem;
        }

        .cart-header {
          display: grid;
          grid-template-columns: 3fr 1fr 1fr;
          padding-bottom: 1rem;
          border-bottom: 1px solid #eee;
          font-family: var(--font-serif);
          color: var(--color-secondary);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .cart-item {
          display: grid;
          grid-template-columns: 3fr 1fr 1fr;
          padding: 2rem 0;
          border-bottom: 1px solid #eee;
          align-items: center;
        }

        .item-info {
          display: flex;
          gap: 1.5rem;
        }

        .item-image-container {
          width: 80px;
          height: 80px;
          width: 80px;
          height: 80px;
          background-color: var(--color-card-bg);
          overflow: hidden;
          overflow: hidden;
        }

        .item-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .item-details h3 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        .item-price {
          color: var(--color-secondary);
          margin-bottom: 0.5rem;
        }

        .remove-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: #999;
          transition: color 0.3s;
        }

        .remove-btn:hover {
          color: #d9534f;
        }

        .quantity-selector.small {
          display: inline-flex;
          align-items: center;
          display: inline-flex;
          align-items: center;
          border: 1px solid var(--color-border);
        }

        .quantity-selector.small button {
          padding: 0.5rem;
        }

        .quantity-selector.small span {
          width: 30px;
          text-align: center;
          font-size: 0.9rem;
        }

        .item-total {
          font-family: var(--font-sans);
          font-weight: 700;
        }

        .cart-summary {
          background-color: var(--color-card-bg);
          padding: 2rem;
          height: fit-content;
          padding: 2rem;
          height: fit-content;
        }

        .cart-summary h2 {
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          color: var(--color-secondary);
        }

        .summary-row.total {
          border-top: 1px solid var(--color-border);
          padding-top: 1rem;
          padding-top: 1rem;
          margin-top: 1rem;
          font-size: 1.2rem;
          color: var(--color-text);
          font-weight: 700;
        }

        .checkout-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }
        
        .payment-badges {
            text-align: center;
            margin-top: 1.5rem;
            font-size: 0.8rem;
            color: #999;
            display: flex;
            justify-content: center;
            gap: 0.5rem;
        }

        @media (max-width: 768px) {
          .cart-layout {
            grid-template-columns: 1fr;
          }
          .cart-header {
            display: none;
          }
          .cart-item {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .item-quantity, .item-total {
            justify-self: start;
            margin-left: 95px; /* Align with text */
          }
        }
      `}</style>
    </div>
  );
};

export default Cart;
