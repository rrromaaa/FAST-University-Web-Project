import './Navbar.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = ({click}) => {

const cart = useSelector(state=> state.cart);
const{cartItems}=cart;

const getCartCount=()=>{  //NAVBAR MA JO CART BANI HA US MA NUMBER CHANGE KRNEY K LIA
  return cartItems.reduce((qty,item)=>qty+Number(item.qty) ,0);
}

    return (
        <nav className="navbar">
        <div className="navbar__logo">
          <h2>COLLECTENEA</h2>
        </div>
  
        <ul className="navbar__links">
          <li>
            <Link to="/publish"> publish</Link>
          </li>
          <li>
            <Link to="/register"> register</Link>
          </li>
          <li>
            <Link to="/cart" className="cart__link">
              <i className="fas fa-shopping-cart"></i>
              <span>
                Cart <span className="cartlogo__badge">{getCartCount()}</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/">Shop</Link>
          </li>
        </ul>
  
        <div className="hamburger__menu" onClick={click}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    )
}

export default Navbar

