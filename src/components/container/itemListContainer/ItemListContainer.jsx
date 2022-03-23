import React, { useEffect, useState } from "react";
import ItemList from "../../ItemList";
import { getFetch } from "../../../helpers/getFetch";
import { Container, Row, Spinner } from "react-bootstrap";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch
      .then((resp) => setProducts(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container >
      {loading ? (
        <Spinner animation="grow" className="loading-item" />
      ) : (
        <ItemList products={products} />
      )}
    </Container>
  );
};

export default ItemListContainer;
