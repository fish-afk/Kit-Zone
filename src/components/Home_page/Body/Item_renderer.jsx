import React from 'react';
import { Best_item } from './best_Item';
import { Main_item } from './Main_item';
import KitsDataService from "../../fetch_kit_data";
import { useEffect, useState } from 'react';
import Loading from '../../other-wear/loading_profiles';
import Skeleton, {SkeletonTheme } from 'react-loading-skeleton'

const Items = (props) => {

  const [soccer_kits, set_soccer_kits] = useState([]);
  const [F1_kits, set_F1_kits] = useState([]);
  const [searchteamName, setSearchteamName ] = useState("");
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    
    refreshList();
  },[]);

  const onChangeSearchName = e => {
    const searchteamName = e.target.value;
    setSearchteamName(String(searchteamName).toLowerCase());
  };

  const findByName = () => {
    setisLoading(true)
    find(searchteamName.toLowerCase(), "teamname")
    setisLoading(false)
  };

  const clear = () => {
    document.getElementById("searcher").value = "";
    find("", "teamname")
  };

  const retrieve_soccer_kits = async () => {
    setisLoading(true)
    await KitsDataService.getAllkits_for_a_specific_collection("other_kits")
      .then(response => {
        console.log(response.data);
        set_soccer_kits(response.data.kits);
    setisLoading(false);
        
      }).then(
        console.log(soccer_kits)
      )
      .catch(error => {
        console.log(error);
        throw error;
      });
  };

  const retrieve_f1_kits = async () => {
    await KitsDataService.getAllkits_for_a_specific_collection("F1_kits")
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

  

  const find = (query, by) => {
    KitsDataService.find(query, by)
      .then(response => {
        console.log(response.data);
        set_soccer_kits(response.data.kits);
        
        
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieve_soccer_kits();
     retrieve_f1_kits();
     
  };

  const searcher = () => {
    if(soccer_kits.length == 0 || F1_kits.length == 0){
     return(<div className='container text-white fs-1 fw-bold'><img alt="no results" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQpJnnPzhDYwOTr9S8quxVfMhbjcWiD9Haw&usqp=CAU"></img>
     <h1>No search results found</h1></div>);
    }else{
        return(soccer_kits.map(kit => (
          <Main_item key={kit._id} name={kit.name} id={kit._id} img_src={kit.img_src} Qty_available={kit.qty} 
          description={kit.description} price={kit.price} teamname={kit.teamname} item={kit}/>
    )));
    }
    }

 let loading_Profiles = [];

  for(let i = 0; i < 8 ; i++){
    loading_Profiles.push(<SkeletonTheme animation="wave" baseColor="#657595" highlightColor="#ddd"><Skeleton amount={1} height={200} key={i} id={i}/>
    <Skeleton /><Skeleton /> <Skeleton />
   </SkeletonTheme>)
  }

  if(isLoading === true){
    return(
      <React.Fragment>
      <div className='container bg-dark banners mt-3 kit-place'>
      <div className='row text-center pb-5 inner-div'>
      <header className='badge badge-warning'>soccer kits available</header>
      
      {loading_Profiles.map((profile,index) => <Loading item={profile} key={index}/>)}
    
      </div>
      </div>


    <div className='container bg-dark banners mt-3 kit-place'>
    <div className='row text-center pb-5 inner-div'>
    <header className='badge badge-warning'>F1 kits available</header>
    
    {loading_Profiles.map((profile,index) => <Loading item={profile} key={index}/>)}
  
    </div>
    </div>
    </React.Fragment>
 
    )
  }

  

  return (
    <React.Fragment>
      
      <div className='container mt-2'>
        
          <form className="d-flex">
          <input className="form-control me-2 bg-dark text-white" type="text" id="searcher"
            value={searchteamName} onChange={onChangeSearchName} placeholder="Search by team name..."></input>
          
          <button className="btn btn-outline-light bg-dark" type="button" onClick={findByName}>Search</button>
          <button className="btn btn-outline-light bg-dark" type="button" onClick={clear}>Reset</button>
        </form>
        
      </div>

       

      <div id="sc-kits" className='container bg-dark banners mt-3 kit-place'>
      <div className='row text-center pb-5 inner-div'>
      <header className='badge badge-warning'>Soccer kits available</header>
      
      
             
      {searcher()}
      

      </div>
      </div>

      <div className='container bg-danger banners mt-3 kit-place'>
      <div className='row text-center pb-5 inner-div'>
      <header className='badge badge-warning'>Formula 1 kits available</header>
      
      
             
      {F1_kits.map(kit => 
            <Best_item key={kit._id} name={kit.name} id={kit._id} img_src={kit.img_src} Qty_available={kit.qty} 
            description={kit.description} price={kit.price} item={kit} teamname={kit.teamname}/>
          )}
      

      </div>
      </div>
     
    </React.Fragment>

     
  );


}

export default Items;


