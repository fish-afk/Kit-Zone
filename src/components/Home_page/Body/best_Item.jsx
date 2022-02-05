import React from 'react';
<<<<<<< HEAD
import KitDataService from '../../fetch_kit_data';

const data = KitDataService.find("barca", "teamname")
console.log(data);
=======

>>>>>>> badd5fb6a704b33b9db105556194ce4256384025

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
<<<<<<< HEAD
  return (qty <= 1 ? <p></p> : <button className="btn btn-primary">Add to cart</button>)
=======
  return (qty <= 1 ? <p></p> : <button onClick={() => props.onAddedBest(props.id)} className="btn btn-primary">Add to cart</button>)
>>>>>>> badd5fb6a704b33b9db105556194ce4256384025
  }

  return ( 
      
    
      <div className='col gy-5'>
      <div className="card cards-styles" id="hovering">
      <img src="https://www.minejerseys.ru/html/upload/temp_img/202107/64714/01627020753e377e22ena.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body">
          
          <h5 className="card-title">{props.name}</h5>
            {checker(props.Qty_available)} {input_enabler(props.Qty_available)} {btn_enabler(props.Qty_available)}
          
        </div>
      </div>
      </div>
   
      
    );
};
