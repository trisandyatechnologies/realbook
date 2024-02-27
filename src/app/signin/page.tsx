'use client';
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Typography, theme } from 'antd';

// import Typography from 'antd/es/typography/Typography';
import Link from 'next/link';

const signin: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  const {
    token:{padding,margin},
  } = theme.useToken()

  return (
    <main style={{backgroundImage:`url("https://images.unsplash.com/photo-1500175173636-75508e87b107?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}}>
    <center style={{padding:'100px 400px'}}>
    <Form 
    
    style={{ padding:"0 100px",height:'400px',backgroundColor:'rgba(255,254,254,0.5)',backdropFilter:'blur(1px)',borderRadius:'20px'}}
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
        <Typography.Title level={3} style={{padding:padding}}> Signin</Typography.Title>
      <Form.Item
        name="Email"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input type='Email' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email or phone number" />
      </Form.Item>
      
      <Form.Item
      className='div'
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          minLength={8}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item style={{margin:'0 40px'}} name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link style={{color:'black'}} href="">
          Forgot password
        </Link>
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit" style={{ margin:'20px'}}>
          Log in
        </Button>
        Or <Link style={{ color:'black',margin:"0 10px"}} href="/signup">register now!</Link>
      </Form.Item>
    </Form>
    </center>
    </main>
  );
};

export default signin;