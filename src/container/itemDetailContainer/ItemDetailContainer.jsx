import { useEffect, useState } from "react";
import { getProductById } from "../../actions/products";
import ItemDetail from "../../components/itemDetail/ItemDetail";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const ItemDetailContainer = ({ product, getProductById }) => {
  const { detailId } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProductById(detailId);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Container fluid className={loading ? "text-center" : null}>
      {loading ? (
        <Spinner animation="grow" className="loading-item" />
      ) : (
        product && <ItemDetail product={product} />
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  product: state.products.product,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getProductById,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetailContainer);
