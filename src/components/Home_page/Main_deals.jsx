import React, { Component } from 'react';
import { Main_item } from './Main_item';

export default class Main_deals extends Component {
  render() {
    return (
    
    <div className='container'>
      
      <div className='container bg-primary mt-3'>
      <header>Other kits</header>
      
     
      <div className='row text-center pb-4'>
      <Main_item/>
      <Main_item/>
      <Main_item/>
      <Main_item/>
      </div>
      

    
      
      <div className='row text-center pb-4'>
      <Main_item/>
      <Main_item/>
      <Main_item/>
      <Main_item/>
      </div>
    
    </div>
      
    <div/>

    </div>
    
    
    );
  }
}
