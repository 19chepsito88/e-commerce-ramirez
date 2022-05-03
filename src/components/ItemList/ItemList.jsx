import { useContext } from "react";
import { contextItemListContainer } from "../../container/itemListContainer/ItemListContainer";
import Item from "../Item/Item";
import Row  from "react-bootstrap/Row";
import  Col from "react-bootstrap/Col";
import './ItemList.css'

const ItemList = () => {
  const { products } = useContext(contextItemListContainer);
  return (
    <Row className="row-container">
      {products.map((product) => {
        return (
          <Col md={3} key={product.id}>
            <Item
              id={product.id}
              name={product.name}
              picture={product.picture}
              stock={product.stock}
              description={product.description}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default ItemList;