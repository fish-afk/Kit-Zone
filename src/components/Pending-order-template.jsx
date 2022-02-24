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
    await UserDataService.Cancel_order(props.orderid,props.uid).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
  }

  const btn_logic = () => {
      if(props.status == "pending"){
          return(<button className="btn-danger" onClick={cancel_order}>Cancel order</button>)
      }else{
          return
      }
  }
  return (
    <div className="gy-3 mb-4 col-sm-4">
        <div>
            <h5>{props.name}</h5>
            <h5>K{props.price}</h5>
            <div>{colorize()}</div>
            
        </div>
        <div>
            {btn_logic()}
        </div>

    </div>
  )
}
