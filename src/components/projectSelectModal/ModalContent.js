import React, { useState } from 'react';
import { Select } from 'antd';
import { ModalBox } from '@components';
const { Option } = Select;
// 切换项目
const style= {
  modalContent:  {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    color: '#262626'
  },
  title: {
    marginRight: '25px',
    flex: 1
  }
}
const ModalContent = React.memo((props) => {
  const { projectModal, userProjectList = [], id, onCancel, sureClick } = props;
  const [proId, setProId] = useState(id);
  const modalConfig = {
    title: '切换项目',
    okText: '确认',
    visible: projectModal,
    onCancel: () => {
      onCancel()
    },
    sureClick: () => {
      sureClick(proId)
    },
    width: 542,
  };
  const changeProject = (value) => {
    setProId(value);
  };
  const conbody = (
    <div style={style.modalContent}>
      <p style={style.title}>选择切换项目</p>
      <Select
        defaultValue={proId}
        onChange={changeProject}
        style={{ width: '70%' }}
        placeholder="请选择项目"
        showSearch
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {userProjectList.map((item) => (
          <Option value={item.id} key={item.id}>
            {item.name}
          </Option>
        ))}
      </Select>
    </div>
  );
  return <ModalBox {...modalConfig} content={conbody} />;
});

export default ModalContent;
