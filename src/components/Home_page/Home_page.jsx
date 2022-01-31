import React, { Component } from 'react';
import Banner from './banner';
import Best_deals from './best_deals';

export default class Home_page extends Component {

  render() {
    return <div>

        <Banner/>
        <Best_deals/>
    </div>;
  }
}
