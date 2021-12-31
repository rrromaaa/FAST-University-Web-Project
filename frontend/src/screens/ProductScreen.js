import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Actions
import { getProductDetails } from "../redux/actions/productActions"; // DESIRED FUNCTION IPMORT KIA HA
import { addToCart } from "../redux/actions/cartActions";



const ProductScreen = ({ match, history }) => {
 
  const[qty,setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

 useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };

  const ReadBook = () => {
    //USING HTML INSIDE A JS FUNCTION HERE
    window.location.replace("http://localhost/example/books/" + product.file);
    console.log("hit");
  };

  return (

    <div className="productscreen">
      {loading ? <h2>Loading...</h2>:error ? <h2>{error}</h2>:(
        <>
        <div className="productscreen__left">
            <span className="left__image">
              <img 
              src={product.imageUrl} alt={product.name}/>
            </span>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
              
              <button type="button" onClick={ReadBook} style={{backgroundColor: 'Black', color: 'white'}}>
                Read Book
              </button> 
            
              <p>File: {product.file}</p>  
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>${product.price}</span>
              </p>
              <p>
                Status:
                <span>
                 {product.countInStock>0 ?"In stock ":"Out of stock"}
                </span>
              </p>
              <p>
              Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>  
                  {[...Array(product.countInStock).keys()].map((x) => (  //JITNA TOTAL DB MA STOCK PARA HO GA MAX QTY UTNI SELECT HO SAKY GI SIRF
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
     
          
    </div>
 
  );
};

export default ProductScreen;