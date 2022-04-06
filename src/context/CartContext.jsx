import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {

  const [cartList, setCartList] = useState([]);

  const addToCart = (item) => {
    const findItem = cartList.find((product) => product.id === item.id);
    if (findItem) {
      findItem.cantidad = item.cantidad + findItem.cantidad;
    } else {
      setCartList([...cartList, item]);
    }
  };

  const removeCart = () => {
    setCartList([]);
  };

  const removeItem=(itemId)=>{
    const filterCartList=cartList.filter(element=>element.id!=itemId)
    setCartList(filterCartList);
  }
  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeCart,
        removeItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
