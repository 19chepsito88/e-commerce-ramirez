import { types } from "../types/types";
import { addDoc, collection, doc, documentId, getDoc, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import Swal from "sweetalert2";

export const getproducts = (category) => {
    return async (dispatch) => {
        const querydb = getFirestore();
        const queryProductos = collection(querydb, 'productos');
        const queryFilter = category ?
            query(queryProductos,
                where('category', '==', category)
            ) : queryProductos
        await getDocs(queryFilter)
            .then((resp) => dispatch(setProducts(resp.docs.map(item => ({ id: item.id, ...item.data() })))))
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
        await addDoc(queryCollection, orden).then(({ id }) =>
            Swal.fire({
                title: `Compra Exitosa ${id}`,
                showClass: {
                    popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                },
            })
        );

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
            .then((resp) =>
                resp.docs.forEach((res) =>
                    batch.update(res.ref, {
                        stock:
                            res.data().stock -
                            cartList.find((item) => item.id === res.id).amount,
                    })
                )
            )
            .finally(() => dispatch(removeCart()));
        batch.commit();
    }
}

export const setSuccessOrder = (idOrden) => ({
    type: types.SET_ORDEN,
    payload: idOrden
})

export const addToCart = (list) => ({
    type: types.SET_CART_LIST,
    payload: list
})

export const removeCart = () => ({
    type: types.RESET_CART_LIST,
    payload: {}
})

export const removeItem = (itemId) => ({
    type: types.DELETE_ITE_CART_LIST,
    payload: itemId
})