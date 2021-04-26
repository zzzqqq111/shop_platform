import React, { Fragment, useState } from "react";
import { InputNumber } from "antd";
import ShopPreview from "./picPreview";
import "./index.less";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {ProModal} from "@components";
import { addToShopCardList } from "@redux/actions/actionCreator";

const ShopTopDetail = React.memo(() => {
  const { detailInfo = {}, showProject, projectList = [] } = useSelector(
    (state) => state.shop
  );
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(1);
  const { skuList = [], allPicList = [] } = detailInfo;
  const changeCount = (value) => {
    setCount(value);
  };
  const changebuttonCount = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };

  // 添加到购物车
  const addShopCard = () => {
    dispatch(addToShopCardList({
      num: count,
      skuId: skuList[index].id,
      spuId: skuList[index].spuId
    }))
  }
  return (
    <Fragment>
      <div style={{ display: "flex", flexDirection: "row", height: 500 }}>
        <ShopPreview dataSource={allPicList} />
        <div className="shopInfo">
          <div className="shopInfoTitle">{detailInfo.title}</div>
          {/* <div className={classnames("shopInfoTag", "mt_8", "mb_16")}>
            负载力强，绝缘安全，节能省电
          </div> */}
          <div className="shopInfoItem" style={{ alignItems: "baseline" }}>
            <div className="shopInfoLabel">价格</div>
            <div className={classnames("shopInfoRight", "infoPrice")}>
              ￥
              <span>
                {/* {detailInfo.tradeType === 1
                  ? detailInfo.lowerPrice
                  : detailInfo.tradeTypeText} */}
                {skuList[index]?.priceText}
              </span>
              /{detailInfo.unitText}
            </div>
          </div>
          <div className="shopInfoItem">
            <div className="shopInfoLabel">商品信息</div>
            <div className="shopInfoRight">
              <p>品牌名称：{detailInfo.brandText}</p>
              <p>商品编号：{detailInfo.code}</p>
              <p>单位：{detailInfo.unitText}</p>
            </div>
          </div>
          <div className="shopInfoTextBox">
            {/* <div className="projectCss" onClick={changeCardProject}>
            采购项目：测试AAA&nbsp;<DownOutlined style={{ fontSize: "10px",marginTop: '3px' }} />
            </div> */}
            <ProModal styles={{fontSize: '16px'}}/>
            <div className={classnames("shopInfoRight", "orderCount")}>
              <div>
                此商品项目仓库库存：{skuList[0]?.projectWarehouseStock}
                {detailInfo.unitText}
              </div>
              <div>
                此商品项目已采：{skuList[0]?.budgetSkuPurchaseNum}
                {detailInfo.unitText}
              </div>
            </div>
            <div className={classnames("shopInfoRight", "orderCount")}>
              <div>
                {skuList[index]?.spec}已采：{skuList[0]?.skuPurchaseNum}
                {detailInfo.unitText}
              </div>
              <div>
                {skuList[index]?.spec}预算：{skuList[0]?.budgetNum}
                {detailInfo.unitText}
              </div>
            </div>
          </div>
          <div className="shopInfoItem" style={{ alignItems: "center" }}>
            <div className="shopInfoLabel">选择规格</div>
            <div className={classnames("shopInfoRight", "sizeChoose")}>
              {skuList.map((item, key) => (
                <div
                  key={item.code}
                  onClick={() => {
                    setIndex(key);
                    setCount(1);
                  }}
                  className={index === key ? "active" : ""}
                >
                  {item.spec}
                </div>
              ))}
            </div>
          </div>
          <div className="shopInfoItem">
            <div className="shopInfoLabel">采购数量</div>
            <div className="shopInfoRight">
              <div className="cartCount">
                <div className={classnames("btn")} onClick={changebuttonCount}>
                  -
                </div>
                <InputNumber
                  value={count}
                  style={{ textAlign: "center" }}
                  bordered={false}
                  onChange={changeCount}
                  min={1}
                />
                <div
                  className={classnames("btn")}
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  +
                </div>
              </div>
              <div style={{ color: "#8f8f8f" }}>最小采购数量：100卷</div>
            </div>
          </div>
          {count > skuList[index]?.centralWarehouseStock ? (
            <div className={classnames("jiagou", "disables")}>无货预约</div>
          ) : (
            <div className="jiagou" onClick={addShopCard}>加入购物车</div>
          )}
        </div>
      </div>
      <div className="detailInfoBox">
        <div className="titleInfo">商品信息</div>
        <div dangerouslySetInnerHTML={{ __html: detailInfo.detailPic }}></div>
      </div>
    </Fragment>
  );
});

export default ShopTopDetail;
