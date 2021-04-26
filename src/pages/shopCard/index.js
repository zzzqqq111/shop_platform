import React, { Fragment, useEffect, useState } from "react";
import { SearchNav,ProModal } from "@components";
import { useDispatch, useSelector } from "react-redux";
import MainTable from "./table";
import { Checkbox, message, Radio } from "antd";
import {
  getShopCardList,
  selectShopCard,
  deleteAllShopCard,
} from "@redux/actions/actionCreator";
import "./index.less";
import { useHistory } from 'react-router-dom'
const ShoppingCard = React.memo(() => {
  const dispatch = useDispatch();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRow, setSelectedRow] = useState([]);
  const [sum, setSum] = useState(0);
  const [count, setCount] = useState(0);
  const [type, setType] = useState('');
  const [checkAll, setCheckAll] = useState(false);
  const { shoppCardList = [] } = useSelector((state) => state.shop);
  const history = useHistory()
  useEffect(() => {
    dispatch(getShopCardList({
      tradeType: type
    }));
  }, [type]);

  // 全选的方法
  const selectAll = () => {
    // selectedRows 为state中存放的选中的表格行
    if (shoppCardList.length === selectedRowKeys.length) {
      handleRowSelectChange([], []);
    } else {
      const index = [];
      shoppCardList.forEach((item) => {
        index.push(item.id);
      });
      handleRowSelectChange(index, shoppCardList);
    }
    setCheckAll(true)
  };

  // 传入选中的行的序号ID 和 选中的行
  const handleRowSelectChange = (selectedRowKeys, selectedRow) => {
    setSelectedRowKeys(selectedRowKeys);
    setSelectedRow(selectedRow);
    sumPrice(selectedRow);
    setCount(selectedRowKeys.length)
    if(shoppCardList.length === selectedRowKeys.length){
      setCheckAll(true)
    }else{
      setCheckAll(false)
    }
  };

  // 提交审批
  const submitOrder = () => {
    let trade1 = selectedRow.some((key) => key.tradeType === 1);
    let trade2 = selectedRow.some((key) => key.tradeType === 2);
    if (trade1 && trade2) {
      return message.warning("议价商品和普通商品不能一起提交审批");
    }
    dispatch(
      selectShopCard({
        ids: selectedRowKeys,
        isSelect: 1,
      }, selectedRow)
    );
    history.push('/orderApprove')
  };

  // 总价
  const sumPrice = (data) => {
    var sum = 0;
    // var count = 0;
    var list = [...data];
    list.map((ite, i) => {
      if (ite.tradeType === 1) {
        sum += Number(ite.totalPrice);
        // count += 1;
      }
    });
    setSum(sum);
    // setCount(count);
  };

  // 清空购物车
  const clearShopCard = () => {
    dispatch(deleteAllShopCard());
    resetData()
  };
  const resetData = () =>{
    setSum(0);
    setSelectedRowKeys([]);
    setSelectedRow([]);
    // setCount(0);
    setCheckAll(false);
  }

  const changeType = index => {
    setType(index)
    resetData()
  }

  return (
    <Fragment>
      <SearchNav showSearch={false} title="我的购物车" content={<ProModal />}/>
      {/* <p onClick={clearShopCard}>清空购物车</p> */}
      <div className="setbackground">
        <div className="contentBox">
        <div className='tabStyle'>
          <span onClick={()=>changeType('')} className={type === '' ? 'active': ''}>全部商品</span>
          <span onClick={()=>changeType('1')} className={type === '1' ? 'active': ''}>普通商品</span>
          <span onClick={()=>changeType('2')} className={type === '2' ? 'active': ''}>议价商品</span>
        </div>
          <MainTable
            selectedRowKeys={selectedRowKeys}
            handleRowSelectChange={handleRowSelectChange}
          />
          <div className="selectBox">
            <div className="leftSelect">
              <div>
                <Checkbox onChange={selectAll} checked={checkAll}>全选</Checkbox>
                已选商品<span>{selectedRow.length}</span>件
              </div>
              <span>
                合计：<span style={{ fontSize: "20px" }}>￥{sum}</span>
              </span>
            </div>
            <div
              className="submit"
              onClick={submitOrder}
              disabled={shoppCardList.length === 0}
            >
              提交审批
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});
export default ShoppingCard;
