import React from 'react';
import { useCart } from 'react-use-cart';


export const Main_item = (props) => {

  const { addItem } = useCart()

  let size_chosen = "s"
  const checker2 = (Qty) => {
  
    if (Qty > 0 && Qty <= 3) {
      return (`${Qty} left...`)
    } else if (Qty <= 1) {
      return(<p className='text-danger fw-bold'>Out of stock !</p>)
    } else {
      return <div className='text-success'>In stock...</div>;
    }
  }

  const choose_size_s = () => {
    size_chosen = "s"
  }

  const choose_size_m = () => {
    size_chosen = "m"
  }
  const choose_size_l = () => {
    size_chosen = "l"
  }

  const return_qty = () => {
    let item= Object.assign({}, props.item)
    
    item["size_chosen"] = size_chosen;
    console.warn(item)
    addItem(item)
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
          <h6 className="card-title badge-dark">{props.teamname}:<p>{props.description}</p></h6>
          
            <div>{checker2(props.Qty_available)} <div className="fw-bold">Price: K{props.price}</div></div> 
            <div className="btn-group gx-2" role="group" aria-label="Basic mixed styles example">
              <p className="pe-3">Size: </p>
              <button type="button" onClick={choose_size_s} className="btn btn-danger">Small</button>
              <button type="button" onClick={choose_size_m} className="btn btn-warning">Medium</button>
              <button type="button" onClick={choose_size_l} className="btn btn-success">Large</button>
            </div>
            {btn_enabler2(props.Qty_available)}
          </form>
        </div>
      </div>
      </div>
   
      
    );
};