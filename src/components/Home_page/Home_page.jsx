import React, { Component } from 'react';
import Banner from './banner';
import Items from './Body/Item_renderer';
import Socials_area from './socials_area';
import Accordion from './accordion';

export default function Home_page(){

  
    return (<React.Fragment>
      
      
        <Banner/>
        <Items/>
        <Accordion/>
      <Socials_area />
      
    </React.Fragment>);
  
}
