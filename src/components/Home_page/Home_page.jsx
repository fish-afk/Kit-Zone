import React, { Component } from 'react';
import Banner from './banner';
import Items from './Body/Item_renderer';
import Socials_area from './socials_area';

export default function Home_page(){

  
    return (<React.Fragment>
      
      
        <Banner/>
        <Items/>
      <Socials_area />
      
    </React.Fragment>);
  
}
