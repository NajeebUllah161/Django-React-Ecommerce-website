import axios from 'axios'
import {
    PRODUCTS_LIST_REQUEST,
    PRODUCTS_LIST_SUCCESS,
    PRODUCTS_LIST_FAILURE,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAILURE,
} from '../constants/productConstants'


export const listProducts = () => async (dispatch) => {

    try {

        dispatch({
            type: PRODUCTS_LIST_REQUEST
        })
        const { data } = await axios.get('/api/products/')

        dispatch({
            type: PRODUCTS_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCTS_LIST_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }

}


export const listProductDetails = (id) => async (dispatch) => {

    try {

        dispatch({
            type: PRODUCT_DETAILS_REQUEST
        })
        const { data } = await axios.get(`/api/products/${id}`)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }

}