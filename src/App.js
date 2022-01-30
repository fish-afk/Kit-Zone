import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React, { useState, useEffect } from 'react';
import { Component } from 'react/cjs/react.production.min';
import  NavBar  from "./components/navbar"
import react from 'react';
import Cart from './components/shopping_page';
import { MemoryRouter, Route, Router, Routes } from 'react-router-dom';

function App(){

  return(
      <div>
      <NavBar/>
      <Route exact path="/cart" component={Cart}/>
      </div>
    );
}



export default App;
