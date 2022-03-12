import { ReactComponent as ShoppingIcon } from "../Icons/shopping.svg";
import "./NavBar.css";
const CartWidget = () => {
  return (
    <div className="container-shopp-car">
      <ShoppingIcon width={30} height={30} fill="red" />
    </div>
  );
};

export default CartWidget;
