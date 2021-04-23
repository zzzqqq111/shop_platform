import classNames from "classnames";
import React, { useState } from "react";
import "./index.less";

const ShopPreview = React.memo(({ dataSource = [] }) => {
  const [current, setCurrent] = useState(0);
  const changeCu = (direction) => {
    if (direction === "left" && current > 0) {
      setCurrent(current - 1);
    }
    if (direction === "right" && current < dataSource.length - 1) {
      setCurrent(current + 1);
    }
  };
  return (
    <div className="shopImgBox">
      <div className="shopImgPreview">
        <img alt="宝贝详情图" src={dataSource[current]} />
      </div>
      <div className="specItems">
        <div
          className="arrowBox"
          onClick={() => {
            changeCu("left");
          }}
        >
          <img
            alt="pre"
            className="arrowSize"
            src={require("@images/icon/pre.png").default}
          />
        </div>
        <div className="listItem">
          {dataSource.map((url, index) => (
            <div
              key={url}
              className={classNames(
                "thumbBox",
                index === current ? "active" : ""
              )}
              onClick={() => {
                setCurrent(index);
              }}
            >
              <img alt="宝贝缩略图" className="thumbImg" src={url} />
            </div>
          ))}
        </div>
        <div
          className="arrowBox"
          style={{ right: 0, left: "auto" }}
          onClick={() => {
            changeCu("right");
          }}
        >
          <img
            alt="next"
            className="arrowSize"
            src={require("@images/icon/next.png").default}
          />
        </div>
      </div>
    </div>
  );
});

export default ShopPreview;
