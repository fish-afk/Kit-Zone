import React from 'react';
import { useCart } from 'react-use-cart';


export const Main_item = (props) => {

  const { addItem } = useCart()

  let size_chosen = "S"
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
    let select = document.getElementById(props.id);
    let value = select.options[select.selectedIndex].value;

    size_chosen = value;
    console.log(size_chosen)
    return size_chosen;
  }

  
  const return_qty = () => {
    
    let item= Object.assign({}, props.item)

    let size = choose_sizes();
    let size_chosen = () => {
      let ans = size.length < 1 ? "S" : size;
      return ans


    }
    
    item["size_chosen"] = size_chosen();
    let number = document.getElementById("numberonshirt").value;
    
    
    if(number != "" || number != undefined || number != null){
      item["number"] = number;
      addItem(item)
    }
  }

  const btn_enabler2 = (qty) => {
  return(qty < 1 ? <p></p> : <button onClick={return_qty} type="submit" className="btn btn-primary">Add to cart</button>)
  }
  

  return ( 
      
    
      <div className='col gy-3'>
      <div className="card cards-styles" id="hovering">
      <img src={props.img_src} className="card-img-top bg-secondary" alt="Loading..."></img>
        <div className="card-body bg-dark text-white">
          <form>
          <h6 className="card-title badge-dark">{props.teamname}:<p>{props.description}</p></h6>
          
            <div>{checker2(props.Qty_available)} <div className="fw-bold">Price: K{props.price}</div></div> 
            <select id={props.id}>
            <option value="" disabled defaultValue={true}>Select size</option>
              <option value="S">small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="X-L">X-Large</option>
              <option value="XX-L">XX-Large</option>
            </select>
            <input required id="numberonshirt" style={{width:"100px"}} placeholder="Shirt number"></input>
            {btn_enabler2(props.Qty_available)}
          </form>
        </div>
      </div>
      </div>
   
      
    );
};