import React from "react";
import "./index.less";
import classnames from 'classnames'
import logo from '@common/images/logo.png';
// const data = {
//   联系商务: ['在线咨询：立即咨询', '商务邮箱：XXXXX@zxhj518.com','联系电话：1589963254798', '市场合作：XXXXX@zxhj518.com'],
//   技术支持: ['技术支持QQ：158965447', '技术支持邮箱：XXXXX@zxhj518.com'],
//   关于我们: ['公司介绍','加入我们','慧建网服务协议','隐私政策','信息安全承诺书'],
//   友情链接: ['百度','阿里云','广联达','建筑xxx']
// }

const FooterHome = () => {
  return (
    <div className={'boxBackground'}>
      <div className={classnames('contentBox','footerOther')}>
        <div className={classnames('itemTitle')}>
          友情链接：百度 | 阿里云 | 广联达
        </div>
        <div className={classnames('itemTitle')}>
          <span>关于我们</span>
          <span>公司介绍</span>
          <span>加入我们</span>
          <span>慧建网服务协议</span>
          <span>隐私政策</span>
          <span>信息安全承诺书</span>
        </div>
        <div className={classnames('itemTitle')}>
          <span>商务邮箱：XXXXX@zxhj518.com</span>
          <span>联系电话：1589963254798</span>
          <span>市场合作：XXXXX@zxhj518.com</span>
          <span>技术支持邮箱：XXXXX@zxhj518.com</span>
        </div>
        <img src={logo} />
        <div className={classnames('copyright')}>浙江中心会见</div>
      </div>
    </div>
  );
};
const FooterBox = () => {
  return <FooterHome />;
};
export default FooterBox;
