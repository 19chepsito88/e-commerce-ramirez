import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import InputCount from "./componentes/InputCount";
import Row  from "react-bootstrap/Row";
import  Col from "react-bootstrap/Col";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const [inputType, setInputType] = useState("button");
  const { addToCart } = useCartContext();

  const onAdd = (amount) => {
    setInputType("input");
    addToCart({ ...product, amount: amount });
  };

  return (
    <Row className="container-item-detail">
      <Col className="text-center col-picture" md={6}>
        <img
          className="zoom img-detail"
          src={product.picture}
        />
      </Col>
      <Col className="col-description">
        <div className="head-detail" >
          <span className="title-product">{product.name}</span>
          <div className="price-product">
            Precio: <span>{product.price}</span>
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
      </Col>
    </Row>
  );
};

export default ItemDetail;