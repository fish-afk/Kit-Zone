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

    if(isEmpty) {return(<div className="conatiner-fluid row bg-white text-center text-danger fw-bold fs-1"><h1>Your Cart is empty!</h1>
    <img src="https://store.printville.net/content/images/empty-cart.png"></img></div>);}
    console.warn(items)
    return (

   <section className="py-4 container">
            <div className="row justify-content-center">
            <div className="col-12">
                
                <table className="table table-dark text-white fw-bold fs-3">
                    <tbody>
                    <tr>
                        <td>Items in Cart: {totalUniqueItems}</td>
                        <td className="ps-5">Total items: {totalItems}</td>
                    </tr>
                    </tbody>
                </table>
                
                
                <table className="table table-dark table-hover m-0">
                    <tbody>
                    {items.map((item, index)=>{
                        return(
                        <tr key={index}>
                            <td>
                                <img src={item.img_src} style={{height: "10rem", width: "10rem"}}></img>
                            </td>
                            <td>
                                {item.teamname}
                            </td>
                            <td className="text-success">
                                Price: K{item.price}
                            </td>
                            <td className="text-succcess fw-bold">
                                Quantity: {item.quantity}
                            </td>
                            <td>
                                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="btn btn-success ms-2 fw-bold">+</button>
                                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="btn btn-success ms-2 fw-bold">-</button>
                                <button onClick={() => removeItem(item.id)} className="btn btn-danger ms-2">Remove Item</button>
                            </td>

                        </tr>)
                    })}
                    </tbody>
                </table>

            </div>
            </div>
            
    </section>


    )



}

