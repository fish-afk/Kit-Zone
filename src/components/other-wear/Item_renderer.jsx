import React, { Component } from 'react';
import Item from './Item';
import KitsDataService from "../fetch_kit_data.js"
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import Loading from './loading_profiles'

const Item_Renderer = (props) => {

  const [BALR_kits, set_Balr_kits] = useState({});
  const [searchcolor, setSearchcolor ] = useState("");
  const [isLoading, Setisloading] = useState(true);

  useEffect(() => {
    refreshList();
  },[]);


  
  const onChangeSearchName = e => {
    const searchcolor = e.target.value;
    setSearchcolor(String(searchcolor).toLowerCase());
  };

  const findByName = () => {
    find(searchcolor, "color")
  };

  const clear = () => {
    find("", "teamname")
  };
 

  const retrieve_balr_kits = async () => {
    Setisloading(true)
    await KitsDataService.getAllkits_for_a_specific_collection("balr_kits")
      .then(response => {
        console.log(response.data);
        set_Balr_kits(response.data.kits);
        Setisloading(false);
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
        
        set_Balr_kits(response.data.kits);
        
        
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
     
     retrieve_balr_kits();
  };

  const searcher = () => {
    if(BALR_kits.length == 0){
     return(<div className='conttainer text-white fs-1 fw-bold'><img alt="no results" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQpJnnPzhDYwOTr9S8quxVfMhbjcWiD9Haw&usqp=CAU"></img>
     <h1>No search results found</h1></div>);
 }else{
     return(BALR_kits.map(kit => (
       <Item key={kit._id} name={kit.name} id={kit._id} img_src={kit.img_src} Qty_available={kit.qty} 
       description={kit.description} price={kit.price} color={kit.color} item={kit}/>
 )));
 }
 }

  let loading_Profiles = [];

  for(let i = 0; i < 8 ; i++){
    loading_Profiles.push(<Skeleton amount={8} height={250} width={200} key={i} id={i}/>)
  }

  if(isLoading === true){
    return(
      <div className='container bg-dark banners mt-3 kit-place'>
      <div className='row text-center pb-5 inner-div'>
      <header className='badge badge-warning'>Balr clothing</header>
      
      {loading_Profiles.map((profile,index) => <Loading item={profile} key={index}/>)}
    
      </div>
      </div>
    )
  }

 

  return (
    <React.Fragment>
      
      <div className='container mt-5'>
        
          <form className="d-flex">
          <input className="form-control me-2 bg-dark text-white" type="text" id="searcher"
            value={searchcolor} onChange={onChangeSearchName} placeholder="Search by color..."></input>
          
          <button className="btn btn-outline-light bg-dark" type="button" onClick={findByName}>Search</button>
          <button className="btn btn-outline-light bg-dark" type="button" onClick={clear}>Reset</button>
        </form>
        
      </div>

       

      <div className='container bg-dark banners mt-3 kit-place'>
      <div className='row text-center pb-5 inner-div'>
      <header className='badge badge-warning'>Balr clothing</header>
      
      {searcher()}
    
      </div>
      </div>

      
     
    </React.Fragment>

     
  );


}

export default Item_Renderer;