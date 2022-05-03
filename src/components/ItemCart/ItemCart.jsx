import { useCartContext } from "../../context/CartContext";
import { ReactComponent as DeleteIcon } from "../Icons/delete.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

const ItemCart = ({ product }) => {
  const { removeItem } = useCartContext();
  return (
    <Row key={product.id}>
      <Col md={4}>
        <Card.Img
          className="card-product-image"
          variant="top"
          src={product.picture}
        />
      </Col>
      <Col>
        <h2>{product.name}</h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Precio</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            <tr key={product.id}>
              <td>{`$ ${product.price}.00`}</td>
              <td>{product.amount}</td>
              <td>
                <DeleteIcon onClick={() => removeItem(product.id)} />
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default ItemCart;