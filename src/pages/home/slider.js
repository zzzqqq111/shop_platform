import Carousel from "./components/banner";
import Category from "./components/menu";
import React from "react";
import classnames from "classnames";

const Slider = () => {
  return (
    <div style={{background: '#fff',width: '100%',paddingBottom: '24px'}}>
      <div className={classnames('contentBox','flex_center')}>
        <Category />
        <Carousel width='860px' height='460px' />
      </div>
    </div>
  );
};

export default Slider