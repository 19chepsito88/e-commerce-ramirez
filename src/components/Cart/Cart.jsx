import React from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../Icons/delete.svg";
import { useCartContext } from "../../context/CartContext";
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import Swal from "sweetalert2";

const Cart = () => {
  const { cartList, removeCart, removeItem, totalCompra } = useCartContext();

  const generarOrden = async (e) => {
    e.preventDefault();
    let orden = {};
    orden.buyer = {
      name: "Eusebio",
      email: "fugus@dks.com",
      phone: "5520351388",
    };
    orden.total = totalCompra();
    orden.items = cartList.map((product) => {
      const id = product.id;
      const nombre = product.name;
      const precio = product.precio * product.cantidad;
      const cantidad = product.cantidad;

      return { id, nombre, precio, cantidad };
    });

    const db = getFirestore();

    const queryCollection = collection(db, "orders");
    await addDoc(queryCollection, orden).then(({ id }) =>
      Swal.fire({
        title: `Compra Exitosa ${id}`,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      })
    );

    const queryCollectionStock = collection(db, "productos");
    const queryActualizarStock = await query(
      queryCollectionStock,
      where(
        documentId(),
        "in",
        cartList.map((it) => it.id)
      )
    );
    const batch = writeBatch(db);
    await getDocs(queryActualizarStock)
      .then((resp) =>
        resp.docs.forEach((res) =>
          batch.update(res.ref, {
            stock:
              res.data().stock -
              cartList.find((item) => item.id === res.id).cantidad,
          })
        )
      )
      .finally(() => removeCart());
    batch.commit();
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
            <h2>Total :$ {totalCompra()}</h2>
            <div>
              <Button variant="danger" onClick={removeCart}>
                Vaciar Carrito
              </Button>
              <Button
                variant="success"
                className="btn-Orden"
                onClick={generarOrden}
              >
                Generar Orden
              </Button>
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
