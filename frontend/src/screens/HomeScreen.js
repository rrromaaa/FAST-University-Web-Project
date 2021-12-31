import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Bootstrap} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
//component
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions"; //GET PRODUCTS WALA FUNCTION 


const HomeScreen = ({setLoginUser}) => {
  const dispatch = useDispatch();
  const getProducts = useSelector(state => state.getProducts);  
  const { products,loading,error} = getProducts;  //ARRAY MA FIL KR DO

  useEffect(()=>{
     dispatch(listProducts())
  },[dispatch]);
  

  return (
    
    <div className="homescreen">
      <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://orion-uploads.openroadmedia.com/xl_c67a651d012c-most-popular-books.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Books from all around the world!</h3>
      <p>Find your favourites all in one place!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://keydifferences.com/wp-content/uploads/2019/12/novel-vs-book.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>International Bestsellers!</h3>
      <p>Get the best-selling and high-quality prints!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.wired.com/photos/5955c3573ff99d6b3a1d165c/master/pass/books.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Find your latest course books at Collectenea!</h3>
      <p>Collectanea provides only the best!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>





     
      <h2 className="homescreen__title">Latest Products</h2>
      <Button variant="secondary" style={{backgroundColor: 'Black',color: 'White'}} size="sm" onClick={() => setLoginUser({})}>
      Log Out
    </Button>
     
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (  //COMPONENTS MA SE PRODUCT.JS WALI FILE MA SE SARI CHEEZEN LI OR IS MA FIX KR DI
            <Product
              key={product._id}   
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;