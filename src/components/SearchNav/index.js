import React, { useEffect, useState } from 'react';
import './index.less'
import { Button, Input } from 'antd';
import logo from '@images/global-logo.png';
import useIntersection from '@utils/useIntersection';
import classnames from 'classnames';

function Top(props) {

  return (<div className='topContainer'>
    <div className={classnames('contentBox','container')} >
      <img alt="logo" src={logo} />
      <span className='title'>全部商品分类</span>
      <>
        <Input className='input' />
        <Button className='button'>搜索</Button>
      </>
    </div>
  </div>)
};

function withFix(Component) {
  return () => {
    const [loadDoc, setLoadDoc] = useState(false);

    useEffect(() => {
      setLoadDoc(true)
    }, []);
    const { show: showTop } = useIntersection(document.querySelector('.top'), [loadDoc], true);

    const activeFix = !showTop ? ({
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9999
    }) : {};

    return (<div style={{ width: '100%', position: 'relative', zIndex: 1 }}>
      <div style={{ position: 'absolute', top: -2, left: 0, height: '2px', opacity: 0 }} className="top" />
      <div style={{ width: '100%', ...activeFix }} className="search-nav">
        <Component />
      </div>
    </div>)
  }
};

export default withFix(Top);













