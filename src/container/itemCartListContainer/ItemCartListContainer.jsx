import ItemCart from "../../components/ItemCart/ItemCart";
import  Row  from "react-bootstrap/Row";

const ItemCartListContainer = ({ cartList }) => {
  return (
    <Row>
      {cartList.map((product) => {
        return <ItemCart key={product.id} product={product} />;
      })}
    </Row>
  );
};

export default ItemCartListContainer;