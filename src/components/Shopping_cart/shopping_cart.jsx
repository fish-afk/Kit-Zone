import React, { Component } from 'react';
import { useCart } from 'react-use-cart';


export default function Cart() {

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

    if(isEmpty) {return(<div className="conatiner row bg-white text-center fw-bold fs-1"><h1 className="text-danger">Your Cart is empty...</h1>
    <img className="container" src="https://store.printville.net/content/images/empty-cart.png" style={{width:"25rem"}}></img>
    <h1 className="text-success fst-italic">Go ahead, <a href="/">fill it up</a> : )</h1></div>);}
    console.warn(items)
    return (

   <section className="py-4 container">
            <div className="row justify-content-center">
            <div className="col-12">
                
                <table className="table table-responsive table-dark text-white fw-bold fs-3">
                    <tbody>
                    <tr>
                        <td>Unique items: {totalUniqueItems}</td>
                        <td className="ps-5">Total items: {totalItems} totalprice: K{cartTotal}</td>
                    </tr>
                    </tbody>
                </table>
                
                
                <table className="table table-dark table-responsive-sm table-striped table-hover m-0">
                    <thead><tr><td>Kit</td><td>Name</td><td>Price</td><td>Qty</td><td>Options</td></tr></thead>
                    <tbody>
                    {items.map((item, index)=>{
                        return(
                        <tr key={index}>
                            <td>
                                <img className="img_styles" src={item.img_src}></img>
                            </td>
                            <td>
                                
                                {item.teamname + " " + `(${item.description})`}
                            </td>
                            <td className="text-success">
                                K{item.price}
                            </td>
                            <td className="text-succcess fw-bold">
                                {item.quantity}
                            </td>
                            <td>
                                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="btn btn-success ms-2 fw-bold">+</button>
                                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="btn btn-success ms-2 fw-bold">-</button>
                                <button onClick={() => removeItem(item.id)} className="btn btn-danger ms-2">Remove</button>
                            </td>

                        </tr>)
                    })}
                    </tbody>
                </table>
                <button className="btn btn-warning fw-bold">Proceed to checkout</button>

            </div>
            </div>
            
    </section>


    )



}

