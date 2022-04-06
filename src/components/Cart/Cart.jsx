import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const { cartList, removeCart, removeItem } = useCartContext();
  const resetCart = () => {
    removeCart();
  };
  
  return (
    <div className="container-cart">
      <Table  striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((prod,id) => (
            <tr key={prod.id}>
              <td>{id+1}</td>
              <td>{prod.name}</td>
              <td>{`$ ${prod.precio}.00`}</td>
              <td>{prod.cantidad}</td>
              <td><button onClick={()=>removeItem(prod.id)}></button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
      {
       cartList.length > 0 ?
       <button onClick={resetCart}>Vaciar Carrito</button>
       :
       <Link to="/">
         <button >Regresar</button>
      </Link>
      }
      </div>
    </div>
  );
};

export default Cart;
