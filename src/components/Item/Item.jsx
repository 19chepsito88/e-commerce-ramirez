import { Card } from "react-bootstrap";
import "./Item.css";

const ItemList = ({ name, picture, stock }) => {
  return (
    <>
      <Card className="card-product">
        <Card.Img
          className="card-product-image"
          variant="top"
          src={require(`../../images/${picture}.jpg`)}
        />
        <Card.Body className="card-product-body">
          <Card.Title className="item-name">{name}</Card.Title>
          <Card.Text>{`Disponibles ${stock}`}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemList;
