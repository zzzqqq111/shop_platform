import React, { useEffect } from 'react';
import { Title } from '@components';
import FormEdit from './form';
import TableBox from './table';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

const ProjectMessage = React.memo(() => {
  const { item = {}, list } = useSelector((state) => state.address);
  return (
    <div  className="orderAppBox">
      <Title backURl="/orderApprove" title="收货地址管理" />
      <p className={classNames('editTitle')}>新增收货地址</p>
      <FormEdit />
      <p className={classNames('editTitle')} data={list}>
        已有地址
      </p>
      <TableBox />
    </div>
  );
});

export default ProjectMessage;
