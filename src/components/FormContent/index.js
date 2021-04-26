import React, { useEffect } from 'react';
import {
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  InputNumber,
} from 'antd';

const { Option } = Select;
const FormContent = ({
  columns,
  title,
  btnText = '确定创建',
  item,
  onSubmit = () => {},
  btnChildren = null,
}) => {
  const [form] = Form.useForm();
  let h = React.createElement;
  const components = {
    select: ({ label, list = [], callback = () => {} }) =>
      h(
        Select,
        { placeholder: label, onChange: (v) => callback(v) },
        list.map((c) => h(Option, { key: c.value, value: c.value }, c.label)),
      ),
    input: ({ label, disabled = false }) => (
      <Input placeholder={`请输入${label}`} disabled={disabled} key={label} />
    ),
    inputNumber: ({ label }) => (
      <InputNumber
        placeholder={`请输入${label}，必须是数字`}
        style={{ width: '100%' }}
        key={label}
      />
    ),
    datePicker: (n) => <DatePicker value={n[n.name]} {...n} key={n.label} />,
    customer: ({ CusComponent }) => <CusComponent />,
  };

  //重置要配合着const [form] = Form.useForm()以及form={form}
  const onReset = () => {
    form.resetFields();
  };
  // //form表单的回显
  useEffect(() => {
    form.setFieldsValue(item);
  }, [item]);

  // 显示formitem
  const content = (n) => {
    n.type = n.type ? n.type : 'input';
    return (
      <Form.Item
        label={n.label}
        name={n.name}
        rules={n.rules}
        key={n.name}
        colon={false}
        {...n.formItemLayout}
      >
        {components[n.type](n)}
      </Form.Item>
    );
  };

  const FormBody = (props) => {
    const { columns } = props;
    return columns.map((n, i) => {
      // 如果一行显示2行
      if (n.num && n.num > 1) {
        return (
          <Row key={n.name} key={i}>
            {n.children.map((item) => (
              <Col span={24 / n.num} key={item.name}>
                {content(item)}
              </Col>
            ))}
          </Row>
        );
      }
      // 只显示一行
      return content(n);
    });
  };

  const onFinish = (values) => {
    onSubmit(values, onReset);
  };

  return (
    <>
      <Form onFinish={onFinish} form={form}>
        <FormBody columns={columns} />
        <Form.Item style={{ textAlign: 'right' }}>
          {btnChildren}
          <Button type="primary" htmlType="submit">
            {btnText}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

FormContent.defaultProps = {
  formItemLayout: {
    wrapperCol: { span: 16 },
    labelCol: { span: 2 },
  },
};

export default FormContent;
