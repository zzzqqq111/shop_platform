import React, { useEffect, useState } from "react";
import { FormContent } from "@components";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "antd";
import {
  addNewAddress,
  setDefaultOrderAddress,
  updateAddressInfo,
  updateItem,
} from "@redux/actions/addressAction";

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const formItemLayout1 = {
  labelCol: { span: 3 },
  wrapperCol: { span: 21 },
};
const FormEdit = React.memo((props) => {
  const dispatch = useDispatch();
  const { item = {} } = useSelector((state) => state.address);
  const [isDefault, setDefault] = useState(false);
  const onSubmit = (values, onReset) => {
    let data = {
      ...values,
      isDefault,
      userId: 57,
    };
    if (item.id) {
      data.id = item.id;
    }
    setDefault(false);
    dispatch(
      item.id
        ? updateAddressInfo(data, () => {
            onReset();
            dispatch(updateItem({ item: {} }));
          })
        : addNewAddress(data, () => {
            onReset();
            dispatch(updateItem({ item: {} }));
          })
    );
  };
  useEffect(() => {
    setDefault(item.isDefault || false);
    dispatch(updateItem({ item }));
  }, [item]);

  // 表单
  const content = [
    {
      num: 2,
      children: [
        {
          label: "收货人姓名",
          name: "person",
          formItemLayout,
          rules: [
            {
              required: true,
              message: `请输入收货人姓名!`,
            },
            {
              max: 12,
              message: `长度不超过12个字!`,
            },
          ],
        },
        {
          label: "收货人手机号",
          name: "phone",
          formItemLayout,
          rules: [
            {
              required: true,
              message: `请输入收货人手机号!`,
            },
            {
              pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
              message: "请输入正确的手机号",
            },
          ],
        },
      ],
    },
    {
      label: "详细地址",
      name: "address",
      formItemLayout: formItemLayout1,
      rules: [
        {
          required: true,
          message: `请输入收货人详细地址!`,
        },
      ],
    },
  ];

  const onChangeDefault = (e) => {
    let { checked } = e.target;
    setDefault(checked);
    if (item.id && checked) {
      dispatch(setDefaultOrderAddress({ id: item.id }));
    }
  };

  useEffect(() => {
    return () => {
      dispatch(updateItem({ item: {} }));
    };
  }, []);

  return (
    <FormContent
      columns={content}
      onSubmit={onSubmit}
      item={item}
      btnText="保存"
      btnChildren={
        <Checkbox
          onChange={onChangeDefault}
          style={{ marginRight: "24px" }}
          checked={isDefault}
        >
          设为默认
        </Checkbox>
      }
    />
  );
});

export default FormEdit;
