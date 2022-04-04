import { useEffect, useState } from "react";
import { getProductById } from "../../actions/products";
import ItemDetail from "../../components/itemDetail/ItemDetail";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const ItemDetailContainer = ({ product, getProductById }) => {
  const { detailId } = useParams();
  useEffect(() => {
    getProductById(detailId);
  }, []);

  return (
    <Container fluid>
      {product && (
        <>
          <ItemDetail product={product} />
        </>
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
