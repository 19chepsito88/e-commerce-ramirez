import { types } from "../types/types";
import { collection, getDocs, getFirestore } from 'firebase/firestore'

export const getMenuItems = () => {
    return async (dispatch) => {
        const querydb = getFirestore();
        const queryMenutItems = collection(querydb, 'menuItems');
        await getDocs(queryMenutItems)
            .then((resp) => dispatch(setMenuItems(resp.docs.map(item => ({ id: item.id, ...item.data() })))))
    }
}

export const setMenuItems = (menuItems) => ({
    type: types.SET_MENU_ITEMS,
    payload: menuItems
})