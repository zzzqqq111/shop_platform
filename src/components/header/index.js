import React from "react";
import "./index.less";
import classnames from "classnames";
import { BrowserRouter as Router, Link } from "react-router-dom";
import user from '@common/images/icon/user.png';

const TopNav = React.memo((props) => {
  let content = [
    {
      name: "企业官网",
      path: "www.baidu.com",
    },
    {
      name: "租赁平台",
      path: "www.baidu.com",
    },
    {
      name: "项目管理平台",
      path: "www.baidu.com",
    },
    {
      name: "APP",
      path: "www.baidu.com",
    },
    {
      name: "关于我们",
      path: "www.baidu.com",
    },
  ];

  return (
    <div className={classnames("boxBackground", "topHeight", "flex_center")}>
      <div className={classnames("contentBox", "flex_center")}>
        <div className={classnames("flex_center", "topLeft")}>
          <Router>
            {content.map((item) => (
              <Link to={item.path} key={item.name}>
                {item.name}
              </Link>
            ))}
          </Router>
        </div>
        <div className={classnames("flex_center", "topRight")}>
          <Router>
            <Link to="#"><img src={user} alt='' />测试用户</Link>
            <Link to="#">待收货</Link>
            <Link to="#">待发货</Link>
            <Link to="#"><img src={user} alt='' />消息提醒</Link>
            <Link to="#"><img src={user} alt='' />购物车</Link>
          </Router>
        </div>
      </div>
    </div>
  );
});

export default TopNav;
