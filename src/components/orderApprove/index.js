import React from "react";
import { Steps } from "antd";
import './index.less'
const { Step } = Steps;
const OrderApproval = React.memo(() => {
  return (
    <Steps current={0} className='approvalBox'>
      <Step subTitle="提交审批" title={<div className='title'>1</div>}/>
      <Step subTitle="审批通过" title={<div className='title'>2</div>}/>
      <Step subTitle="商品出库" title={<div className='title'>3</div>}/>
      <Step subTitle="入库收获" title={<div className='title'>4</div>}/>
      <Step subTitle="结算开票" title={<div className='title'>5</div>}/>
      <Step subTitle="订单完成" title={<div className='title'>6</div>}/>
    </Steps>
  );
});
export default OrderApproval;
