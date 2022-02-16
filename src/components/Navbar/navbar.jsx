import React, { Component } from 'react';
import Modal from './modal';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useCart } from 'react-use-cart';
import {useEffect, useState} from "react"

export default function Navbar(){  

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const go_to_home = () => {
    document.getElementById("Homes").click();
  }

  const collapse = () => {
    document.getElementById("burger").click();
  }
  
    
    return(
        <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand ml-3" id="Brand">Kit-Zone</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className="navbar-toggler-icon outline-white" id="burger"></span>
          </button>
          <div className="navbar-collapse collapse" id="navmenu">
            <ul className="navbar-nav ms-auto hover-toggle">
              
              <li className="specials" onClick={collapse}>
              <Link to="/" type="button" className="nav-link specials px-3 active-link" id="Homes">Home</Link>
              </li>

              <li className="specials" onClick={collapse}>
              <Link to="/otherwears" type="button" className="nav-link specials px-3 active-link" id="Homes">Other-wears</Link>
              </li>

              <li className="specials" data-bs-toggle="modal" data-bs-target="#email" onClick={collapse}>
                <a className="nav-link specials px-3" id="emailing" type="button" data-bs-toggle="modal" data-bs-target="#email">Email-us</a>
              </li>
              
              <li className="specials" onClick={collapse}>
                <a className="nav-link specials px-3" onClick={go_to_home} href="#socials-area">Socials</a>
              </li>

              <Link to="/cart" type="button" className="nav-link specials px-3">

              <button type="button" className="btn btn-secondary position-relative" onClick={collapse}>
                Go to Cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                     
                    <span>{totalUniqueItems}</span>
                  </span>
              </button>

              </Link>
              
            </ul>
           
          </div>
          
        </div>
        
      </nav>

      <Modal/> 
      </div>
    
    
    );
    
}
