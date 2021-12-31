import * as actionTypes from "../constants/cartConstants"; //TO ACCESS ALL THE VARIBLES RELATED TO CART FROM CARTCONSTANTS FILE

export const cartReducer = (state = {cartItems:[]}, action) => 
{
    switch (action.type) {
      case actionTypes.ADD_TO_CART:
        const item = action.payload; // SELECTED ITEM KO ITEM WALEY VARIABE MA DAL DIA
  
        const existItem = state.cartItems.find((x) => x.product === item.product);  //YE CHECK KRY GA K JO ITEM SELECT KI AH WO PEHLEY SE CART MA TO NI HA
   
        if (existItem) { //AGR MIL JATI HA ITEM CART MA TO KUCH KR DO US K SATH
          return {
            ...state,
            cartItems: state.cartItems.map((x) =>
              x.product === existItem.product ? item : x
            ),
          };
        } else {
          return { //AGR NI MILTI TO SIMPLY CART MA ADD KR DO ITEM 
            ...state,
            cartItems: [...state.cartItems, item],
          };
        }
      case actionTypes.REMOVE_FROM_CART:
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.product !== action.payload),
        };
      default:
        return state;
    }
  };