import "./CheckOutScreen.css" 
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import CartItem from "../components/CartItem";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CheckOut = () => {

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
  
    useEffect(() => {}, []);
  
    const qtyChangeHandler = (id, qty) => {  //CART MA QUANTITY SELECT KRNEY WALA OPTION
      dispatch(addToCart(id, qty));
    };
  
    const removeFromCartHandler = (id) => {  //CART MA SE REMOVE WALA BUTTON
      dispatch(removeFromCart(id));
    };
  
    const getCartSubTotal = () => {  //TOTAL CALCULATION
      return cartItems
        .reduce((price, item) => price + item.price * item.qty, 0)
        .toFixed(2);
    };
    const getShipping = () => {  //TOTAL CALCULATION
        return cartItems
          .reduce((price, item) =>  price + item.price * item.qty, 0)
          .toFixed(2);
      };
    function OrderPlaced ()  {
      
      var email = document.getElementById("email").value
      var name = document.getElementById("name").value
      var Number = document.getElementById("Number").value
      var address = document.getElementById("address").value
      var zip = document.getElementById("zip").value
      if(email && name && Number && address && zip)
      {
        alert("Order Placed")
        window.open('mailto:hassan.ibnetariq06@gmail.com');
      }
      else{
        alert("All fields not filled")
      }
      return
    }
return (
    <div className="CheckOut">  
    <div class="container">
    <div class="card">
        <div class="payment-details">
            <h3>Order Checkout</h3>
            <p>Complete your purchase by providing your Personal details.</p>
        </div>
        <div class="input-text"> <input type="text" name="email" id="email" placeholder="luke@skywalker.com"/> <span>Email</span> </div>
        <div class="input-text"> <input type="text" name="name" id="name" placeholder="luke skywalker" /> <span>Full Name</span> </div>
        
        <div class="input-text"> <input type="text" name="Number" id="Number" placeholder="phone"/> <span>Phone Number</span> </div>
        <div class="billing"> <span>Billing Address</span>
        <input type="text" name="address" id="address" placeholder="star wars, street no. X" /> 
            <div class="zip-state">
                <div class="zip"> <input type="text" name="zip" id="zip" placeholder="ZIP"/> </div>
                <div class="state"> <select>
                        <option>Select City</option>
                <option>Lahore </option>
                <option>Faisalabad</option>
                <option>Karachi</option>
                <option>Peshawar</option>
                <option>Sargodha</option>
                <option>Chiniot</option>
                <option>Bahawalpur</option>
                <option>Multan</option>
                <option>Quetta</option>
                    </select> </div>
            </div>
        </div>
        
        <div class="summary">
        {cartItems.length === 0 ? (
            <div>
              <h1>Please fill cart before checkout!</h1>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
            <div class="text-data">
            <br></br>
                <p>Subtotal</p><br></br>
                <p>Shipping</p><br></br>
                <h5>Order Total</h5><br></br>
            </div>
            <div class="numerical-data">
            <br></br>
             <p>Rs.{getCartSubTotal()}</p><br></br>
            <p>Rs.0</p><br></br>
             <h5>Rs.{getShipping()}</h5><br></br>
            </div>
        </div>
        <div class="pay"> <button onClick={OrderPlaced}>Confirm Order</button> </div>
        <div class="secure"> <i class="fa fa-lock"></i>
            <p> Payments via Cash On Delivery</p>
        </div>
        <div class="last">
            <p>Powered by Team Welp</p> <a href="www.primevideo.com"> Terms </a> <a href="www.primevideo.com"> Privacy </a>
        </div>
    </div>
</div>       
    </div>
    
    )
}
export default CheckOut