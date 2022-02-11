import React, { Component } from 'react';
import Modal from './modal';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useCart } from 'react-use-cart';

export default function Navbar(){  

  const go_to_home = () => {
    document.getElementById("Homes").click();
  }
  
  const {items} = useCart();
    
    return(
        <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand ml-3" id="Brand">Kit-Zone </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className="navbar-toggler-icon outline-white"></span>
          </button>
          <div className="navbar-collapse collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              
              <li className="nav-item">
              <Link to="/" type="button" className="nav-link specials px-3 active-link" id="Homes">Home</Link>
              </li>

              <li className="nav-item">
              <Link to="/other-wear" type="button" className="nav-link specials px-3 active-link" id="Homes">Other-wears</Link>
              </li>

              <li className="nav-item" data-bs-toggle="modal" data-bs-target="#email">
                <a className="nav-link specials px-3" id="emailing" type="button" data-bs-toggle="modal" data-bs-target="#email">Email-us</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link specials px-3" onClick={go_to_home} href="#socials-area">Socials</a>
              </li>

              <Link to="/cart" type="button" className="nav-link specials px-3">

              <button type="button" className="btn btn-secondary position-relative">
                  Go to Cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                     
                    <span className="visually-hidden">{items.length}</span>
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
