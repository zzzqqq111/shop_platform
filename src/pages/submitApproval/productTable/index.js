import React from "react";
import { Table } from "antd";
import { spuStatus } from "@utils/enum";

const MainTable = React.memo((props) => {
  const { dataList = [] } = props;
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
    },
    {
      title: "小计(元)",
      align: "center",
      render: (_, record) => {
        return <div>￥{record.totalPrice}</div>;
      },
    },
  ];
  return (
    <Table
      columns={columns}
      rowKey={(record) => record.id}
      dataSource={dataList}
      pagination={false}
    />
  );
});
export default MainTable;
