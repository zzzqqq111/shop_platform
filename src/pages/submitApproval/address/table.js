import React, { useEffect } from 'react';
import { MyButton } from '@components';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, Table } from 'antd';
import classNames from 'classnames';
import {
  deleteAddress,
  updateItem
} from "@redux/actions/addressAction";

const TableBox = React.memo((props) => {
  const { list = [] } = useSelector((state) => state.address);
  const dispatch = useDispatch()
  const updateAdressInfo = (record) => {
    dispatch(updateItem({item: record}))
  };
  const deleteAdd = (id) => {
    dispatch(deleteAddress({id}))
  };
  // 表格
  const columns = [
    {
      title: '收货人姓名',
      dataIndex: 'person',
      key: 'person',
    },
    {
      title: '收货人手机号',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '收货人地址',
      dataIndex: 'address',
      key: 'address',
      width: 450,
    },
    {
      title: '操作',
      width: 250,
      align: 'left',
      render: (_, record) => (
        <div className={classNames('flex_center')}>
          <div className={classNames('ope')}>
            <span onClick={() => updateAdressInfo(record)}>修改</span>
            <MyButton
              type="link"
              onClick={() => deleteAdd(record.id)}
              title="确认删除么"
              style={{ color: '#bfbfbf' }}
            >
              删除
            </MyButton>
          </div>
          {record.isDefault && (
            <Checkbox checked style={{ marginLeft: '24px', color: '#177AFF' }}>
              默认地址
            </Checkbox>
          )}
        </div>
      ),
    },
  ];

  return <Table dataSource={list} columns={columns} pagination={false}/>;
});

export default TableBox;
