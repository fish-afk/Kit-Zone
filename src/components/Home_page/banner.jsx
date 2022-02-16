import React, { Component } from 'react';

export default class Banner extends Component {
  render() {
    return (

      <React.Fragment>
    <div className='container bg-dark fst-italic mt-5'>
    
    

      </div>
      <br/>
      
      <div className='container bg-dark fs-5 banners'><p className=" align-center text-info text-center" id="banner-text">{this.props.title}</p></div>

      </React.Fragment>
        
    );;
  }
}
