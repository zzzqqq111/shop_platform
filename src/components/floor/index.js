import React, { useState, useEffect} from "react";
import "./index.less";
import { UpOutlined } from "@ant-design/icons";
import useIntersection from '@utils/useIntersection';

const FloorMenu = () => {
  const scrollToAnchor = (anchorName) => {
    if (anchorName) {
      // 找到锚点
      let anchorElement = document.getElementById(anchorName);
      // 如果对应id的锚点存在，就跳转到锚点
      if (anchorElement) {
        anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    } else {
      document.body.scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <a onClick={() => scrollToAnchor("market")}>集采商城</a>
      <a onClick={() => scrollToAnchor("rent")}>租赁平台</a>
      <a onClick={() => scrollToAnchor("project")}>项目管理</a>
      <a onClick={() => scrollToAnchor("news")}>公司新闻</a>
      <a onClick={() => scrollToAnchor("partnera")}>合作伙伴</a>
      <a onClick={() => scrollToAnchor()}>
        <UpOutlined />
        <br />
        顶部
      </a>
    </>
  );
};


function withFix(Component) {
  return () => {
    const [loadDoc, setLoadDoc] = useState(false);

    useEffect(() => {
      setLoadDoc(true)
    }, []);
    const { show: showTop } = useIntersection(document.querySelector('.contentBox1'), [loadDoc], true);

    const activeFix = !showTop ? ({
      position: 'fixed',
      top: 120,
      opacity: 1,
      left: 50
    }) : {};

    return (<div style={{ width: '100%', position: 'relative', zIndex: 1,background: 'red' }}>
      <div style={{ position: 'absolute', bottom: -300, left: 0, height: '500px', opacity: 0,background: 'red' }} className="contentBox1" />
      <div style={{ ...activeFix }} className="rightFixStyle">
        <Component />
      </div>
    </div>)
  }
};

export default withFix(FloorMenu)