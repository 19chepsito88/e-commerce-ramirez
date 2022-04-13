import { types } from "../types/types";
import { addDoc, collection, doc, documentId, getDoc, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'

export const getproducts = () => {
    return async (dispatch) => {
        const querydb = getFirestore();
        const queryProductos = collection(querydb, 'productos');
        await getDocs(queryProductos)
            .then((resp) => dispatch(setProducts(resp.docs.map(item => ({ id: item.id, ...item.data() })))))
            .catch((err) => console.log(err))
            .finally(() => console.log('fin'));
    }
}

export const getProductFilter = (category) => {
    return async (dispatch) => {
        const querydb = getFirestore();
        const queryProductos = collection(querydb, 'productos');
        const queryFilter = query(queryProductos,
            where('category', '==', category)

        )
        await getDocs(queryFilter)
            .then((resp) => dispatch(setProducts(resp.docs.map(item => ({ id: item.id, ...item.data() })))))
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
        const queryProduct = doc(querydb, 'productos', idProduct);
        await getDoc(queryProduct)
            .then((resp) => dispatch(setProductbyId({ id: resp.id, ...resp.data() })))
            .catch((err) => console.log(err))
            .finally(() => console.log('fin'));
    }
}

export const setProductbyId = (product) => ({
    type: types.SET_PRODUCT,
    payload: product
})

export const insertOrders = (orden, cartList) => {
    return async (dispatch) => {
        const db = getFirestore();
        const queryCollection = collection(db, "orders");
        await addDoc(queryCollection, orden)
            .then(({ id }) => dispatch(setSuccessOrder(id)));

        const queryCollectionStock = collection(db, "productos");
        const queryActualizarStock = await query(
            queryCollectionStock,
            where(
                documentId(),
                "in",
                cartList.map((it) => it.id)
            )
        );
        const batch = writeBatch(db);
        await getDocs(queryActualizarStock)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
            })))
            .finally(() => console.log('actulizado'))
        batch.commit();
    }
}

export const setSuccessOrder = (idOrden) => ({
    type: types.SET_ORDEN,
    payload: idOrden
})

export const setCartList=(list)=>({
    type: types.SET_CART_LIST,
    payload: list
})