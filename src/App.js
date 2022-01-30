import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React, { useState, useEffect } from 'react';
import { Component } from 'react/cjs/react.production.min';
import  NavBar  from "./components/navbar"
import react from 'react';



class App extends Component{

  render(){
    return (
      <div>
      <div id="content">
        <NavBar/>
      </div>
      </div>
    );
  }

}



export default App;
