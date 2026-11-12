import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const products = [
  { id: '1', name: 'Wireless Headphones', price: 1299, emoji: '🎧' },
  { id: '2', name: 'Smart Watch', price: 1899, emoji: '⌚' },
  { id: '3', name: 'Bluetooth Speaker', price: 999, emoji: '🔊' },
  { id: '4', name: 'Power Bank', price: 799, emoji: '🔋' },
  { id: '5', name: 'Gaming Mouse', price: 599, emoji: '🖱️' },
  { id: '6', name: 'Keyboard', price: 1499, emoji: '⌨️' },
];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === product.id);

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ products, cart, addToCart, removeFromCart, total, itemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
