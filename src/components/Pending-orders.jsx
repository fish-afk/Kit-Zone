import React from 'react'
import {useState, useEffect} from 'react'
import UserDataService from "../User-operations"
import Pending_order_template from './Pending-order-template'

export default function Pending_orders() {
  
  const [orders, setOrders] = useState();
  let uid =  localStorage.getItem("uid")
  
  useEffect(() => {
    refresh();
    
  },[])

  const get_orders = async () => {
    
    await UserDataService.get_all_users_orders(uid).then((res) => {
      setOrders(res.data)
    }).catch( ()=>
       window.location.assign("/auths")
      )
  }

  const searcher = () => {
    if(uid != null){
    if(orders == undefined || orders == null){
     return(<div className='container text-white fs-1 fw-bold'>
     <h1>You currently have no pending orders...</h1></div>);
    }else{
        return(orders.map(order => (
          <Pending_order_template key={order._id} name={order.name} price={order.price} uid={uid} orderid={order._id} status={order.order_status}/>
    )));
    }

    }else{
      return <div><h1>iohfushdfusgfuusgffughsidfsdfsdfsdfsdf</h1></div>
    }
 
  }

  const refresh = () => {
    get_orders()
  }
  return (
    <React.Fragment>
      <br/>
      <br/>
      <div className="mt-5 container bg-dark text-white">
        <header className="text-center mb-4 fw-bold fs-6 text-warning">Relevant orders...</header>
      <div className="row">

      {searcher()}
      <Pending_order_template key={1} name={"iaihf"} price={"order.price"}/>
      <Pending_order_template key={2} name={"iaihf"} price={"order.price"}/>
      <Pending_order_template key={3} name={"iaihf"} price={"order.price"}/>
      

      </div>
      </div>
    </React.Fragment>
  )
}
