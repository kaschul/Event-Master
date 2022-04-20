//reducers are special funtions that read and write data in to a redux store. The parameters it takes includes current state and action(type of keyword). 
import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from '../constants/productConstants'

//funtion called productListReducer.Its task is to retrieve the list of products form the DB.
export const productListReducer = (state = {products: []}, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }               /* products (plural) because all products */
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload
            }
        default: 
            return state     //refers to initial state product: []//
    }
}

export const productDetailsReducer = (
    state = { product: { reviews: [] } }, action
) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state }                                /* '...' SPREAD OPERATOR allows you to copy all or part of an existing array or object into another array or object */ 
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }                /* product (singular) because one product */
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
