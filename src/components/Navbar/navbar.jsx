import React, { Component } from 'react';
import Searching_area from './search';
import Modal from './modal';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default class NavBar extends Component{  

  
  render() {
    
    return(
        <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand ml-3" id="Brand">Kit-Zone	&#9917;</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
              <Link to="/" type="button" className="nav-link specials px-3">Home</Link>
              </li>
              <li className="nav-item" data-bs-toggle="modal" data-bs-target="#email">
                <a className="nav-link specials px-3" id="emailing" type="button" data-bs-toggle="modal" data-bs-target="#email">Email-us</a>
              </li>
              <li className="nav-item">
              <Link to="/cart" type="button" className="nav-link specials px-3">Go to cart	&#x1f6d2;</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link specials px-3" href="#socials-area">Socials</a>
              </li>
            </ul>
            <Searching_area/>
          </div>

        </div>
      </nav>

      <Modal/> 
      </div>
    
    
    );
    }
}
