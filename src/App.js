import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React, { useState, useEffect } from 'react';
import { Component } from 'react/cjs/react.production.min';
import  NavBar  from "./components/Navbar/navbar"
import react from 'react';
import Cart from './components/Shopping_cart/shopping_cart';
import Home_page from './components/Home_page/Home_page';
import { MemoryRouter, Route, Router, Routes } from 'react-router-dom';
import Other_wear from './components/other-wear/other-wear';

function App(){

  return(
      <div>
      <NavBar/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/" component={Home_page}/>
      < Route exact path="/other-wear" component={Other_wear}/>
      </div>
    );
}



export default App;
