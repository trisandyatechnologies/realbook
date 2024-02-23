// pages/about.js
import { BulbFilled, FacebookFilled, TwitterOutlined, TwitterSquareFilled, YoutubeFilled } from '@ant-design/icons';
import { Col, Flex, Image, Layout, Row, Typography } from 'antd';
import { url } from 'inspector';
import React from 'react';
import { flushSync } from 'react-dom';

const About = () => {
    return (
        <Layout >

            <Typography style={{ display: 'flex', justifyContent: 'center', fontSize: 30, color: 'blue' }}>
                <b> RealBook </b>

            </Typography>
            <br />

            <Typography style={{ display: 'flex', justifyContent: 'center', fontSize: 30, color: 'blue' }}>
                <b> Who We Are </b>


            </Typography>

            <Row>
                <Col style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Col span={10} >
                        <Typography>
                            <h2 style={{ color: 'blue' }}>Global Presence
                            </h2>
                            <br />
                            <br />
                            <Typography style={{ fontSize: 20, color: 'blue' }}>
                                At REALBOOK, we understand that finding the perfect home or property is not just about the right features and price; it's about finding a place where dreams come to life and memories are made. As your dedicated real estate partner, we are committed to guiding you through every step of your real estate journey, ensuring a seamless and rewarding experience.
                            </Typography>
                            <Typography style={{ fontSize: 20 }}>

                                At REALBOOK, our mission goes beyond transactions; we are dedicated to redefining excellence in the real estate industry. We strive to create lasting relationships with our clients based on trust, integrity, and exceptional service. Whether you're a first-time homebuyer, a seasoned investor, or looking to sell your property, we are here to make your real estate goals a reality.
                            </Typography>
                        </Typography>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={10} >
                        <Typography>
                            <h2 style={{ color: 'blue' }}>Responsibility</h2>

                            <br />
                            <br />
                            

                            <Typography style={{ fontSize: 20 }}>
                                At REALBOOK, our mission goes beyond transactions; we are dedicated to redefining excellence in the real estate industry. We strive to create lasting relationships with our clients based on trust, integrity, and exceptional service. Whether you're a first-time homebuyer, a seasoned investor, or looking to sell your property, we are here to make your real estate goals a reality.
                            </Typography>

                            <Typography style={{ fontSize: 20 }}>
                                At REALBOOK, we understand that finding the perfect home or property is not just about the right features and price; it's about finding a place where dreams come to life and memories are made. As your dedicated real estate partner, we are committed to guiding you through every step of your real estate journey, ensuring a seamless and rewarding experience.

                            </Typography>


                        </Typography>
                    </Col>
                </Col>
            </Row>

            <Row>
                <Image style={{ width: 1500 }} src='https://png.pngtree.com/thumb_back/fh260/background/20210906/pngtree-high-tech-real-estate-blue-banner-technology-image_805815.jpg' />
            </Row>
            <Row>
                <Col style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Col span={10}><Typography>
                        <h2 style={{ color: 'blue' }}>Our Vision
                        </h2>
                        <br />
                        <br />
                        <Typography style={{ fontSize: 20, color: 'blue' }}>
                            At REALBOOK, we understand that finding the perfect home or property is not just about the right features and price; it's about finding a place where dreams come to life and memories are made. As your dedicated real estate partner, we are committed to guiding you through every step of your real estate journey, ensuring a seamless and rewarding experience.
                        </Typography>
                        <Typography style={{ fontSize: 20 }}>
                            At REALBOOK, our mission goes beyond transactions; we are dedicated to redefining excellence in the real estate industry. We strive to create lasting relationships with our clients based on trust, integrity, and exceptional service. Whether you're a first-time homebuyer, a seasoned investor, or looking to sell your property, we are here to make your real estate goals a reality.
                        </Typography>
                    </Typography> </Col>
                    <Col span={2}></Col>
                    <Col span={10}>
                        <Typography>
                            <h2 style={{ color: 'blue' }}>Our Mission
                            </h2>

                            <br />
                            <br />
                            <Typography style={{ fontSize: 20 }}>
                                At REALBOOK, our mission goes beyond transactions; we are dedicated to redefining excellence in the real estate industry. We strive to create lasting relationships with our clients based on trust, integrity, and exceptional service. Whether you're a first-time homebuyer, a seasoned investor, or looking to sell your property, we are here to make your real estate goals a reality.


                            </Typography>

                            <Typography style={{ fontSize: 20 }}>
                                At REALBOOK, we understand that finding the perfect home or property is not just about the right features and price; it's about finding a place where dreams come to life and memories are made. As your dedicated real estate partner, we are committed to guiding you through every step of your real estate journey, ensuring a seamless and rewarding experience.

                            </Typography>




                        </Typography>
                    </Col>
                </Col>
            </Row>

        </Layout>
    );
};

export default About;
