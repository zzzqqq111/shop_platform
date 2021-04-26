import React, { useEffect, useState } from "react";
import { Table, InputNumber } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { spuStatus } from "@utils/enum";
import { deleteShopCard, updateShopCardData } from "@redux/actions/actionCreator";

const MainTable = React.memo((props) => {
  const goOtherClick = () => {};
  const { selectedRowKeys = [], handleRowSelectChange = () => {} } = props;
  const { shoppCardList = [] } = useSelector((state) => state.shop);
  const [datalist, setDataList] = useState([]);
  let newData = JSON.parse(JSON.stringify(datalist));
  const dispatch = useDispatch()

  useEffect(() => {
    setDataList(shoppCardList);
  }, [shoppCardList]);
  const changeCount = (value, record, index) => {
    if (value === 0) {
      return;
    }
    //库存比较，如果当前数量比库存数量多
    if (record.centralWarehouseStock < value) {
      newData[index].spuStatus = 1;
    } else {
      newData[index].spuStatus = 0;
    }
    if (record.tradeType === 1) {
      //议价的商品不进行计算
      newData[index].totalPrice = (value * record.priceText).toFixed(2);
    } else {
      newData[index].totalPrice = newData[index].totalPrice;
    }
    newData[index].num = value;
    setDataList(newData);
    dispatch(
      updateShopCardData({
        id: record.id,
        num: value,
        skuId: record.skuId
      })
    );
  };
  const deleteCard = id =>{
    dispatch(deleteShopCard({id: [id]}))
  }

  const columns = [
    {
      title: "图片",
      dataIndex: "mainPic",
      key: "mainPic",
      render: (_text, record) => {
        return (
          <div className="imgBox">
            <img src={_text} style={{ width: "92px", height: "92px" }} />
            <p>{spuStatus[record.spuStatus]}</p>
          </div>
        );
      },
    },
    {
      title: "商品信息",
      align: "center",
      render: (_, record) => {
        return (
          <div>
            <p>{record.title}</p>
            <p style={{ opacity: 0.65 }}>
              项目库存: {record.projectWarehouseStock || 0}
              {record.unitText}
            </p>
            <p style={{ opacity: 0.65 }}>
              项目已采: {record.purchaseNum || 0}
              {record.unitText}
            </p>
            <p style={{ opacity: 0.65 }}>
              项目大类预算: {record.title}
              {record.unitText}
            </p>
          </div>
        );
      },
    },
    {
      title: "规格",
      dataIndex: "spec",
      key: "spec",
      align: "center",
    },
    {
      title: "单价(元)",
      dataIndex: "priceText",
      key: "priceText",
      align: "center",
      render: (_text) => <div>￥{_text}</div>,
    },
    {
      title: "数量",
      dataIndex: "num",
      key: "num",
      align: "center",
      render: (text, record, index) => {
        return (
          <div>
            <div className="cartCount">
              <div
                className="btn"
                onClick={() => changeCount(text - 1, record, index)}
              >
                -
              </div>
              <InputNumber
                value={text}
                style={{ textAlign: "center", margin: "0 12px", width: "72px" }}
                bordered={false}
                onChange={(value) => changeCount(value, record, index)}
                min={1}
              />
              <div
                className="btn"
                onClick={() => changeCount(text + 1, record, index)}
              >
                +
              </div>
            </div>
            {record.spuStatus === 1 && (
              <div>
                <span style={{color: '#FF1213'}}>缺货</span> (剩余{record.centralWarehouseStock}卷)
              </div>
            )}
          </div>
        );
      },
    },
    {
      title: "小计(元)",
      align: "center",
      render: (_, record) => {
        return <div>￥{record.totalPrice}</div>;
      },
    },
    {
      title: "操作",
      render: (_, record) => {
        return (
          <div>
            <div onClick={() => deleteCard(record.id)}>删除</div>
            <div onClick={() => goOtherClick(2, record)}>预约提醒</div>
          </div>
        );
      },
    },
  ];
  const rowSelection = {
    selectedRowKeys,
    onChange: handleRowSelectChange,
  };
  return (
    <Table
      columns={columns}
      rowKey={(record) => record.id}
      dataSource={datalist}
      pagination={false}
      rowSelection={{
        type: "checkbox",
        hideSelectAll: true,
        ...rowSelection,
      }}
    />
  );
});
export default MainTable;
