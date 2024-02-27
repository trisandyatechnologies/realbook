'use client';
import React, { useEffect, useState } from 'react';
import { EnvironmentOutlined, HeatMapOutlined, LockOutlined, PhoneOutlined, UserOutlined, YuqueOutlined } from '@ant-design/icons';
import { Button, Checkbox, Flex, Form, Input, Typography } from 'antd';
import Link from 'next/link';


const signup: React.FC = () => {
 


  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <main style={{ backgroundImage:`url("https://images.unsplash.com/photo-1500175173636-75508e87b107?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,height:'100vh'}}>
    <center style={{padding:'20px'}}>

    <Form 
    style={{ padding:'0 50px',backgroundColor:'rgba(255,254,254,0.5)',backdropFilter:'blur(2px)', borderRadius:'20px',width:'500px',height:'450px'}}
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Typography.Title level={4} style={{padding:'10px'}}> Signup</Typography.Title>
      <Flex >
      <Form.Item
      style={{marginRight:'5px'}}
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
      </Flex>
     
         <Form.Item
        name="Email ore phone number"
        rules={[{ required: true, message: ' email ' }]}
      >
        <Input type='Email' prefix={<PhoneOutlined  className="site-form-item-icon" />} placeholder="Email " />
      </Form.Item>
      <Flex >
      <Form.Item
      style={{marginRight:'5px'}}
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
      </Flex>
      <Form.Item
      className='div'
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input
        style={{marginTop:'0'}}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          minLength={8} 
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item style={{}}>
        
<Typography>Already have an account ?
  
        <Link className="login-form-forgot" style={{margin:"0 15px"}} href="/signin">
          Signin
        </Link>
        </Typography>
      </Form.Item>

      <Form.Item >
        <Button   htmlType="submit" >
          Signup
        </Button>
      
      </Form.Item>
    </Form>
    </center>
    </main>
  );
};

export default signup;   