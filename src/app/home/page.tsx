'use client';
import { Avatar, Card, Layout, Typography } from "antd";
import React from 'react';
import { EditOutlined, EllipsisOutlined, HomeOutlined, LaptopOutlined, LockOutlined, NotificationOutlined, PlusCircleOutlined, SettingOutlined, UnorderedListOutlined, UserAddOutlined, UserOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb,  Menu,  } from 'antd';
import { Footer, Header } from "antd/es/layout/layout";
import { Content } from "next/font/google";
import Sider from "antd/es/layout/Sider";
import Link from "next/link";

const { Meta } = Card;

export default function Home(){
    return(
        <Layout>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <div className="demo-logo" />
          <Typography.Title level={3} style={{alignItems:'center',color:'white',padding:'0 40%'}}>Your Projects</Typography.Title>
       <Link href="/signin"> <Typography style={{color:'white'}}><UserAddOutlined />Signin</Typography></Link> 
        </Header>
        <main >
          
          <Layout
            style={{ padding:' 70px 20px' , borderRadius: ' borderRadiusLG' }}
          >
            <Sider style={{backgroundColor:'white',height:'100%'}} width={200}>
              <Typography
                
                style={{   }}
            >
              
              <Typography.Title level={5} style={{padding:'10px'}}>
             <Link href="/home"> <HomeOutlined /> Home</Link>
              </Typography.Title>
              <Typography.Title level={5} style={{padding:'10px'}} >
              <UserOutlined /> Agents
              </Typography.Title>
              <Typography.Title level={5} style={{padding:'10px'}}>
              <UsergroupAddOutlined /> Prospects
              </Typography.Title>
              <Typography.Title level={5} style={{padding:'10px'}}>
              <UnorderedListOutlined /> List of Projects
              </Typography.Title>
              <Typography.Title level={5} style={{padding:'10px'}}>
              <PlusCircleOutlined /> Add project
              </Typography.Title>
              <Typography.Title level={5} style={{padding:'10px'}}>
              <LockOutlined/> Privacy Policy
              </Typography.Title>
              </Typography>
            </Sider>
            <main style={{ padding: '0 24px', minHeight: 280 }}>
               <Card
    style={{ width: 300 ,height:200}}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="project title"
      description="This is the description"
    />
  </Card></main>
          </Layout>
        </main>
        <Footer style={{ textAlign: 'center' }}>
          Trisndya  ©{new Date().getFullYear()} 
        </Footer>
      </Layout>   
    );
}