import { types } from "../types/types";

const initialState={
    products:[],
    productsFilter:null,
    product:null,
    loading:true
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                productsFilter:null,
                product:null,
                loading:false
            }

        case types.SET_PRODUCT:
            return{
                ...state,
                product:action.payload
            }
        default:
           return state;
    }

}