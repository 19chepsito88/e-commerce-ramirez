import React, { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { getFetch } from "../../helpers/getFetch";
import { Container, Spinner } from "react-bootstrap";

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
    <Container fluid className={`${loading?'text-center':null}`}>
      {loading ? (
        <Spinner animation="grow" className="loading-item" />
      ) : (
        <ItemList products={products} />
      )}
    </Container>
  );
};

export default ItemListContainer;
