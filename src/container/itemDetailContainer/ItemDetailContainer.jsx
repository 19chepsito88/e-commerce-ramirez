import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProductById } from "../../actions/products";
import ItemDetail from "../../components/itemDetail/ItemDetail";
import  Container from "react-bootstrap/Container";
import Spinner  from "react-bootstrap/Spinner";

const ItemDetailContainer = ({ product, getProductById }) => {
  const { detailId } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProductById(detailId);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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