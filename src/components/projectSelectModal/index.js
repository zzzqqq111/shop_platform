import React, { Fragment, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import ModalContent from './ModalContent'

const ProModal = React.memo((props) => {
    console.log(props)
  const [visible, setVisible] = useState(false);
  const {projectList = []} = useSelector(state=>state.shop)
  const onChange = () => {
    setVisible(!visible)
  };
  const sureClick = (id) => {
    window.localStorage.setItem("projectId", id);
    onChange();
  };
  return (
    <Fragment>
      <div className="changeProject" style={props.styles} onClick={onChange}>
        采购项目：测试AAA&nbsp;
        <DownOutlined style={{ fontSize: "10px", marginTop: "3px" }} />
      </div>
      {visible && (
        <ModalContent
          projectModal={visible}
          userProjectList={projectList}
          onCancel={onChange}
          sureClick={sureClick}
          id={window.localStorage.getItem("projectId")}
        />
      )}
    </Fragment>
  );
});

export default ProModal;
