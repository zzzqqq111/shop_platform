import React, { Fragment, useEffect } from "react";
import { SearchNav } from "@components";
import { useDispatch } from "react-redux";
import MainTable from "./table";
import { Checkbox, Button } from "antd";
import { getShopCardList } from "@redux/actions/actionCreator";
import "./index.less";
const ShoppingCard = React.memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShopCardList());
  }, []);
  return (
    <Fragment>
      <SearchNav showSearch={false} title="我的购物车" showProject={true}/>
      <div className="setbackground">
        <div className="contentBox">
          <MainTable />
          <div className='selectBox'>
            <div className='leftSelect'>
              <div>
                <Checkbox>全选</Checkbox>
                已选商品<span>1</span>件
              </div>
              <span>合计：<span style={{fontSize: '20px'}}>￥199</span></span>
            </div>
            <div className='submit'>提交审批</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});
export default ShoppingCard;
