import { types } from "../types/types";

const initialState={
    products:[],
    productsFilter:null,
    product:null,
    loading:true
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                productsFilter:null,
                product:null,
                loading:false
            }
        case types.GET_PRODUCTS_FILTER:
            const newProducts=state.products.filter(product=>product.category===action.payload.category)
            return {
                ...state,
                productsFilter:newProducts,
                product:null,
                loading:false
            }
        case types.GET_PRODUCT_BY_ID:
            const findProduct=state.products.find((product) => product.id === action.payload.idProduct)
            return{
                ...state,
                product:findProduct
            }
        default:
           return state;
    }

}