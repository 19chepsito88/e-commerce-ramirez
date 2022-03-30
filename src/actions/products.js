import { getFetch } from "../helpers/getFetch";
import { types } from "../types/types"

export const getproducts = () => {
    return async (dispatch) => {
        getFetch
            .then((resp) => dispatch(setProducts(resp)))
            .catch((err) => console.log(err))
            .finally(() => console.log('fin'));
    }
}

export const setProducts = (products) => ({
    type: types.GET_PRODUCTS,
    payload: products
})

export const getProductFilter = (category) => ({
    type: types.GET_PRODUCTS_FILTER,
    payload: {
        category
    }
})

export const getProductById = (idProduct) => ({
    type: types.GET_PRODUCT_BY_ID,
    payload: {
        idProduct
    }
})