import React, { Component } from 'react';
import Item_group from "./Item_group"


class Cart extends Component{

    render(){
        return (
            <React.Fragment>
                
  
                <div className='container bg-dark'>
                    <h2 className='container fs-3 text-success'>You have slected to buy the following Items:</h2>
                    <Item_group />
                    <Item_group />
                    <Item_group />
                    <Item_group />
                    <Item_group />
                    <Item_group />
                    
                    
                </div>


            </React.Fragment>
            
                
            
        )
    }
}
export default Cart;