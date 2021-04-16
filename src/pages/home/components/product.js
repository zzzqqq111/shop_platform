import classNames from "classnames";
import React, { useEffect, useState } from "react";
import "../index.less";

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

function Tabs() {
  return (
    <div sx={{ display: "flex", flexDirection: "row", ml: "149px" }}>
      <span>建筑钢材</span>
      <span>结构材料</span>
      <span>生产辅材</span>
      <span>紧固件</span>
    </div>
  );
}

export default function HotSale() {
  return (
    <div className="contentBox">
      <div className={classNames("floorBigTitle", "title_margin")}>
        <div className="">
          <span>1F</span>
          <span>{cateDetail.cate}</span>
        </div>
        <Tabs />
        <div className="more">
          查看更多
          <img
            alt=""
            style={{ width: 5, height: 6 }}
            src="/assets/images/shop/toRight.png"
          />
        </div>
      </div>
    </div>
  );
}
