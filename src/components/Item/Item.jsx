import { memo } from "react";
import { NavLink } from "react-router-dom";
import  Card  from "react-bootstrap/Card";
import "./Item.css";

const ItemList = memo(({ id, name, picture, stock }) => {
  return (
    <>
      <Card className="card-product">
        <Card.Img
          className="card-product-image"
          variant="top"
          src={picture}
        />
        <Card.Body className="card-product-body">
          <Card.Title className="item-name">{name}</Card.Title>
          <Card.Text>{`Disponibles ${stock}`}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <NavLink to={`/detail/${id}`}>
            <button className="btn btn-outline-primary btn-block">
              Ver detalle
            </button>
          </NavLink>
        </Card.Footer>
      </Card>
    </>
  );
});

export default ItemList;