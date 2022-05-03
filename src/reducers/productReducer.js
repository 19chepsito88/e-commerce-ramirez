import { types } from "../types/types";

const initialState = {
    products: [],
    product: null,
    loading: true,
    cartList: [],
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                product: null,
                loading: false
            }

        case types.SET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case types.SET_CART_LIST:

            const findItem = state.cartList.find((product) => product.id === action.payload.id);
            if (findItem) {
                findItem.amount = action.payload.amount + findItem.amount;
            }
            return {
                ...state,
                cartList: findItem ? [findItem] : [...state.cartList, action.payload],
            }
        case types.RESET_CART_LIST:
            return {
                ...state,
                cartList: [],
            }
        case types.DELETE_ITE_CART_LIST:
            const filterCartList = state.cartList.filter((element) => element.id != action.payload);
            return {
                ...state,
                cartList: filterCartList
            }
        default:
            return state;
    }
}