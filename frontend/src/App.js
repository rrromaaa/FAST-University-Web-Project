
import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Publish from './screens/publish'
import CheckOut from './screens/CheckOutScreen';

////
import Navbar from "./components/Navbar";
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
import Login from './screens/login';
import Register from './screens/register';
////
function App() {
  const [sideToggle, setSideToggle] = useState(false);
  const [user,setLoginUser] = useState({})
  return (
    <Router>
     <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

    <Switch>
        <Route exact path="/">
          {
            user && user._id ? <HomeScreen setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>
          }</Route>
        <Route exact path="/product/:id" component={ProductScreen} />
        <Route exact path="/cart"><CartScreen/></Route> 
        <Route exact path="/register"><Register/></Route>
        <Route exact path="/login"><Login setLoginUser={setLoginUser}/></Route>
        <Route exact path="/publish"><Publish/></Route>
        <Route exact path="/CheckOutScreen"><CheckOut/></Route>
    </Switch>
  </Router>
  );
}

export default App;
