import axios from 'axios'
const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } = require("../constants/productConstants")
const listProducts = () => (dispatch) => {
    try{
            
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const { data } = axios.get('/api/products')
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
    }
    catch(error){
        dispatch({ type:PRODUCT_LIST_FAIL , payload: error.message })
    }
    
}

export { listProducts }