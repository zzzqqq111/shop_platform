import classnames from "classnames";
import React, { Component, Fragment } from "react";
import '../index.less'
const Category = React.memo(() => {
  const categorys = [
    {
      name: "建筑钢材",
      thirdCates: ["钢板/卷", "螺纹钢", "工字钢", "钢格板/配件", "生产辅料"],
    },
    {
      name: "建筑钢材",
      thirdCates: ["钢板/卷", "螺纹钢", "工字钢", "钢格板/配件", "生产辅料"],
    },
    {
      name: "建筑钢材",
      thirdCates: ["钢板/卷", "螺纹钢", "工字钢", "钢格板/配件", "生产辅料"],
    },
    {
      name: "建筑钢材",
      thirdCates: ["钢板/卷", "螺纹钢", "工字钢", "钢格板/配件", "生产辅料"],
    },
    {
      name: "建筑钢材",
      thirdCates: ["钢板/卷", "螺纹钢", "工字钢", "钢格板/配件", "生产辅料"],
    },
  ];
  return (
    <div className={classnames('category')}>
      {categorys.map((cate) => {
        return (
          <div
            style={{
              height: "20%",
              paddingTop: '16px'
            }}
          >
            <div style={{ fontSize: 16 }}>{cate.name}</div>
            <div
              style={{
                fontSize: 14,
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {cate.thirdCates.map((cate) => {
                return <div style={{ marginRight: '16px' }}>{cate}</div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
});
export default Category