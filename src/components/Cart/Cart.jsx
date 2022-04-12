import React from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../Icons/delete.svg";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const { cartList, removeCart, removeItem, totalCompra } = useCartContext();
  const resetCart = () => {
    removeCart();
  };

  return (
    <div className="container-cart">
      {cartList.length > 0 ? (
        <Row>
          <Col md={8}>
            {
              <Row>
                {cartList.map((prod) => {
                  return (
                    <Row>
                      <Col md={4}>
                        <Card.Img
                          className="card-product-image"
                          variant="top"
                          src={require(`../../images/${prod.picture}.jpg`)}
                        />
                      </Col>
                      <Col>
                        <h2>{prod.name}</h2>
                        <Table striped bordered hover size="sm">
                          <thead>
                            <tr>
                              <th>Precio</th>
                              <th>Cantidad</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr key={prod.id}>
                              <td>{`$ ${prod.precio}.00`}</td>
                              <td>{prod.cantidad}</td>
                              <td>
                                <DeleteIcon
                                  onClick={() => removeItem(prod.id)}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                  );
                })}
              </Row>
            }
          </Col>
          <Col md={4}>
            <h2>Total :{totalCompra()}</h2>
            <div>
            <Button variant="danger" onClick={resetCart}>Vaciar Carrito</Button>
            </div>
          </Col>
        </Row>
      ) : (
        <>
          <h2>Usted no tiene productos</h2>
          <Link to="/">
            <Button variant="primary">Comprar ahora</Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
