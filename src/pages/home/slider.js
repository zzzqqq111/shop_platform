import Carousel from "./components/banner";
import {CategoryBox} from "@components";
import React from "react";
import classnames from "classnames";

const Slider = React.memo(() => {
  return (
    <div style={{background: '#fff',width: '100%',paddingBottom: '24px'}}>
      <div className={classnames('contentBox','flex_center')}>
        {/* <Category /> */}
        <CategoryBox />
        <Carousel width='860px' height='460px' />
      </div>
    </div>
  );
});

export default Slider