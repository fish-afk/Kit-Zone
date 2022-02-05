import React, { Component } from 'react';
import { Best_item } from './best_Item';
import { Main_item } from './Main_item';
<<<<<<< HEAD
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
=======

export default class Items extends Component {
  
  constructor() {
    super()

    this.selected_data = []
  }

  state = {
    Promo_kits: [
            {id : 1, img_src: "something", price: 0 , Qty_available:3 , Qty_selected: 0, name: "barca", color: "something"},
            {id : 2, img_src: "something", price: 0 , Qty_available:6 , Qty_selected: 0, name: "something", color: "something"},
            {id : 3, img_src: "something", price: 0 , Qty_available:0 , Qty_selected: 0, name: "something", color: "something"},
            {id : 4, img_src: "something", price: 0 , Qty_available:0 , Qty_selected: 0, name: "something", color: "something"}
    ],
    
    Other_kits: [

            {id : 5, img_src: "https://www.minejerseys.ru/html/upload/temp_img/202107/64714/01627020753e377e22ena.jpg", price: 0 , Qty_available:1 , Qty_selected: 0, name: "something", color: "something"},
            {id : 6, img_src: "https://www.minejerseys.ru/html/upload/temp_img/202107/64714/01627020753e377e22ena.jpg", price: 0 , Qty_available:0 , Qty_selected: 0, name: "something", color: "something"},
            {id : 7, img_src: "https://www.minejerseys.ru/html/upload/temp_img/202107/64714/01627020753e377e22ena.jpg", price: 0 , Qty_available:0 , Qty_selected: 0, name: "something", color: "something"},
            {id: 8, img_src:  "https://www.minejerseys.ru/html/upload/temp_img/202107/64714/01627020753e377e22ena.jpg", price: 0, Qty_available: 0, Qty_selected: 0, name: "something", color: "something"}
    ]
  }

  
  handleAddBest = (kitId) => {


    console.log("event handler called on KitdId:", kitId);

    let selected_kit = this.state.Promo_kits.filter(c => c.id == kitId);
    this.selected_data.push(selected_kit)


  }

  return_data() {
    return this.selected_data;
  }

  handleAdd = (kitId) => {


    console.log("event handler called on KitId:", kitId);
  }

  render() {
    return (
      <React.Fragment>
        
   
    <div className='container bg-danger'>
      <div className='row text-center pb-5'>
      <header className='badge badge-warning'>Hot deals, limited time offers!!!</header>
      
          {this.state.Promo_kits.map(kit => (<Best_item key={kit.id} id={kit.id} img_src={kit.img_src}
        price={kit.price} Qty_available={kit.Qty_available} Qty_selected={kit.Qty_selected}
        name={kit.name} color={kit.color} onAddedBest={this.handleAddBest}
      />))}
      
        </div>
      </div>

      <div className='container bg-dark mt-3'>
      <div className='row text-center pb-5'>
      <header className='badge badge-warning'>Other kits available</header>
      
          {this.state.Other_kits.map(kit => (<Main_item key={kit.id} id={kit.id} img_src={kit.img_src}
        price={kit.price} Qty_available={kit.Qty_available} Qty_selected={kit.Qty_selected}
        name={kit.name} color={kit.color} onAdded={this.handleAdd}
      />))}
          </div>
          
          <div className='row text-center pb-5'>
      
      
          {this.state.Other_kits.map(kit => (<Main_item key={kit.id} id={kit.id} img_src={kit.img_src}
        price={kit.price} Qty_available={kit.Qty_available} Qty_selected={kit.Qty_selected}
        name={kit.name} color={kit.color} onAdded={this.handleAdd}
      />))}
          </div>
          
          <div className='row text-center pb-5'>
      
      
          {this.state.Other_kits.map(kit => (<Main_item key={kit.id} id={kit.id} img_src={kit.img_src}
        price={kit.price} Qty_available={kit.Qty_available} Qty_selected={kit.Qty_selected}
        name={kit.name} color={kit.color} onAdded={this.handleAdd}
      />))}
          </div>
          

      </div>
      
  
    </React.Fragment>
    
    );
  }
}
>>>>>>> badd5fb6a704b33b9db105556194ce4256384025
