import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import  NavBar  from "./components/Navbar/navbar"
import react from 'react';
import Cart from './components/Shopping_cart/shopping_cart';
import Home_page from './components/Home_page/Home_page';
import { Route } from 'react-router-dom';
import Other_wear from './components/other-wear/other-wear';
import {CartProvider} from "react-use-cart"
import Custom_kits from "./components/Custom_kits/Final"
import SignInpage from './components/SignInpage';
import Customer_details from "./components/customer_details"
import Pending_orders from "./components/Pending-orders"

function App(){

  return(
      <div>
      <CartProvider>
      <NavBar/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/" component={Home_page}/>
      <Route exact path="/otherwears" component={Other_wear}/>
      <Route exact path="/custom-kits" component={Custom_kits}/>
      <Route exact path="/auths" component={SignInpage}/>
      <Route exact path="/customer-details" component={Customer_details}/>
      <Route exact path="/my-orders" component={Pending_orders}/>
      
      </CartProvider>
      </div>
    );
}



export default App;
