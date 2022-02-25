import React from 'react'
import {useState, useEffect} from 'react'
import UserDataService from "../User-operations"
import Pending_order_template from './Pending-order-template'
import Socials_area from "./Home_page/socials_area"
import Skeleton, {SkeletonTheme } from 'react-loading-skeleton'

export default function Pending_orders() {
  
  const [orders, setOrders] = useState();
  const [loading, setLoading] = useState(true);
  let uid =  localStorage.getItem("uid")
  
  useEffect(() => {
    refresh();
    
  },[])

  const get_orders = async () => {
    setLoading(true)
    await UserDataService.get_all_users_orders(uid).then((res) => {
      setOrders(res.data)
      setLoading(false)
    }).catch( ()=>
       console.error("")
      )
  }

  const searcher = () => {
    if(uid != null){

    if(loading == true){
     return(<div className='container text-white fs-1 fw-bold'>
     <SkeletonTheme animation="wave" baseColor="#657595" highlightColor="#ddd"><Skeleton amount={1} height="60vh"/>
    <Skeleton /><Skeleton /> <Skeleton />
   </SkeletonTheme>
     </div>);
    }
    else{

      if(orders.length == 0){
        return <h1 className="text-warning text-center mb-5 mt-5"> <br/><br/><br/><br/><br/>You have no orders<br/><br/><br/><br/><br/><br/></h1>
      }
      else{
        
          return(orders.map((order,index) => (
            
            <Pending_order_template id={index} key={index} desc={order.description} name={order.name} price={order.price} 
            uid={uid} orderid={order._id} kit_type={order.order_type}
            status={order.order_status} date={order.date} delivery={order.delivery_date} qty={order.quantity.$numberInt}/>
      )));
        }

    }

    }else{
      return <div><h1>An error occured retrieving user data, state invalid..</h1></div>
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
      

      </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Socials_area />
    </React.Fragment>
  )
}




