import React, { Component } from 'react';
import Banner from './banner';
import Best_deals from './best_deals';
import Main_deals from './Main_deals';
import Socials_area from './socials_area';

export default class Home_page extends Component {

  render() {
    return <div>

        <Banner/>
        <Best_deals/>
        <Main_deals/>
        <Socials_area/>
    </div>;
  }
}
