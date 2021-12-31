import * as actionTypes from "../constants/cartConstants"; //TO ACCESS ALL THE VARIBLES RELATED TO CART FROM CARTCONSTANTS FILE
import axios from "axios";
export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`); //BACKEND MA ROUTES MA PRODUCTS ROUTES MA API REQUEST BHEJEY GA PRODUCTS LENEY K LIA
  
    dispatch({ //CHEEZ UTHA K DATABASE MA SE DISPATCH KR DO
      type: actionTypes.ADD_TO_CART,
      payload: { 
        product: data._id,
        name: data.name,
        imageUrl: data.imageUrl,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });
  
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
  };
  export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      payload: id,
    });
  
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
  };