'use client'
import { Col, Flex, Image, Layout, Row, Typography } from 'antd';
import React from 'react';

const About = () => {
    return (
        <Layout >
            <Typography.Title level={2} style={{ display: 'flex', justifyContent: 'center', color: 'blue' }}>
                RealBook
            </Typography.Title>
            <Typography.Title level={2} style={{ display: 'flex', justifyContent: 'center', color: 'blue' }}>
                Who We Are
            </Typography.Title>
            <Row style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Col span={10} >
                    <Typography.Title level={2} style={{ color: 'blue' }}>
                        Global Presence
                    </Typography.Title>
                    <Typography.Title level={4}>
                        At REALBOOK, we understand that finding the perfect home or property is not just about the right features and price; it's about finding a place where dreams come to life and memories are made. As your dedicated real estate partner, we are committed to guiding you through every step of your real estate journey, ensuring a seamless and rewarding experience.
                    </Typography.Title>
                    <Typography.Title level={4}>
                        At REALBOOK, our mission goes beyond transactions; we are dedicated to redefining excellence in the real estate industry. We strive to create lasting relationships with our clients based on trust, integrity, and exceptional service. Whether you're a first-time homebuyer, a seasoned investor, or looking to sell your property, we are here to make your real estate goals a reality.
                    </Typography.Title>
                </Col>
                <Col span={2}></Col>
                <Col span={10} >
                    <Typography.Title level={2} style={{ color: 'blue' }}>
                        Responsibility
                    </Typography.Title>
                    <Typography.Title level={4}>
                        At REALBOOK, our mission goes beyond transactions; we are dedicated to redefining excellence in the real estate industry. We strive to create lasting relationships with our clients based on trust, integrity, and exceptional service. Whether you're a first-time homebuyer, a seasoned investor, or looking to sell your property, we are here to make your real estate goals a reality.
                    </Typography.Title>
                    <Typography.Title level={4}>
                        At REALBOOK, we understand that finding the perfect home or property is not just about the right features and price; it's about finding a place where dreams come to life and memories are made. As your dedicated real estate partner, we are committed to guiding you through every step of your real estate journey, ensuring a seamless and rewarding experience.
                    </Typography.Title>
                </Col>
            </Row>
            <Image style={{ width: "100%" }} src='https://png.pngtree.com/thumb_back/fh260/background/20210906/pngtree-high-tech-real-estate-blue-banner-technology-image_805815.jpg' />
            <Row style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Col span={10}>
                    <Typography.Title level={2} style={{ color: 'blue' }}>
                        Our Vision
                    </Typography.Title>
                    <Typography.Title level={4}>
                        At REALBOOK, we understand that finding the perfect home or property is not just about the right features and price; it's about finding a place where dreams come to life and memories are made. As your dedicated real estate partner, we are committed to guiding you through every step of your real estate journey, ensuring a seamless and rewarding experience.
                    </Typography.Title>
                    <Typography.Title level={4}>
                        At REALBOOK, our mission goes beyond transactions; we are dedicated to redefining excellence in the real estate industry. We strive to create lasting relationships with our clients based on trust, integrity, and exceptional service. Whether you're a first-time homebuyer, a seasoned investor, or looking to sell your property, we are here to make your real estate goals a reality.
                    </Typography.Title>
                </Col>
                <Col span={2}></Col>
                <Col span={10}>
                    <Typography.Title level={2} style={{ color: 'blue' }}>
                        Our Mission
                    </Typography.Title>
                    <Typography.Title level={4}>
                        At REALBOOK, our mission goes beyond transactions; we are dedicated to redefining excellence in the real estate industry. We strive to create lasting relationships with our clients based on trust, integrity, and exceptional service. Whether you're a first-time homebuyer, a seasoned investor, or looking to sell your property, we are here to make your real estate goals a reality.
                    </Typography.Title>
                    <Typography.Title level={4}>
                        At REALBOOK, we understand that finding the perfect home or property is not just about the right features and price; it's about finding a place where dreams come to life and memories are made. As your dedicated real estate partner, we are committed to guiding you through every step of your real estate journey, ensuring a seamless and rewarding experience.
                    </Typography.Title>
                </Col>
            </Row>
        </Layout >
    );
};

export default About;
