import React, { Component } from 'react';

export default class Searching_area extends Component{

    render(){
        return(
            <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="seaching_field"></input>
          <button className="btn btn-outline-light" type="submit">Search</button>
             </form>
        );
    }
};
