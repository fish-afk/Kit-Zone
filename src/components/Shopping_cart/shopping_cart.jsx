import React, { Component } from 'react';
import { useCart } from 'react-use-cart';
import  Customer_details from "../customer_details"
import {useUserContext} from "../../Usercontext/usercontext"
import Socials_area from "../Home_page/socials_area"

export default function Cart() {

  const { user } = useUserContext();
  const {
      isEmpty,
      totalUniqueItems,
      items,
      totalItems,
      cartTotal,
      updateItemQuantity,
      removeItem,
      emptyCart,
    } = useCart();

    const checker = () => {
        if(user.email != undefined && user.emailVerified == true) {
            return(<button className="btn btn-warning fw-bold" data-bs-toggle="modal" data-bs-target="#custm">Proceed to checkout</button>)
        }else if(user.email == undefined){
            return(<div className="bg-dark text-warning text-center fw-bold"><h6>Please <a href="/auths">Log in</a>
            
             first to place an order</h6></div>)
        }else if(user.emailVerified == false){
            return(<div className="bg-dark text-danger text-center"><h3>Please verify your email first</h3></div>)
        }

    }
    if((isEmpty)) 
    {return(<div className="conatiner row bg-white text-center fw-bold fs-1 mt-5"><h1 className="text-danger mt-5">Your Cart is empty...</h1>
    <img className="container" alt="cart-image" src="https://store.printville.net/content/images/empty-cart.png" style={{width:"25rem"}}></img>
    <h1 className="text-success fst-italic">Go ahead, <a href="/">fill it up</a> : )</h1></div>);}
    console.warn(items)
    return (
    <React.Fragment>
   <section className="py-4 container">
            <div className="row justify-content-center mt-5">
            <div className="col-12">
                
                <table className="table table-responsive table-dark text-white fw-bold fs-3">
                    <tbody>
                    <tr>
                        <td>Unique items: {totalUniqueItems}</td>
                        <td className="ps-5">Total items: {totalItems} totalprice: K{cartTotal.toFixed(2)}</td>
                    </tr>
                    </tbody>
                </table>
                
                
                <table className="table table-dark table-responsive-sm table-striped table-hover m-0">
                    <thead  className="fw-bold text-warning"><tr><td>Kit</td><td>Desc.</td><td>Price</td><td>Qty</td><td>Size</td><td>Options</td></tr></thead>
                    <tbody>
                    {items.map((item, index)=>{
                        let price = parseInt(item.price);
                        return(
                        <tr key={index}>
                            <td>
                                <img className="img_styles" alt="item_image" src={item.img_src}></img>
                            </td>
                            <td>
                                
                                {item.teamname + " " + `(${item.description})`}
                            </td>
                            <td className="text-success">
                                K{price.toFixed(0)}
                            </td>
                            <td className="text-succcess fw-bold">
                                {item.quantity}
                            </td>
                            <td className="text-succcess fw-bold">
                                {String(item.size_chosen).toLocaleUpperCase()}
                            </td>
                            <td>
                                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="btn btn-success ms-2 fw-bold">+</button>
                                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="btn btn-success ms-2 fw-bold">-</button>
                                <button onClick={() => removeItem(item.id)} className="btn btn-danger ms-2">Remove</button>
                            </td>

                        </tr>)
                    })}
                    <tr>

                    </tr>
                    </tbody>
                </table>
                {checker()}
                <button onClick={emptyCart} className="btn btn-danger fw-bold ms-5">Empty Cart</button>
            </div>
            </div>
            <Customer_details />
    </section>
    <div className="container fill-in"></div>
    <footer className="foot"><Socials_area/></footer>
    </React.Fragment>

    )



}

