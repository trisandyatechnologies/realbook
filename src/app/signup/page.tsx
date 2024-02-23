'use client';
import React, { useEffect, useState } from 'react';
import { EnvironmentOutlined, HeatMapOutlined, LockOutlined, PhoneOutlined, UserOutlined, YuqueOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';


const App: React.FC = () => {
 


  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <center style={{padding:'20px'}}>
    <Form 
    
    style={{ padding:'0 50px',background:" linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)", borderRadius:'20px',width:'500px',height:'500px'}}
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <h1 style={{padding:'10px'}}> Signup</h1>
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
        <Input prefix={<PhoneOutlined  className="site-form-item-icon" />} placeholder="Email or Phone Number" />
      </Form.Item>
      
      <Form.Item
        name="location"
        rules={[{ required: true, message: ' address!' }]}
      >
        <Input prefix={<HeatMapOutlined  className="site-form-item-icon" />} placeholder="Address" />
      </Form.Item>
      <Form.Item
        name="area"
        rules={[{ required: true, message: ' area!' }]}
      >
        <Input prefix={<EnvironmentOutlined  className="site-form-item-icon" />} placeholder="Area"/>
      </Form.Item>
      
        <Input
        style={{marginTop:'0'}}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item style={{marginLeft:'90%'}}>
        

        <a className="login-form-forgot" href="/signin">
          signin
        </a>
      </Form.Item>

      <Form.Item >
        <Button style={{width:'40%',backgroundColor:'#f69d3c'}}  htmlType="submit" >
          signup
        </Button>
      
      </Form.Item>
    </Form>
    </center>
  );
};

export default App;