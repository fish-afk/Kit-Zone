import React, { Component } from 'react';
import Searching_area from './search';
import Modal from './modal';

export default class NavBar extends Component{
    render() {
        return(
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
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item" data-bs-toggle="modal" data-bs-target="#email">
                    <a className="nav-link" type="button" data-bs-toggle="modal" data-bs-target="#email">Email-us</a>
                    
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Go to cart	&#x1f6d2;</a>
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
        );
        }
}
