import React, { useEffect, useMemo, useContext, useState } from 'react';
import { Modal, Button } from 'antd';

const ModalBox = ({
  visible = false,
  sureClick = () => {},
  onCancel = () => {},
  content,
  okText = '确认添加',
  title = '',
  width = 1000,
}) => {
  return (
    <Modal
      visible={visible}
      width={width}
      title={title}
      onCancel={onCancel}
      footer={
        <div style={{ textAlign: 'center' }}>
          <Button type="primary" onClick={sureClick}>
            {okText}
          </Button>
          <Button onClick={onCancel}>取消</Button>
        </div>
      }
    >
      {content}
    </Modal>
  );
};
export default ModalBox;
