'use client';
import React from 'react';
import { HeatMapOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';


const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form 
    style={{padding:' 50px 500px'}}
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <h1 style={{textAlign:'center'}}> Signup</h1>
      <Form.Item
        name="First Name"
        rules={[{ required: true, message: 'Please input your First Name!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First Name" />
      </Form.Item>
      <Form.Item
        name="Last Name"
        rules={[{ required: true, message: 'Please input your LAst Name!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Last Name" />
      </Form.Item>
      <Form.Item
      className='div'
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
         <Form.Item
        name="Email ore phone number"
        rules={[{ required: true, message: ' email ore phone number!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email or Phone Number" />
      </Form.Item>
      <Form.Item
        name="location"
        rules={[{ required: true, message: ' email ore phone number!' }]}
      >
        <Input prefix={<HeatMapOutlined  className="site-form-item-icon" />} placeholder="adress" />
      </Form.Item>
      
        <Input
        style={{marginTop:'0'}}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        

        <a className="login-form-forgot" href="/signin">
          signin
        </a>
      </Form.Item>

      <Form.Item style={{marginLeft:'130px'}}>
        <Button  type="primary" htmlType="submit" >
          signup
        </Button>
      
      </Form.Item>
    </Form>
  );
};

export default App;