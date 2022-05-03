import { createContext, useContext } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart, removeCart, removeItem } from "../actions/products";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({
  children,
  addToCart,
  removeCart,
  removeItem,
  cartList,
}) {
  const totalPrice = () => {
    return cartList.reduce((tot, valor) => tot + valor.amount * valor.price, 0);
  };

  const totalProducts = () => {
    return cartList.reduce((tot, valor) => tot + valor.amount, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeCart,
        removeItem,
        totalPrice,
        totalProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const mapStateToProps = (state) => ({
  cartList: state.products.cartList,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addToCart,
      removeCart,
      removeItem,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContextProvider);