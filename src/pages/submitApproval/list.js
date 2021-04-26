import React, { useEffect } from "react";
import "./index.less";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import {
  updateItem,
  deleteAddress
} from "@redux/actions/addressAction";
import { useHistory } from "react-router-dom";
// 当前账户内容部分
const Address = React.memo((props) => {
  const { list = [] } = useSelector((state) => state.address);
  const history = useHistory()
  const dispatch = useDispatch();
  const updateAdressInfo = (record) => {
    dispatch(updateItem({item: record}))
    history.push('/orderApprove/detail')
  };
  const deleteAdd = (id) => {
    dispatch(deleteAddress({id}))
  };
  return (
    <div className="addresssBox">
      {list.map((item, index) => {
        if (index < 3) {
          return (
            <div
              className={classnames(
                "addressItem",
                item.isDefault ? "active" : "",
                "borderRadious_4"
              )}
              style={{position: 'relative'}}
              key={item.id}
            >
              <p>
                <span>{item.person}</span>
                <span>{item.phone}</span>
              </p>
              <div className="secPStyle">
                <div>{item.address}</div>
                {!item.isDefault && <div className="opeation">
                  <span onClick={()=>updateAdressInfo(item)}>修改</span>
                  <span onClick={()=>deleteAdd(item.id)}>删除</span>
                </div>}
              </div>
              {item.isDefault && <img src={require('@images/icon/add_check.png').default} className='checkStyle'/>}
            </div>
          );
        }
      })}
      <div
        className={classnames("addressItem", "borderRadious_4", "iconStyle")}
        onClick={() => {
          history.replace("/orderApprove/detail");
        }}
      >
        <img src={require("@images/icon/plus-circle.png").default} />
        添加新地址
      </div>
    </div>
  );
});
export default Address;
