import React, { useEffect, useMemo, useContext, useState } from 'react';
import { Table, Input, Button, Select } from 'antd';

const MainTable = ({
  data = [],
  columns = [],
  requestData = {},
  onChange = () => {},
  pagination = true,
  total = 0,
}) => {
  return (
    <Table
      columns={columns}
      rowKey={(record) => record.id}
      dataSource={data}
      pagination={
        pagination
          ? {
              showQuickJumper: true,
              showSizeChanger: true,
              current: requestData.pageNum || 1,
              pageSize: requestData.pageSize || 10,
              total: total || 0,
              onChange: (pageNum, pageSize) => {
                onChange({
                  pageNum,
                  pageSize,
                });
              },
              // onShowSizeChange: (current, pageSize) => {
              //   changeTab(pageSize, 'pageSize');
              // },
            }
          : false
      }
    />
  );
};
export default MainTable;
