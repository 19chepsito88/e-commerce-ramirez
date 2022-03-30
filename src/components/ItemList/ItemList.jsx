import { Col, Row } from "react-bootstrap";
import Item from "../Item/Item";
const ItemList = ({ products }) => {
  return (
    <Row className="row-container">
      {products.map((item) => {
        return (
          <Col md={3} key={item.id}>
            <Item
              id={item.id}
              name={item.name}
              picture={item.picture}
              stock={item.stock}
              precio={item.precio}
              description={item.description}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default ItemList;
