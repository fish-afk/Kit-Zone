import React from 'react'
import UserDataService from "../User-operations"

export default function Pending_order_template(props) {
    

  const colorize =() => {
      if(props.status == "pending"){
          return <p className="text-warning">Order status: {props.status}</p>
      }else if(props.status == "completed"){
        return <p className="text-success">Order status: {props.status}</p>
      }else{
          return <p className="text-danger">Order status: Error</p>
      }
  }

  const cancel_order = async () => {
    
    document.getElementById(props.id).innerHTML = `<h1 style="color: #139128;">Loading...</h1>`
    await UserDataService.Cancel_order(props.orderid,props.uid).then((res) => {
        console.log(res);
        if(res.status == 200){
            document.getElementById(props.id).innerHTML = `<h1 style="color: #baac0d;">Order cancelled</h1>`
        }
    }).catch((err) => {
        document.getElementById(props.id).innerHTML = `<h1 style="color: #ba0d0d;">An error occured</h1>`
        console.log(err);
    })
  }

  const btn_logic = () => {
      if(props.status == "pending"){
          return(<button className="btn-danger col-sm-5" onClick={cancel_order}>Cancel order</button>)
      }else{
          return
      }
  }

  return (
    <div className="gy-3 mb-4 col-sm-4" style={{border:"2px solid black"}}>
        <div id={props.id}>
            <h5><u>{props.name}, {props.desc}</u></h5>
            <h3>Price: {props.price == undefined ? "To be told" : "K" + props.price}<div className="text-info"> Total ordered: {props.qty == undefined ? "1" : props.qty}</div></h3>
            <h3>Placed on: {props.date}</h3>
            <h3>Expected delivery: {props.delivery}</h3>
            <h3>Kit type : {props.kit_type}</h3>
            <div>{colorize()}</div>

            <div>
            {btn_logic()}
            </div>
        </div>
        
    
    </div>
  )
}
