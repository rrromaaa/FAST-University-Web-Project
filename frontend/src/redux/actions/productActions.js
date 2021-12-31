import * as actionTypes from "../constants/productConstants"; //products SE RELATED SAREY VARIABLES
import axios from "axios"; //IDK YE KIA HA

export const getProducts = () => async (dispatch) => {
  try { 
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

    const { data } = await axios.get("/api/products"); // API REQUEST BHEJI ROUTES MA BACKEND PY PRODUCTS K LIA,YE REQUEST ROUTES MA PRODUCT ROUTES MA JATI HA
    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {  //PRO DUCT NI MILTI TO ERROR
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);  //THIS TIME WE WIIL SEND REQUEST WITH AN ID CUZ DETAILS HUMEN KISI SPECIFIC ITEM KI HI CHAHIYEY

    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });
};