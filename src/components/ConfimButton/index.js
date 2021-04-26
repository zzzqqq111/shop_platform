import React from 'react';
import { Button, Modal } from 'antd';
import PropTypes from 'prop-types';

const MyButton = ({ title, onClick, children, ...extra }) => {
  function confirm() {
    Modal.confirm({
      title: title,
      onOk: onClick,
      okText: '确认',
      cancelText: '取消',
    });
  }

  return (
    <>
      <span onClick={confirm} {...extra}>
        {children}
      </span>
    </>
  );
};
MyButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};

export default MyButton;
