import classNames from "classnames";
import React, { useEffect, useState } from "react";
import "../index.less";
import circle from "@images/icon/circle.png";
import { getHotProductData } from "@redux/actions/actionCreator";
import { useSelector, useDispatch } from "react-redux";

const HotSale = React.memo((props) => {
  const { hotList = [] } = useSelector(state=>state.shop);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotProductData());
  }, []);
  return (
    <div className="contentBox">
      <div className={classNames("header", "title_margin")}>
        <div className="title">热销榜单</div>
        <div className="more">
          查看更多
          <img alt="" src={circle} />
        </div>
      </div>
      <div className="topOne">
        <div className={classNames("oneBox", "commbox")}>
          {hotList.map((hot,index) => {
            if(index < 3){
              return (
                <div className={classNames("oneBox_item", "commonItem")} key={hot.id} onClick={()=>{props.getDetail(hot.id)}}>
                  <img alt="" className="levelImg" src={require(`@images/icon/hot${index+1}.png`).default} />
                  <img alt="" className="spuImg" src={hot.allPic} />
                  <div className="spuTitle">{hot.title} </div>
                  <div className="spuPrice">
                    ¥{hot.lowerPrice}/{hot.unitText}
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className={classNames("twoBox", "commbox")}>
          {hotList.map((hot, index) => {
            if(index >=3){
              return (
                <div className={classNames("two_item", "commonItem")} key={hot.id} onClick={()=>{props.getDetail(hot.id)}}>
                  <img alt="" src={require(`@images/icon/hot${index+1}.png`).default} className="levelImg"></img>
                  <img alt="" src={hot.allPic} className="spuImg" />
                  <div className="spuTitle">{hot.title}</div>
                  <div className="spuPrice">
                    ￥{hot.lowerPrice}/{hot.unitText}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
})

export default HotSale