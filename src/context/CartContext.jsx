// Cart Context 
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export const CartProvider = ({children}) => {
  const [cartItem, setCartItem] = useState(() => {
    // Local Storage save & sync
    try {
      const storedCart = localStorage.getItem('cart');
      return storedCart && storedCart !== "undefined" ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error('Error parsing cart from local Storage!', error);
    }
  });

  useEffect(()=> {
    localStorage.setItem('cart', JSON.stringify(cartItem));
  }, [cartItem]);

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
      toast.success("Item added to Cart!")
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
        if (action === "increase") {
          toast.info("Quantity increased")
        } else if (action === "decrease") {
          toast.warn("Quantity decrease");
        }

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
  toast.error("Item removed from cart");
};


  return <CartContext.Provider value={{cartItem, setCartItem, addToCart, updateQuantity, removeItem}}>
    {children}
  </CartContext.Provider>
}

export const useCart = ()=> useContext(CartContext);
