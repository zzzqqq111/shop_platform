import classnames from "classnames";
import React, { Component, Fragment } from "react";
import { SearchNav } from '@components';
import Slider from './slider'
import HotSale from './components/hot'
class Home extends Component {
  render() {
    return (
      <Fragment>
        <SearchNav/>
        <Slider />
        <HotSale />
      </Fragment>
    );
  }
}

export default Home;
