import React from "react";
import { Col, Row } from "react-bootstrap";
import Item from "./Item";
const ItemList = ({ products }) => {
  return (
    <Row className="row-container-item">
      {products.map((item) => {
        return (
          <Col md={3}>
            <Item
              title={item.title}
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
