import React from 'react';


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
  return (qty <= 1 ? <p></p> : <button onClick={() => props.onAddedBest(props.id)} className="btn btn-primary">Add to cart</button>)
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
