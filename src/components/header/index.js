import React from "react";
import "./index.less";
import classnames from "classnames";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import user from "@images/icon/user.png";
import { useSelector } from "react-redux";

const TopNav = React.memo((props) => {
  const { userInfo } = useSelector((state) => state.user);
  let history = useHistory()
  let content = [
    {
      name: "企业官网",
      path: "http://pre-new-saas.zxhj618.com/",
    },
    {
      name: "租赁平台",
      path: "https://www.baidu.com",
    },
    {
      name: "项目管理平台",
      path: "http://pre-saas-admin-web.zxhj618.com/",
    },
    {
      name: "APP",
      path: "https://www.baidu.com",
    },
    {
      name: "关于我们",
      path: "https://www.baidu.com",
    },
  ];

  const handleClick = path => {
    history.push(path)
  }
  return (
    <div className={classnames("boxBackground", "topHeight", "flex_center")}>
      <div className={classnames("contentBox", "flex_center")}>
        <div className={classnames("flex_center", "topLeft")}>
          {content.map((item) => (
            <a href={item.path} key={item.name} target="_blank">
              {item.name}
            </a>
          ))}
        </div>
        <div className={classnames("flex_center", "topRight")}>
          <Router>
            <Link to="#">
              <img src={user} alt="" />
              测试用户
            </Link>
            <Link to="#">待收货</Link>
            <Link to="#">待发货</Link>
            <Link to="#">
              <img src={user} alt="" />
              消息提醒
            </Link>
            <a onClick={()=>handleClick('/shoppingCard')}>
              <img src={user} alt="" />
              购物车
            </a>
          </Router>
        </div>
      </div>
    </div>
  );
});

export default TopNav;
