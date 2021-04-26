import React, { useEffect, useState } from "react";
import "./index.less";
import { Button, Input } from "antd";
import logo from "@images/global-logo.png";
import useIntersection from "@utils/useIntersection";
import classnames from "classnames";
import { useHistory } from "react-router-dom";
import ProModal from '../projectSelectModal'

function Top(props) {
  const {showTitle = true, showSearch= true, title='全部商品分类',content=null} = props
  let history = useHistory();
  const handleClick = () =>{
    history.push("/home");
  }
  return (
    <div className="topContainer">
      <div className={classnames("contentBox", "container")} style={{justifyContent: 'space-between'}}>
        <div style={{display: 'flex',alignItems: 'center'}}>
          <img
            alt="logo"
            src={logo}
            onClick={handleClick}
          />
          {showTitle && <span className="title">{title}</span>}
          {showSearch && <div style={{marginLeft: '164px'}}>
            <Input className="input" />
            <Button className="button">搜索</Button>
          </div>}
        </div>
        {content}
      </div>
    </div>
  );
}

function withFix(Component) {
  return () => {
    const [loadDoc, setLoadDoc] = useState(false);

    useEffect(() => {
      setLoadDoc(true);
    }, []);
    const { show: showTop } = useIntersection(
      document.querySelector(".top"),
      [loadDoc],
      true
    );

    const activeFix = !showTop
      ? {
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
        }
      : {};

    return (
      <div style={{ width: "100%", position: "relative", zIndex: 99 }}>
        <div
          style={{
            position: "absolute",
            top: -2,
            left: 0,
            height: "2px",
            opacity: 0,
          }}
          className="top"
        />
        <div style={{ width: "100%", ...activeFix }} className="search-nav">
          <Component />
        </div>
      </div>
    );
  };
}

export default Top
