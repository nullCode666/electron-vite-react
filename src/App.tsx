import { Button, Form, Image, Input } from "antd"

import LOGIN from '@/assets/login.png';

import "./App.less";

export default () => {

  const onFinish = () => {

  }

  const onFinishFailed = () => {

  }

  return (
    <div className="content">
      <h1 style={{ marginTop: "100px" }}>欢迎使用这个软件</h1>
      <Form
        name="login"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, margin: "40px 0" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="请输入开机密码"
          name="password"
          rules={[{ required: true, message: '请输入开机密码！！！' }]}
        >
          <Input />
        </Form.Item>
      </Form>
      <div className="footer">
        <Button type="default" htmlType="submit">
          联系作者
        </Button>
        <Button type="primary" htmlType="submit">
          登陆
        </Button>
      </div>
    </div>
  )

}