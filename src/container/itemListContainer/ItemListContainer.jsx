import React, { useEffect } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getproducts, getProductFilter } from "../../actions/products";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const ItemListContainer = ({
  products,
  getproducts,
  productsFilter,
  getProductFilter,
  loading
}) => {

  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      getProductFilter(categoryId);
    } else {
      getproducts();
    }
  }, [categoryId]);

  return (
    <Container fluid className={`${loading ? "text-center" : null}`}>
      {loading ? (
        <Spinner animation="grow" className="loading-item" />
      ) : (
        <ItemList products={productsFilter?productsFilter:products} />
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
  productsFilter:state.products.productsFilter,
  loading: state.products.loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getproducts,
      getProductFilter,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ItemListContainer);
