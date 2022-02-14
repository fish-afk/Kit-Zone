import React from 'react';
import { useCart } from 'react-use-cart';


export const Item = (props) => {

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

  const return_qty = () => {
    addItem(props.item)
  }

  const btn_enabler2 = (qty) => {
  return(qty < 1 ? <p></p> : <button onClick={return_qty} type="button" className="btn btn-primary">Add to cart</button>)
  }
  

  return ( 
      
    
      <div className='col gy-3'>
      <div className="card cards-styles" id="hovering">
      <img src={props.img_src} className="card-img-top bg-secondary" alt="..."></img>
        <div className="card-body">
          <form>
          <h6 className="card-title badge-dark">{props.name}, {props.color}:<p>{props.description}</p></h6>
          
            <div>{checker2(props.Qty_available)} <div className="fw-bold">Price: K{props.price}</div></div> {btn_enabler2(props.Qty_available)}
          </form>
        </div>
      </div>
      </div>
   
      
    );
};