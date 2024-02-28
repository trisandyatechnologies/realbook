'use client'
import { Col, Flex, Layout, Row, Typography, theme } from 'antd';
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
            <Row style={{ display: 'Flex', justifyContent: 'space-evenly', padding: padding }}>
                <Col lg={11} xs={24} span={11} >
                    <img style={{ width: 500 }} src='https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                </Col>
                <Col lg={2} span={2}></Col>
                <Col lg={11} xs={24} span={11} style={{ padding: padding }}>
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
                <Col lg={11} xs={24} span={11} style={{ padding: padding }}>
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
                <Col lg={2} span={2}></Col>
                <Col lg={11} xs={24} span={11} >
                    <img style={{ width: 500 }} src='https://img.freepik.com/free-photo/view-land-plot-real-estate-business-development_23-2149916736.jpg?t=st=1709095701~exp=1709099301~hmac=92dab5e1c2d2410fd56ecec7dbbc7d9616f1fff8edca3ce0896c0f243527cc44&w=996' />
                </Col>
            </Row>
            <Row style={{ padding: padding }}>
                <Col lg={11} xs={24} span={11} >
                    <img style={{ width: 500 }} src='https://images.unsplash.com/photo-1628133287836-40bd5453bed1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                </Col>
                <Col lg={2} span={2}></Col>
                <Col lg={11} xs={24} span={11} style={{ padding: padding }}>
                    <Typography.Title level={2} >
                        Community Involvement
                    </Typography.Title>
                    <Typography>
                        At REALBOOK, we believe in giving back to the community that has supported us. Learn more about our community initiatives and how we are making a positive impact.
                    </Typography>
                </Col>
            </Row>
            <Row>
                <Col lg={11} xs={24} span={11} style={{ padding: padding }}>
                    <Typography.Title level={3}>
                        Signup and Add Ventures:
                    </Typography.Title>
                    <Typography>
                        Owners can easily sign up and showcase their real estate ventures on our platform. Whether it's residential, commercial, or a mix of both, our platform accommodates all types of properties.
                    </Typography>
                    <Typography.Title level={3}>
                        Invite and Manage Agents:
                    </Typography.Title>
                    <Typography>
                        Owners have the flexibility to invite multiple agents to collaborate on their ventures. Build a reliable team of agents to enhance your property's visibility and increase the chances of closing deals.
                    </Typography>
                    <Typography.Title level={3}>
                        Track Prospect Status:
                    </Typography.Title>
                    <Typography>
                        Owners can maintain sales buckets and monitor the progress of potential buyers. Our user-friendly interface allows owners to have a real-time view of the prospect status, ensuring informed decision-making.
                    </Typography><Typography.Title level={3}>
                        Approve Site Visit Requests:
                    </Typography.Title>
                    <Typography>
                        Agents can request site visits for interested prospects. Owners have the power to approve these requests, fostering a collaborative environment that accelerates the sales process.
                    </Typography><Typography.Title level={3}>
                        Convert Prospects into Buyers:
                    </Typography.Title>
                    <Typography>
                        As site visits are approved, prospects move through the sales funnel, transforming into confident buyers. Owners can witness the conversion journey firsthand, celebrating successful deals.
                    </Typography>
                </Col>
                <Col lg={2} span={2}></Col>
                <Col lg={11} xs={24} span={11} >
                    <img style={{ width: 600, height: 650 }} src="https://images.unsplash.com/photo-1580216643062-cf460548a66a?q=80&w=1867&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </Col>
            </Row>
            <Row style={{ padding: padding }}>
                <Col lg={11} xs={24} span={11} >
                    <img style={{ width: 600, height: 600 }} src='https://images.unsplash.com/photo-1587745890135-20db8c79b027?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                </Col>
                <Col lg={2} span={2}></Col>
                <Col lg={11} xs={24} span={11} style={{ padding: padding }}>
                    <Typography.Title level={2} >
                        Signup and Explore Ventures:
                    </Typography.Title>
                    <Typography>
                        Agents can easily sign up, creating a profile that highlights their expertise. Explore a diverse range of ventures listed on our platform and choose those that align with your skills and interests.
                    </Typography>
                    <Typography.Title level={2} >
                        Request to Serve Ventures:
                    </Typography.Title>
                    <Typography>
                        Agents have the freedom to request to serve specific ventures. Express your interest and demonstrate how you can contribute to the success of a particular property.
                    </Typography>
                    <Typography.Title level={2} >
                        Collaborate and Communicate:
                    </Typography.Title>
                    <Typography>
                        Once invited or approved, agents can collaborate closely with owners. Seamless communication tools ensure that everyone is on the same page, fostering a dynamic and efficient working relationship.
                    </Typography>
                    <Typography.Title level={2} >
                        Efficiently Manage Prospects:
                    </Typography.Title>
                    <Typography>
                        Agents can efficiently manage and track prospects assigned to them. Stay organized with our platform's prospect management features, helping you prioritize and convert leads effectively.
                    </Typography>
                </Col>
            </Row>
        </Layout >
    );
};

export default About;
