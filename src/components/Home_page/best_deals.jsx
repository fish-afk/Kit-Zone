import React, { Component } from 'react';
import { Best_item } from './best_Item';

export default class Best_deals extends Component {
  render() {
    return (
    
    <div className='container bg-danger'>
      <div className='row text-center pb-5'>
      <header className='badge badge-warning'>Hot deals, limited time offers!!!</header>
      
      <Best_item/>
      <Best_item/>
      <Best_item/>
      <Best_item/>
      
      </div>

    
    </div>
    
    );
  }
}
