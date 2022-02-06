import React, { Component } from 'react';
import { Best_item } from './best_Item';
import { Main_item } from './Main_item';
import KitsDataService from "../../fetch_kit_data"
import { useEffect, useState } from 'react';


const Items = (props) => {

  const [kits, setkits] = useState([]);
  const [searchteamName, setSearchteamName ] = useState("");

  useEffect(() => {
    retrievekits();
  }, []);

  const onChangeSearchName = e => {
    const searchteamName = e.target.value;
    setSearchteamName(searchteamName);
  };

  const findByName = () => {
    find(searchteamName, "teamname")
  };

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

  const find = (query, by) => {
    KitsDataService.find(query, by)
      .then(response => {
        console.log(response.data);
        setkits(response.data.kits);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrievekits();
  };

  return (
    <div>
      
      <div className='container'>
        
          <form className="d-flex">
          <input className="form-control me-2 bg-dark text-white" type="text"
            value={searchteamName} onChange={onChangeSearchName} placeholder="Search by team name..."></input>
          
          <button className="btn btn-outline-light bg-dark" type="button" onClick={findByName}>Search</button>
        </form>
        
      </div>

    <div className='container bg-secondary mt-3'>
      <div className='row text-center pb-5'>
      <header className='badge badge-warning'>Other kits available</header>
      
          {kits.map((kit, counter = 0) => {
             counter++
          return (
            <Main_item key={kit._id} id={kit._id} img={kit.url} />
          );
        })}
      
      </div>
      </div>
     
    </div>

     
  );


}

export default Items;
