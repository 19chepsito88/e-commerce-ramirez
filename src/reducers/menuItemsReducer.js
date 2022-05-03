import { types } from "../types/types";

const initialState={
    menuItems:[],
}

export const menuItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_MENU_ITEMS:
            return {
                ...state,
                menuItems: action.payload,
            }
        default:
           return state;
    }

}