import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createContext } from "react";
import { getproducts } from "../../actions/products";
import ItemList from "../../components/ItemList/ItemList";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
export const contextItemListContainer = createContext([]);
const ItemListContainer = ({ products, getproducts, loading }) => {
  const { categoryId } = useParams();
  useEffect(() => {
    if (categoryId) {
      getproducts(categoryId);
    } else {
      getproducts();
    }
  }, [categoryId]);

  return (
    <contextItemListContainer.Provider
      value={{
        products: products,
      }}
    >
      <Container fluid className={loading ? "text-center" : null}>
        {loading ? (
          <Spinner animation="grow" className="loading-item" />
        ) : (
          <ItemList />
        )}
      </Container>
    </contextItemListContainer.Provider>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
  loading: state.products.loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getproducts,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ItemListContainer);