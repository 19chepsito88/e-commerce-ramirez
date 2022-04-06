import {  useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";

import ItemCount from "../ItemCount";
import InputCount from "./componentes/InputCount";

const ItemDetail = ({ product }) => {
  const [inputType, setInputType] = useState("button");

  const { addToCart } = useCartContext();

  const onAdd = (cant) => {
    setInputType("input");
    addToCart({...product,cantidad:cant})
  };

  return (
    <Row className="container-item-detail">
      <Col className="text-center col-picture" md={6}>
        <img
          className="zoom img-detail"
          src={require(`../../images/${product.picture}.jpg`)}
        />
      </Col>
      <Col style={{ paddingRight: 0 }}>
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="title-product">{product.name}</span>
            <div className="price-product">
              Precio: <span>{product.precio}</span>
            </div>
            <div className="description-product">
              Descripción: <span>{product.description}</span>
            </div>
          </div>
          <div className="footer-detail">
            {inputType === "button" ? (
              <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
            ) : (
              <InputCount />
            )}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ItemDetail;