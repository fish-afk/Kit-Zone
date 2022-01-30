import React, { Component } from 'react';
import Searching_area from './search';
import Modal from './modal';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Cart from "./cart"

export default class NavBar extends Component{
    render() {
        return(
          <Router>
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Kit-Zone</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="./public/index.html">Home</a>
                  </li>
                  <li className="nav-item" data-bs-toggle="modal" data-bs-target="#email">
                    <a className="nav-link" type="button" data-bs-toggle="modal" data-bs-target="#email">Email-us</a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/cart">Go to cart	&#x1f6d2;</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Socials</a>
                  </li>
                </ul>
                <Searching_area/>
              </div>

            </div>
          </nav>

          <Modal/> 
          </div>
        
        </Router>
        );
        }
}
