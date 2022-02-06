import React, { Component } from 'react';
import { Best_item } from './best_Item';
import { Main_item } from './Main_item';
import KitsDataService from "../../fetch_kit_data"
import { useEffect, useState } from 'react';


const Items = (props) => {

  const [kits, setkits] = useState([]);

  useEffect(() => {
    retrievekits();
  }, []);


  const retrievekits = () => {
    KitsDataService.getAll()
      .then(response => {
        console.log(response.data);
        setkits(response.data.kits);
        
        
      }).then(
        console.log(kits)
      )
      .catch(error => {
        console.log(error);
        throw error;
      });
  };

  const refreshList = () => {
    retrievekits();
  };

  return (
    <div>
      <div className='container'>
          <form className="d-flex">
          <input className="form-control me-2 bg-dark text-white" type="search" placeholder="Search by team name..." aria-label="Search" id="seaching_field"></input>
          <button className="btn btn-outline-light bg-dark" type="submit">Search</button>
             </form>
          </div>
    <Best_item>{console.log(kits)}</Best_item>
    </div>

     
  );


}

export default Items;
