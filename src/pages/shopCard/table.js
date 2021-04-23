import React, { useEffect, useMemo, useContext, useState } from "react";
import { Table, InputNumber } from "antd";
import { useSelector } from "react-redux";
import {spuStatus} from "@utils/enum"

const MainTable = React.memo(() => {
  const goOtherClick = () => {};
  const { shoppCardList = [] } = useSelector((state) => state.shop);
  const [count, setCount] = useState(1);
  const changeCount = (value) => {
    setCount(value);
  };
  const changebuttonCount = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };
  const columns = [
    {
      title: "全选",
      dataIndex: "mainPic",
      key: "mainPic",
      render: (_text,record) => {
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
      render: (text) => {
        return (
          <div className="cartCount">
            <div className='btn' onClick={changebuttonCount}>
              -
            </div>
            <InputNumber
              value={count}
              style={{ textAlign: "center",margin: '0 12px',width: '72px' }}
              bordered={false}
              onChange={changeCount}
              min={1}
            />
            <div
              className='btn'
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </div>
          </div>
        );
      },
    },
    {
      title: "小计(元)",
      align: "center",
      render: (_, record) => {
        return (
          <div>
            ￥{record.num}* {record.priceText}
          </div>
        );
      },
    },
    {
      title: "操作",
      render: (_, record) => {
        return (
          <div>
            <div onClick={() => goOtherClick(1, record)}>删除</div>
            <div onClick={() => goOtherClick(2, record)}>预约提醒</div>
          </div>
        );
      },
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };
  return (
    <Table
      columns={columns}
      rowKey={(record) => record.id}
      dataSource={shoppCardList}
      pagination={false}
      rowSelection={{
        type: "checkbox",
        ...rowSelection,
      }}
    />
  );
});
export default MainTable;
