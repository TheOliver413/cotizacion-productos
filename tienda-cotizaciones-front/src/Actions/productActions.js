import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/api/v1/product');
    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_PRODUCTS_FAILURE', payload: error.message });
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/product', product);

    dispatch({ type: 'CREATE_PRODUCT_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'CREATE_PRODUCT_FAILURE', payload: error.message });
  }
};