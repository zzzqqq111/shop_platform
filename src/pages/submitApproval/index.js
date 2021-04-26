import React, { Fragment, useEffect } from "react";
import { OrderApproval, SearchNav } from "@components";
import { useDispatch, useSelector } from "react-redux";
import "./index.less";
import classNames from "classnames";
import Address from "./list";
import AddressDetail from "./address";
import { getAddressData, createNewOrder } from "@redux/actions/addressAction";
import { DatePicker, Input, Steps } from "antd";
import moment from "moment";
import MainTable from "./productTable";

const Index = React.memo((props) => {
  const dispatch = useDispatch();
  const {
    location: { pathname },
  } = props;
  let newDate = new Date();
  const { Step } = Steps;
  const { selectRows=[] } = useSelector(state=>state.shop)
  const createOrder = () => {
    dispatch()
  }
  const ShopInfo = () => {
    return (
      <>
        <div className="orderAppBox">
          <div className="mb_8" style={{ overflow: "hidden" }}>
            <div className="h2Title">项目信息</div>
            <div className="secondTitle">
              项目编号: &nbsp;&nbsp;&nbsp;TK202012348999
            </div>
            <div className="secondTitle">项目名称: &nbsp;&nbsp;&nbsp;sfsdff</div>
          </div>
          <div className="mb_8" style={{ overflow: "hidden" }}>
            <div className="h2Title">收货信息</div>
            <Address />
          </div>
          <div className={classNames("mt_16", "mb_24")}>
            <span>选择期望送货时间&nbsp;&nbsp;&nbsp;</span>
            <DatePicker
              defaultValue={moment(newDate, "YYYY-MM-DD")}
              style={{ width: "224px" }}
            />
          </div>
          <div style={{ overflow: "hidden" }}>
            <div className="h2Title">商品信息</div>
            <MainTable dataList={selectRows}/>
          </div>
          <div className={classNames("mt_16", "mb_24", "flex_center")}>
            <span>备注信息&nbsp;&nbsp;&nbsp;</span>
            <Input placeholder="请输入备注信息" style={{ width: "93%" }} />
          </div>
          <div style={{ overflow: "hidden" }}>
            <div className="h2Title">审批流程-普通商品</div>
            <Steps progressDot current={-1}>
              <Step title="创建单据" />
              <Step title="部门初审" />
              <Step title="财务复审" />
              <Step title="完成" />
            </Steps>
          </div>
        </div>
        <div className={classNames("leftSelect",'text')}>
          <span>共<span style={{ color: '#FF1213' }}>{selectRows.length}</span>件商品</span>
          <div className="submit" onClick={createOrder}>提交审批</div>
        </div>
      </>
    );
  };
  useEffect(() => {
    dispatch(getAddressData());
  }, []);
  return (
    <Fragment>
      <SearchNav
        showSearch={false}
        title="提交采购审批"
        content={<OrderApproval />}
      />
      <div className={classNames("contentBox")}>
        {pathname === "/orderApprove" ? <ShopInfo /> : <AddressDetail />}
      </div>
    </Fragment>
  );
});
export default Index;
