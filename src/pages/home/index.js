import React, { Component, Fragment } from "react";
import { SearchNav, FloorMenu } from '@components';
import Slider from './slider'
import HotSale from './components/hot'
import Product from './components/product'
class Home extends Component {
  render() {
    return (
      <Fragment>
        <SearchNav/>
        <Slider />
        <HotSale />
        <Product />
      </Fragment>
    );
  }
}

export default Home;
