'use client'
import { Col, Layout, Row, Typography, theme } from 'antd';
import React from 'react';


const About = () => {
    const {
        token: { padding },
    } = theme.useToken()

    return (
        <Layout >
            <Typography.Title level={2} style={{ display: 'flex', justifyContent: 'center' }}>
                <b> Welcome to REALBOOK
                </b>
            </Typography.Title>
            <Row style={{ padding: padding }}>
                <Col span={11}>
                    <img style={{ width: 500 }} src='https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                </Col>
                <Col span={2}></Col>
                <Col span={11} style={{ padding: padding }}>
                    <Typography.Title level={3} >
                        Meet Our Team
                    </Typography.Title>
                    <Typography>
                        Meet the dedicated professionals behind REALBOOK. Our team is comprised of experienced real estate agents with a deep understanding of the market. We work collaboratively to provide you with unparalleled service and expertise.
                    </Typography>
                    <Typography.Title level={3} >
                        Client Testimonials
                    </Typography.Title>
                    <Typography>
                        Don't just take our word for it. Hear what our clients have to say about their experiences with REALBOOK. Read our testimonials to discover the success stories of happy homeowners and investors.
                    </Typography>
                </Col>
            </Row>
            <Row style={{ padding: padding }}>
                <Col span={11} style={{ padding: padding }}>
                    <Typography.Title level={2} >
                        Our Story
                    </Typography.Title>
                    <Typography>
                        Established in 2024, REALBOOk has been a trusted name in the real estate industry. Our journey began with a passion for helping individuals and families find their ideal homes. Over the years, we've grown into a dedicated team of experienced real estate agents, brokers, and support staff.
                    </Typography>
                    <Typography.Title level={2} >
                        Our Mission and Values
                    </Typography.Title>
                    <Typography>
                        Our mission is to mission statement, and we achieve this by upholding our core values of values. These principles guide every interaction, transaction, and decision we make.
                    </Typography>
                </Col>
                <Col span={2}></Col>
                <Col span={11} >
                    <img style={{ width: 500 }} src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                </Col>
            </Row>
            <Row style={{ padding: padding }}>
                <Col span={11}>
                    <img style={{ width: 500 }} src='https://images.unsplash.com/photo-1628133287836-40bd5453bed1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                </Col>
                <Col span={2}></Col>
                <Col span={11} style={{ padding: padding }}>
                    <Typography.Title level={2} >
                        Community Involvement
                    </Typography.Title>
                    <Typography>
                        At REALBOOK, we believe in giving back to the community that has supported us. Learn more about our community initiatives and how we are making a positive impact.
                    </Typography>
                </Col>
            </Row>
            <Row>
                <Typography.Title level={2} >
                    How It Works
                </Typography.Title>

                <Typography >
                    Signup and Add Ventures:
                </Typography>
                <Typography>
                    At REALBOOK, we believe in giving back to the community that has supported us. Learn more about our community initiatives and how we are making a positive impact.
                </Typography>
            </Row>
        </Layout >
    );
};

export default About;
