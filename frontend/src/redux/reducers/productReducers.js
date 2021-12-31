import * as actionTypes from "../constants/productConstants";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {  //JO BHI ACTION HO RAHA HA
    case actionTypes.GET_PRODUCTS_REQUEST:  //AGR PRODUCTS KI REQUEST BHEHI HA
      return {
        loading: true,  //LOADING START 
        products: [],   //KOI PRODUCT SHOW NI HO GI
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:  // AGR PRODUCTS MIL GAI HN SUCCESSFULLY
      return {
        loading: false, //LOADING BAND 
        products: action.payload, //BACK END SE CHEZEN RECEIVE HON GI OR WO PRODUCTS MA FILL KR DY GA 
      };
    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,  //AGR NI LOAD HOTI TO ERROR DY DO
      };
    default:
      return state;
  }
};

//ALMOST SAME WORKING AS ABOVE
export const getProductDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
      case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
        return {
          loading: true,
        };
      case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
        return {
          loading: false,
          product: action.payload,
        };
      case actionTypes.GET_PRODUCT_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case actionTypes.GET_PRODUCT_DETAILS_RESET:
        return {
          product: {},
        };
      default:
        return state;
    }
  };