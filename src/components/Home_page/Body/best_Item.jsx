import React from 'react';
import { useEffect, useState } from 'react/cjs/react.production.min';
import { useCart } from 'react-use-cart';

const input_enabler2 = (qty) => {
  return(qty < 1 ? <p></p> : <span><input className="bg-dark text-white" placeholder='Qty' maxLength="1" max={qty} min="1"
             required type="number"></input></span>)
}

const checker2 = (Qty) => {

  if (Qty > 0 && Qty <= 3) {
    return (`${Qty} left...`)
  } else if (Qty <= 1) {
    return(<p className='text-danger fw-bold'>Out of stock !</p>)
  } else {
    return <div className='text-success'>In stock...</div>;
  }
}

const return_dropdown = () => {
  return (<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Wear type -
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" id="Shirt">Shirt</a></li>
    <li><a class="dropdown-item" id="coat">Coat</a></li>
    
  </ul>
</div>);
}

export const Best_item = (props) => {
  

  
  const btn_enabler2 = (qty) => {
    return(qty < 1 ? <p></p> : <button onClick={() => addItem(props.id, props.item)} type="button" className="btn btn-primary">Add to cart</button>)
    }
  const { addItem } = useCart()

  return ( 
      
    
      <div className='col gy-3'>
      <div className="card cards-styles" id="hovering">
      <img src={props.img_src} className="card-img-top bg-secondary" alt="..."></img>
        <div className="card-body">
          <form>
          <h6 className="card-title badge-dark">{`${props.teamname}\n`}: {props.description}</h6>
          
            <div>{checker2(props.Qty_available)} <div className="fw-bold">Price: K{props.price}</div></div>{input_enabler2(props.Qty_available)} {btn_enabler2(props.Qty_available)}
          </form>
        </div>
      </div>
      </div>
   
      
    );
};