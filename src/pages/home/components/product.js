import classnames from "classnames";
import React, { useEffect, useState } from "react";
import { Menu, Tabs } from "antd";
import "../index.less";
import { FloorMenu } from "@components";
import circle from "@images/icon/circle.png";
import { getProductByCategoryData } from "@redux/actions/actionCreator";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

const Category = React.memo(({ menuList, selectKeys, index }) => {
  const dispatch = useDispatch();
  const MenuDom = menuList.map((item, index) => {
    if (index < 4) {
      return (
        <Menu.Item key={item.id} id={item.id}>
          {item.name}
        </Menu.Item>
      );
    }
  });

  const changeCategory = (target) => {
    dispatch(getProductByCategoryData({ categoryId: target.key }, index));
  };

  return (
    <div className="tabCategory">
      <Menu
        mode="horizontal"
        className="menu_box"
        style={{ background: "transparent" }}
        selectedKeys={selectKeys}
        onClick={changeCategory}
      >
        {MenuDom}
      </Menu>
    </div>
  );
});

const Product = React.memo((props) => {
  const { datalist = [] } = props;
  return datalist.map((hot) => (
    <div
      className="oneBox_item"
      style={{ boxSizing: "border-box" }}
      onClick={() => {
        props.goDetail(hot.id);
      }}
      key={hot.id}
    >
      <img alt="" className="spuImg" src={hot.mainPic} />
      <div className="spuTitle">{hot.title}</div>
      <div className="spuPrice" style={{ marginBottom: 2 }}>
        ¥{hot.lowerPrice}/{hot.unitText}
      </div>
    </div>
  ));
});

const ProductBox = React.memo((props) => {
  const { categoryFirstList } = useSelector((state) => state.shop);
  return (
    <div className="floorContent">
      {categoryFirstList.map((item, index) => (
        <div className="contentBox" key={item.id}>
          <div className={classnames("floorBigTitle", "title_margin")}>
            <div className="proLeft">
              <span className="redFloor">{index + 1}F </span>
              <span className="title">{item.name}</span>
            </div>
            <div className={classnames("flex_center", "flex_1")}>
              <Category
                menuList={item.childrenCategory || []}
                selectKeys={item.selectKeys || []}
                index={index}
              />
              <div className="more">
                查看更多
                <img alt="" src={circle} />
              </div>
            </div>
          </div>
          <div>
            <div className="floorContentItem">
              <img
                src={require(`@images/icon/image_${item.name}.png`).default}
                className="big"
              />
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <Product
                  datalist={item.spuList || []}
                  goDetail={props.getDetail}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});
export default ProductBox;
