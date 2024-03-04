"use client";
import React, { useEffect } from "react";
import { Layout, Flex, theme, Typography, Col } from "antd";
import HeaderPage from "./Header";
import Siderpage from "./Sider";
import Contentpage from "./Content";

import { useStore } from "@/lib/prospectStore";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",

  lineHeight: "64px",
  backgroundColor: "white",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 450,
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  width: "5%",
  backgroundColor: "white",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
};

const layoutStyle = {
  borderRadius: 8,
};
export default function Dashboard() {
  const prospectsList = useStore((s) => s.prospectsList);
  const setProspects = useStore((s) => s.setProspectsList);

  useEffect(() => {
    setProspects();
  }, []);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <main>
      <Layout style={layoutStyle}>
        <Col xs={0} lg={3}>
          <Sider style={siderStyle}>
            <Typography.Title level={2}>REAL BOOK</Typography.Title>
            <Siderpage />
          </Sider>
        </Col>
        <Layout>
          <Header style={headerStyle}>
            <HeaderPage />
          </Header>
          <Content style={contentStyle}>
            <Contentpage data={prospectsList} />
          </Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </main>
  );
}
