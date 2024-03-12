"use client";
import { App, ConfigProvider, Grid, Skeleton, theme } from "antd";
import Notify from "@/lib/notify";
import { Layout, Flex, Typography } from "antd";
import { SessionProvider } from "next-auth/react";
import HeaderMenu from "@/components/Header";
const { Content } = Layout;

const layoutStyle = {
  overflow: "hidden",
  width: "100%",
};

export default function Template({ children }: { children: React.ReactNode }) {
  const {
    token: { borderRadiusSM, colorBgContainer, padding },
  } = theme.useToken();

  const { md } = Grid.useBreakpoint();

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: borderRadiusSM,
          padding: md ? padding : padding / 2,
        },
      }}
    >
      <App >
        <Notify />
        <SessionProvider>
          <Layout style={{ ...layoutStyle, background: colorBgContainer }}>
            <HeaderMenu/>
            <Content
              style={{
               minHeight: `calc(100vh )`,
                
              }}
            >
              {children}
            </Content>
            {/* <Footer /> */}
          </Layout>
        </SessionProvider>
      </App>
    </ConfigProvider>
  );
}