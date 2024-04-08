"use client";
import React, { useEffect } from "react";
import { Layout, Menu, Typography, theme } from "antd";

import {
  TwitterOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuth from "@/utils/hooks/useAuth";
import { appName, parentLegalName, parentSiteAddress } from "@/utils/config";
const { Header, Footer, Content } = Layout;

export default function PublicLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();

  const { user, status } = useAuth();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [user, status, router]);

  const {
    token: { padding },
  } = theme.useToken();

  return (
    <Layout className={`layout-default ${className}`}>
      <Header>
        <div className="header-col header-brand">
          <h5>{appName}</h5>
        </div>
        <div className="header-col header-nav">
          <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link href="/dashboard">
                <span> Dashboard</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link href="/profile">
                <span>Profile</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link href="/signup">
                <span> Sign Up</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link href="/signin">
                <span> Sign In</span>
              </Link>
            </Menu.Item>
          </Menu>
        </div>
        <div className="header-col header-btn">{/* <Button></Button> */}</div>
      </Header>
      <Content className="p-0">{children}</Content>
      <Footer style={{ paddingBottom: padding }}>
        <Menu mode="horizontal">
          <Menu.Item>Company</Menu.Item>
          <Menu.Item>About Us</Menu.Item>
          <Menu.Item>Teams</Menu.Item>
          <Menu.Item>Products</Menu.Item>
          <Menu.Item>Blogs</Menu.Item>
          <Menu.Item>Pricing</Menu.Item>
        </Menu>
        <Menu mode="horizontal" className="menu-nav-social">
          <Menu.Item>
            <Link href="#">{<FacebookOutlined />}</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="#">{<TwitterOutlined />}</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="#">{<InstagramOutlined />}</Link>
          </Menu.Item>
        </Menu>
        <Typography className="copyright">
          © {new Date().getFullYear()}{" "}
          <a href={parentSiteAddress}>{parentLegalName}</a>
        </Typography>
      </Footer>
    </Layout>
  );
}
