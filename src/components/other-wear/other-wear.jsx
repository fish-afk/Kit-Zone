import React, { Component } from 'react'
import Item_Renderer from './Item_renderer'
import Banner from '../Home_page/banner'
import Socials_area from "../Home_page/socials_area"
import Skeleton from 'react-loading-skeleton'

export default class Other_wear extends Component {
  render() {
    return (
      <React.Fragment>
          <Banner/>
        <Item_Renderer/>
        
       
        <Socials_area/>
        


      </React.Fragment>
    )
  }
}