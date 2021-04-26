import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Title = ({ title = '', backURl = '' }) => {
  return (
    <div className={classNames('flex', 'align_center', 'mb_24')}>
      <Link to={backURl} replace>
        <ArrowLeftOutlined style={{ fontSize: '16px', color: '#262626' }} />
      </Link>
      <span style={{ fontSize: '20px', marginLeft: '18px', color: '#262626' }}>
        {title}
      </span>
    </div>
  );
};

export default Title;
