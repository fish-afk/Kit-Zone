import React, { Component } from 'react';
import { Best_item } from './best_Item';
import { Main_item } from './Main_item';

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

      <div className='container bg-secondary mt-3'>
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
