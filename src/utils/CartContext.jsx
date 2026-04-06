import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");

  const addToCart = (item, restName) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      if (prev.length === 0) setRestaurantName(restName || "");
      return [...prev, { ...item, quantity: 1 }];
    });
    if (cartItems.length === 0) setRestaurantName(restName || "");
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) => {
      const updated = prev.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity - 1 } : i
      ).filter((i) => i.quantity > 0);
      if (updated.length === 0) setRestaurantName("");
      return updated;
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const updated = prev.filter((i) => i.id !== id);
      if (updated.length === 0) setRestaurantName("");
      return updated;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    setRestaurantName("");
  };

  const totalCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        restaurantName,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        totalCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
