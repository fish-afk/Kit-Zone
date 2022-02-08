import React from 'react';
import KitDataService from '../../fetch_kit_data';

const data = KitDataService.find("barca", "teamname")
console.log(data);

const input_enabler = (qty) => {
  return(qty < 1 ? <p></p> : <span><input className="bg-dark text-white" placeholder='Qty' maxLength="1" max={qty} min="1"
             required type="number"></input></span>)
}

const checker = (Qty) => {

  if (Qty > 0 && Qty <= 3) {
    return (<p className='text-success fw-bold'>{Qty} left...</p>)
  } else if (Qty < 1) {
    return(<p className='text-danger fw-bold'>Out of stock !</p>)
  } else {
    return <p className='text-success fw-bold'>In stock...</p>;
  }
}

export const Best_item = (props) => {

  const btn_enabler = (qty) => {
  return (qty <= 1 ? <p></p> : <button className="btn-primary widths">Add to cart</button>)
  }

  return ( 
      
    
      <div className='col gy-5'>
      <div className="card cards-styles" id="hovering">
      <img src="Kit_images/BALR/BALR._Black_.svg" className="card-img-top" alt="..."></img>
        <div className="card-body">
          
          <h5 className="card-title">{props.name}</h5>
            {checker(props.Qty_available)} {input_enabler(props.Qty_available)} {btn_enabler(props.Qty_available)}
          
        </div>
      </div>
      </div>
   
      
    );
};
