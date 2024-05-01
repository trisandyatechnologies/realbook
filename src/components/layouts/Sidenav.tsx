"use client";
import { appName } from "@/utils/config";
import {
  ApartmentOutlined,
  BankOutlined,
  ContactsOutlined,
  DashboardOutlined,
  LogoutOutlined,
  ProfileOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, Button, theme } from "antd";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidenav() {
  const {
    token: { colorBgContainer, colorPrimaryHover, colorPrimaryActive },
  } = theme.useToken();

  const color = colorPrimaryActive;
  const pathname = usePathname();

  return (
    <>
      <div className="brand">
        <span>{appName}</span>
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        <Menu.Item key="1">
          <Link href="/">
            <span
              className="icon"
              style={{
                background: pathname === "/" ? color : "",
              }}
            >
              <DashboardOutlined />
            </span>
            <span className="label">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="companies">
          <Link href="/companies">
            <span
              className="icon"
              style={{
                background: pathname.startsWith("/companies") ? color : "",
              }}
            >
              <ApartmentOutlined />
            </span>
            <span className="label">Companies</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/projects">
            <span
              className="icon"
              style={{
                background: pathname.startsWith("/projects") ? color : "",
              }}
            >
              <ApartmentOutlined />
            </span>
            <span className="label">Projects</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/agents">
            <span
              className="icon"
              style={{
                background: pathname.startsWith("/agents") ? color : "",
              }}
            >
              <UserOutlined />
            </span>
            <span className="label">Agents</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link href="/prospects">
            <span
              className="icon"
              style={{
                background: pathname.startsWith("/prospects") ? color : "",
              }}
            >
              <BankOutlined />
            </span>
            <span className="label">Prospects</span>
          </Link>
        </Menu.Item>
        <Menu.Item className="menu-item-header" key="5">
          Account Pages
        </Menu.Item>
        <Menu.Item key="6">
          <Link href="/profile">
            <span
              className="icon"
              style={{
                background: pathname.startsWith("/profile") ? color : "",
              }}
            >
              <ProfileOutlined />
            </span>
            <span className="label">Profile</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="8">
          <Link href="/settings">
            <span
              className="icon"
              style={{
                background: pathname.startsWith("/settings") ? color : "",
              }}
            >
              <SettingOutlined />
            </span>
            <span className="label">Settings</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link href="#" onClick={() => signOut({ redirect: false })}>
            <span className="icon">
              <LogoutOutlined />
            </span>
            <span className="label">Sign out</span>
          </Link>
        </Menu.Item>
      </Menu>
      <div className="aside-footer">
        <div
          className="footer-box"
          style={{
            background: color,
          }}
        >
          <span className="icon" style={{ color }}>
            <ContactsOutlined />
          </span>
          <h6>Need Help?</h6>
          <p>Please contact us</p>
          <Button type="primary" className="ant-btn-sm ant-btn-block">
            {appName}
          </Button>
        </div>
      </div>
    </>
  );
}
