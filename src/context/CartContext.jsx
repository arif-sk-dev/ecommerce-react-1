// Cart Context 
import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({children}) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product)=> {
    const itemInCart = cartItem.find((item) => item.id === product.id);
    if(itemInCart) {
      //increase quantity not increment if existing quantity
      const updatedCart = cartItem.map((item) =>
        item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
      setCartItem(updatedCart);
    } else {
      //Add new item with quantity
      setCartItem([...cartItem, {...product, quantity: 1}]);
    }
  }


  const updateQuantity = (productId, action) => {
  const updatedCart = cartItem
    .map(item => {
      if (item.id === productId) {
        const newQuantity = action === "increase"
          ? item.quantity + 1
          : item.quantity > 1
          ? item.quantity - 1
          : item.quantity;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    });
    // .filter(item => item !== null); // remove items with quantity 0

  setCartItem(updatedCart);
};

const removeItem = (productId) => {
  const updatedCart = cartItem.filter(item => item.id !== productId);
  setCartItem(updatedCart);
};


  
  return <CartContext.Provider value={{cartItem, setCartItem, addToCart, updateQuantity, removeItem}}>
    {children}
  </CartContext.Provider>
}

export const useCart = ()=> useContext(CartContext);
