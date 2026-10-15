// src/context/CartContext.jsx
import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  totalQuantity: 0,
  totalPrice: 0
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto verificando duplicados
  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, { ...item, quantity }]);
    } else {
      setCart(prev => prev.map(prod => 
        prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
      ));
    }
  };

  const removeItem = (itemId) => {
    setCart(prev => prev.filter(prod => prod.id !== itemId));
  };

  const clearCart = () => setCart([]);

  const isInCart = (itemId) => cart.some(prod => prod.id === itemId);

  // Cálculos globales dinámicos
  const totalQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);
  const totalPrice = cart.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
