import React, { Component } from 'react';
<<<<<<< HEAD
=======
import Searching_area from './search';
>>>>>>> badd5fb6a704b33b9db105556194ce4256384025
import Modal from './modal';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Item from '../Shopping_cart/Item';

<<<<<<< HEAD
localStorage.setItem("count", "0");

=======
>>>>>>> badd5fb6a704b33b9db105556194ce4256384025
export default class NavBar extends Component{  

  go_to_home(){
    document.getElementById("Homes").click();
  }
<<<<<<< HEAD
=======

>>>>>>> badd5fb6a704b33b9db105556194ce4256384025
  
  render() {
    
    return(
        <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand ml-3" id="Brand">Kit-Zone	&#9917;</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
<<<<<<< HEAD
            <span className="navbar-toggler-icon outline-white"></span>
=======
            <span className="navbar-toggler-icon"></span>
>>>>>>> badd5fb6a704b33b9db105556194ce4256384025
          </button>
          <div className="navbar-collapse collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
<<<<<<< HEAD
              <Link to="/" type="button" className="nav-link specials px-3 active-link" id="Homes">Home</Link>
=======
              <Link to="/" type="button" className="nav-link specials px-3" id="Homes">Home</Link>
>>>>>>> badd5fb6a704b33b9db105556194ce4256384025
              </li>
              <li className="nav-item" data-bs-toggle="modal" data-bs-target="#email">
                <a className="nav-link specials px-3" id="emailing" type="button" data-bs-toggle="modal" data-bs-target="#email">Email-us</a>
              </li>
              <li className="nav-item">
              
              </li>
              <li className="nav-item">
                <a className="nav-link specials px-3" onClick={this.go_to_home} href="#socials-area">Socials</a>
              </li>

              <Link to="/cart" type="button" className="nav-link specials px-3">

<<<<<<< HEAD
              <button onClick={this.increment_item_count} type="button" className="btn btn-secondary position-relative">
                  Go to Cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {localStorage.getItem("count")}
=======
              <button type="button" className="btn btn-secondary position-relative">
                  Go to Cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {Item}
>>>>>>> badd5fb6a704b33b9db105556194ce4256384025
                    <span className="visually-hidden">Cart items</span>
                  </span>
              </button>

              </Link>
              
            </ul>
<<<<<<< HEAD
           
=======
            <Searching_area/>
>>>>>>> badd5fb6a704b33b9db105556194ce4256384025
          </div>
          
        </div>
        
      </nav>

      <Modal/> 
      </div>
    
    
    );
    }
}
