import { useEffect, useState } from "react";
import { getFetch } from "../../helpers/getFetch";
import ItemDetail from "../../components/itemDetail/ItemDetail";
import { Container } from "react-bootstrap";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getFetch
      .then((resp) => setProduct(resp.find((product) => product.id === "1")))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  return (
    <Container fluid>{product && <ItemDetail product={product} />}</Container>
  );
};

export default ItemDetailContainer;
