import React, { Component } from 'react';
import Banner from './banner';
import Items from './Body/Item_renderer';
import Socials_area from './socials_area';

export default class Home_page extends Component {

  render() {
    return( <div>
        <Banner/>
        <Items/>
        <Socials_area/>
    </div>);
  }
}
