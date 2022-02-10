import React, { Component } from 'react';
import { Best_item } from './best_Item';
import { Main_item } from './Main_item';
import KitsDataService from "../../fetch_kit_data";
import { useEffect, useState } from 'react';


const Items = (props) => {

  const [soccer_kits, set_soccer_kits] = useState([]);
  const [F1_kits, set_F1_kits] = useState([]);
  const [BALR_kits, set_Balr_kits] = useState([]);
  const [searchteamName, setSearchteamName ] = useState("");

  useEffect(() => {
    refreshList();
  }, []);

  const onChangeSearchName = e => {
    const searchteamName = e.target.value;
    setSearchteamName(searchteamName);
  };

  const findByName = () => {
    find(searchteamName, "teamname")
  };

  const retrieve_soccer_kits = () => {
    KitsDataService.getAllkits_for_a_specific_collection("other_kits")
      .then(response => {
        console.log(response.data);
        set_soccer_kits(response.data.kits);
        
        
      }).then(
        console.log(soccer_kits)
      )
      .catch(error => {
        console.log(error);
        throw error;
      });
  };

  const retrieve_f1_kits = () => {
    KitsDataService.getAllkits_for_a_specific_collection("F1_kits")
      .then(response => {
        console.log(response.data);
        set_F1_kits(response.data.kits);
        
        
      }).then(
        console.log(F1_kits)
      )
      .catch(error => {
        console.log(error);
        throw error;
      });
  };

  const retrieve_balr_kits = () => {
    KitsDataService.getAllkits_for_a_specific_collection("balr_kits")
      .then(response => {
        console.log(response.data);
        set_Balr_kits(response.data.kits);
        
      }).then(
        console.log(BALR_kits)
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
        if(response.data.collection_name == "other_kits"){
          set_soccer_kits(response.data.kits);
        }else if(response.data.collection_name == "F1_kits"){
          set_F1_kits(response.data.kits);
        }else if(response.data.collection_name == "balr_kits"){
          set_Balr_kits(response.data.kits);
        }
        
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieve_soccer_kits();
     retrieve_f1_kits();
     retrieve_balr_kits();
  };

  return (
    <React.Fragment>
      
      <div className='container'>
        
          <form className="d-flex">
          <input className="form-control me-2 bg-dark text-white" type="text" id="searcher"
            value={searchteamName} onChange={onChangeSearchName} placeholder="Search by team name..."></input>
          
          <button className="btn btn-outline-light bg-dark" type="button" onClick={findByName}>Search</button>
        </form>
        
      </div>

       

      <div className='container bg-dark banners mt-3 kit-place'>
      <div className='row text-center pb-5 inner-div'>
      <header className='badge badge-warning'>Soccer kits available</header>
      
      
             
      {soccer_kits.map(kit => 
            <Main_item key={kit._id} name={kit.name} id={kit._id} img_src={kit.img_src} Qty_available={kit.qty} 
            description={kit.description} price={kit.price} teamname={kit.teamname}/>
          )}
      

      </div>
      </div>
     
    </React.Fragment>

     
  );


}

export default Items;


