import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//Reducers
import { cartReducer } from "./reducers/cartReducers";
import { getProductDetailsReducer,getProductsReducer } from "./reducers/productReducers";

const reducer = combineReducers({
    cart:cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
});

const middleware =[thunk]

const cartFromLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")):[]
const INITIAL_STATE = {  //YE AGR PAGE KO RELOAD BHI KR DO YA DUBARA CHALA DO TB BHI CART MA JO CHEZEN SELECT HON GI WO SELECT HI RAHEN GI
  cart:{
    cartItems:cartFromLocalStorage
  }
}


const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
  );

export default store;