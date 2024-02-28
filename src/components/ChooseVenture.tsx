"use client"
import React from 'react';
import { Col, Flex, Grid, Row, Typography, theme } from 'antd';


const ChooseVenture = () => {
  const {
    token: {padding,margin},
  }=theme.useToken();
  return (
    <Flex vertical style={{margin:margin*8}}>
      <Row gutter={[16, 16]} style={{alignItems:"center"}}>
        <Col xs={{ span: 24}} lg={{ span:5, offset: 1 }} style={{ backgroundImage: `url('/plots.jpeg')`, backgroundSize: 'cover', height: '200px' }}>
        <Typography.Title level={3} style={{color:"white"}}>plots</Typography.Title> 
        </Col>
        <Col xs={{ span: 24}} lg={{ span:5, offset: 1 }} style={{ backgroundImage: `url('/villa.jpeg')`, backgroundSize: 'cover', height: '200px' }}>
        <Typography.Title level={3}style={{color:"white"}} >villas</Typography.Title> 
        </Col>
        <Col xs={{ span:24}} lg={{ span: 5, offset: 1 }} style={{ backgroundImage: `url('/house.png')`, backgroundSize: 'cover', height: '200px' }}>
        <Typography.Title level={3} style={{color:"white"}}>Individual House</Typography.Title> 
        </Col>
       
        <Col xs={{ span:24}} lg={{ span: 5, offset: 1 }} style={{ backgroundImage: `url('/appartment.png')`, backgroundSize: 'cover', height: '200px' }}>
        <Typography.Title level={3} style={{color:"white"}}>Appartments</Typography.Title> 
        </Col>
      </Row>
      
      <Row gutter={[16, 16]} style={{alignItems:"center",marginTop:20}}>
      <Col xs={{ span:24}} lg={{ span: 5, offset: 1 }} style={{ backgroundImage: `url('/gated.png')`, backgroundSize: 'cover', height: '200px' }}>
        <Typography.Title level={3} style={{color:"white"}} >Gated communuty</Typography.Title> 
        </Col>

        <Col xs={{ span:24}} lg={{ span: 5, offset: 1 }} style={{ backgroundImage: `url('/group.jpeg')`, backgroundSize: 'cover', height: '200px' }}>
        <Typography.Title level={3} style={{color:"white"}} >Grouped House</Typography.Title> 
        </Col>
        <Col xs={{ span:24}} lg={{ span: 5, offset: 1 }} style={{ backgroundImage: `url('/semigated.jpeg')`, backgroundSize: 'cover', height: '200px' }}>
        <Typography.Title level={3} style={{color:"white"}} >Semi Gated communuty</Typography.Title> 
        </Col>
        <Col xs={{ span:24}} lg={{ span: 5, offset: 1 }} style={{ backgroundImage: `url('/stand.jpeg')`, backgroundSize: 'cover', height: '200px' }}>
        <Typography.Title level={3} style={{color:"white"}}>Standalone Building</Typography.Title> 
        </Col>
      </Row>
    </Flex>
  );
};

export default ChooseVenture;
