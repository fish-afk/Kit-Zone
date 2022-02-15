import React from 'react';
import { useCart } from 'react-use-cart';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


export const Item = (props) => {

  let size_chosen = "s"

  const { addItem } = useCart()

  const checker2 = (Qty) => {
  
    if (Qty > 0 && Qty <= 3) {
      return (`${Qty} left...`)
    } else if (Qty <= 1) {
      return(<p className='text-danger fw-bold'>Out of stock !</p>)
    } else {
      return <div className='text-success'>In stock...</div>;
    }
  }

  const choose_sizes = () => {
    size_chosen = document.getElementById("dropper").value;

  }

  
  const return_qty = () => {
    let item= Object.assign({}, props.item)
    
    item["size_chosen"] = size_chosen;
    item["teamname"] = props.color;
    console.warn(item)
    addItem(item)
  }

  const btn_enabler2 = (qty) => {
  return(qty < 1 ? <p></p> : <button onClick={return_qty} type="button" className="btn btn-primary">Add to cart</button>)
  }
  
  const options = [
    'small', 'Medium', 'Large', 'X-large', 'XX-large'
  ];

  let defaultopt = options[0];

  return ( 
      
    
      <div className='col gy-3'>
      <div className="card cards-styles" id="hovering">
      <img src={props.img_src} className="card-img-top bg-secondary" alt="..."></img>
        <div className="card-body">
          <form>
          <h6 className="card-title badge-dark">{props.name}, {props.color}:<p>{props.description}</p></h6>
          
            <div>{checker2(props.Qty_available)} <div className="fw-bold">Price: K{props.price}</div></div>
            {btn_enabler2(props.Qty_available)}
            <Dropdown id="dropper" className="bg-dark text-white" onChange={choose_sizes} options={options} value={defaultopt} placeholder="Select a size" />
            
            
          </form>
        </div>
      </div>
      </div>
   
      
    );
};