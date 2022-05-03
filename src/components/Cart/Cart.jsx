import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useCartContext } from "../../context/CartContext";
import ItemCartListContainer from "../../container/itemCartListContainer/ItemCartListContainer";
import CartForm from "../CartForm/CartForm";
import { insertOrders } from "../../actions/products";
import  Button  from "react-bootstrap/Button";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import "./Cart.css";

const Cart = ({ insertOrders}) => {
  const { cartList, removeCart, totalPrice } = useCartContext();
  return (
    <div className="container-cart">
      {cartList.length > 0 ? (
        <Row>
          <Col md={8}>
            <ItemCartListContainer cartList={cartList} />
          </Col>
          <Col md={4}>
            <h2>Total :$ {totalPrice()}</h2>
            <div>
              <Button variant="danger" onClick={removeCart}>
                Vaciar Carrito
              </Button>
              <CartForm
                cartList={cartList}
                totalPrice={totalPrice}
                insertOrders={insertOrders}
              />
            </div>
          </Col>
        </Row>
      ) : (
        <>
          <h2>Usted no tiene productos</h2>
          <Link to="/">
            <Button variant="primary">Comprar ahora</Button>
          </Link>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  messageError:state.products.messageError
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      insertOrders
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Cart);