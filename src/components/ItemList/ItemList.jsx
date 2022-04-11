import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { contextItemListContainer } from "../../container/itemListContainer/ItemListContainer";
import Item from "../Item/Item";

const ItemList = () => {
  const { products } = useContext(contextItemListContainer);
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
