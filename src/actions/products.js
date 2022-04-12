import { types } from "../types/types";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'

export const getproducts = () => {
    return async (dispatch) => {
        const querydb = getFirestore();
        const queryProductos = collection(querydb, 'productos');
        await getDocs(queryProductos)
            .then((resp) =>dispatch(setProducts(resp.docs.map(item => ({ id: item.id, ...item.data() })))))
            .catch((err) => console.log(err))
            .finally(() => console.log('fin'));
    }
}

export const getProductFilter = (category) => {
    return async (dispatch) => {
        const querydb = getFirestore();
        const queryProductos = collection(querydb, 'productos');
        const queryFilter=query(queryProductos,
            where('category','==',category)

        )
        await getDocs(queryFilter)
            .then((resp) =>dispatch(setProducts(resp.docs.map(item => ({ id: item.id, ...item.data() })))))
            .catch((err) => console.log(err))
            .finally(() => console.log('fin'));
    }
}

export const setProducts = (products) => ({
    type: types.SET_PRODUCTS,
    payload: products
})

export const getProductById = (idProduct) => {
    return async (dispatch) => {
        const querydb = getFirestore();
        const queryProduct = doc(querydb, 'productos',idProduct);
        await getDoc(queryProduct)
            .then((resp) =>dispatch(setProductbyId({ id: resp.id, ...resp.data() })))
            .catch((err) => console.log(err))
            .finally(() => console.log('fin'));
    }
}

export const setProductbyId = (product) => ({
    type: types.SET_PRODUCT,
    payload: product
})