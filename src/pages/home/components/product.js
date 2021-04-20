import classnames from "classnames";
import React, { useEffect, useState } from "react";
import { Menu, Tabs } from "antd";
import "../index.less";
import { FloorMenu } from "@components";
import circle from "@images/icon/circle.png";
import jzcl from "@images/icon/image_jzcl.png";

const cateDetail = {
  cate: "建筑钢材",
  thirdCate: [
    {
      name: "结构材料",
      spuList: [
        {
          spuImg: process.env.PUBLIC_URL + "/assets/images/shop/hot-img.png",
          spuTitle: "多功能家用工具箱套装 冲击钻 1111",
          spuPrice: 147,
          unit: "箱",
        },
        {
          spuImg: process.env.PUBLIC_URL + "/assets/images/shop/hot-img.png",
          spuTitle: "多功能家用工具箱套装 冲击钻 2222",
          spuPrice: 147,
          unit: "箱",
        },
        {
          spuImg: process.env.PUBLIC_URL + "/assets/images/shop/hot-img.png",
          spuTitle: "多功能家用工具箱套装 冲击钻 3333 ",
          spuPrice: 147,
          unit: "箱",
        },
        {
          spuImg: process.env.PUBLIC_URL + "/assets/images/shop/hot-img.png",
          spuTitle: "多功能家用工具箱套装 冲击钻 4444",
          spuPrice: 147,
          unit: "箱",
        },
        {
          spuImg: process.env.PUBLIC_URL + "/assets/images/shop/hot-img.png",
          spuTitle: "多功能家用工具箱套装 冲击钻 5555",
          spuPrice: 147,
          unit: "箱",
        },
        {
          spuImg: process.env.PUBLIC_URL + "/assets/images/shop/hot-img.png",
          spuTitle: "多功能家用工具箱套装 冲击钻 6666 ",
          spuPrice: 147,
          unit: "箱",
        },
        {
          spuImg: process.env.PUBLIC_URL + "/assets/images/shop/hot-img.png",
          spuTitle: "多功能家用工具箱套装 冲击钻 7777 ",
          spuPrice: 147,
          unit: "箱",
        },
        {
          spuImg: process.env.PUBLIC_URL + "/assets/images/shop/hot-img.png",
          spuTitle: "多功能家用工具箱套装 冲击钻 8888 ",
          spuPrice: 147,
          unit: "箱",
        },
      ],
    },
  ],
};

const Category = () => {
  const menuArr = [
    {
      id: 1,
      path: "",
      title: "集采商城",
    },
    {
      id: 2,
      path: "",
      title: "租赁平台",
    },
    {
      id: 3,
      path: "",
      title: "项目管理平台",
    },
    {
      id: 4,
      path: "",
      title: "APP",
    },
    {
      id: 5,
      path: "",
      title: "关于我们",
    },
    {
      id: 6,
      path: "",
      title: "测试平台",
    },
  ];
  const MenuDom = menuArr.map((item) => {
    return <Menu.Item key={item.id}>{item.title}</Menu.Item>;
  });
  return (
    <div className="tabCategory">
      <Menu
        mode="horizontal"
        className="menu_box"
        style={{ background: "transparent" }}
      >
        {MenuDom}
      </Menu>
    </div>
  );
};

const Product = () => {
  return cateDetail.thirdCate[0].spuList.map((hot) => (
    <div className="oneBox_item" style={{ boxSizing: "border-box" }}>
      <img alt="" className="spuImg" src={hot.spuImg} />
      <div className="spuTitle">{hot.spuTitle}</div>
      <div className="spuPrice" style={{ marginBottom: 2 }}>
        ¥{hot.price}/{hot.unit}
      </div>
    </div>
  ));
};

export default function HotSale() {
  return (
    <div className="floorContent">
      <div className="contentBox">
        <div className={classnames("floorBigTitle", "title_margin")}>
          <div className="proLeft">
            <span className="redFloor">1F </span>
            <span className="title">{cateDetail.cate}</span>
          </div>
          <div className={classnames("flex_center", "flex_1")}>
            <Category />
            <div className="more">
              查看更多
              <img alt="" src={circle} />
            </div>
          </div>
        </div>
        <div>
          <div className="floorContentItem">
            <img src={jzcl} className="big" />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Product />
            </div>
          </div>
        </div>
      </div>
      <div className="contentBox">
        <div className={classnames("floorBigTitle", "title_margin")}>
          <div className="proLeft">
            <span className="redFloor">1F </span>
            <span className="title">{cateDetail.cate}</span>
          </div>
          <div className={classnames("flex_center", "flex_1")}>
            <Category />
            <div className="more">
              查看更多
              <img alt="" src={circle} />
            </div>
          </div>
        </div>
        <div>
          <div className="floorContentItem">
            <img src={jzcl} className="big" />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Product />
            </div>
          </div>
        </div>
      </div>
      <div className="contentBox">
        <div className={classnames("floorBigTitle", "title_margin")}>
          <div className="proLeft">
            <span className="redFloor">1F </span>
            <span className="title">{cateDetail.cate}</span>
          </div>
          <div className={classnames("flex_center", "flex_1")}>
            <Category />
            <div className="more">
              查看更多
              <img alt="" src={circle} />
            </div>
          </div>
        </div>
        <div>
          <div className="floorContentItem">
            <img src={jzcl} className="big" />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Product />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
