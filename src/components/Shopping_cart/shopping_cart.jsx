import React, { Component } from 'react';
import { useCart } from 'react-use-cart';


export default function Cart() {

  const {items} = useCart();

  console.warn(items)
  return (

    
    <div>Cart {items} </div>



  )



}

