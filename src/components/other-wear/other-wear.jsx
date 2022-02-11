import React, { Component } from 'react'
import Item_renderer from './Item_renderer'
import Banner from '../Home_page/banner'

export default class Other_wear extends Component {
  render() {
    return (
      <React.Fragment>
          <Banner/>
        <Item_renderer/>

      </React.Fragment>
    )
  }
}
