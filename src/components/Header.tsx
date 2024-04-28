"use client";
import React, { useEffect, useState } from "react";
import { Dropdown, Flex, Grid, Space, Typography } from "antd";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import {
  UserOutlined,
  BankOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useUserStore } from "@/lib/userStore";
import Title from "antd/es/skeleton/Title";

const { useToken } = theme;

const HeaderMenu: React.FC = () => {
  const { md } = Grid.useBreakpoint();

  const { data: session, status } = useSession();

  const isLoggedIn = session?.user.id;

  const { setUser, reset, user } = useUserStore((s) => s);

  useEffect(() => {
    if (status === "loading") return;
    if (session?.user.id && (!user || user.id !== session?.user.id)) {
      setUser(session?.user.id);
    }
  }, [session?.user.id, status]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  const profileMenuItems: MenuProps["items"] = [
    {
      key: "account",
      label: (
        <Link rel="noopener noreferrer" href="/account">
          <BankOutlined /> Account
        </Link>
      ),
    },
    {
      key: "signout",
      label: (
        <Space
          onClick={() => {
            reset();
            signOut();
          }}
        >
          <PoweroffOutlined /> Sign out
        </Space>
      ),
    },
  ];

  const items: MenuProps["items"] = [
    {
      key: "profile",
      icon: md && <UserOutlined />,
      label: (
        <Space>
          {isLoggedIn ? (
            <Dropdown menu={{ items: profileMenuItems }}>
              {md ? (
                <Typography style={{ color: "white" }}>
                  {session?.user.name}
                </Typography>
              ) : (
                <UserOutlined />
              )}
            </Dropdown>
          ) : (
            <Link href="/signin" style={{ color: "white", fontSize: 20 }}>
              Signin
            </Link>
          )}
        </Space>
      ),
    },
  ];

  return (
    <Flex
      justify="space-between"
      style={{ backgroundColor: "blue", padding: 10 }}
    >
      <Typography.Title style={{ color: "white", marginBottom: 0 }}>
        REAL BOOK
      </Typography.Title>
      <Menu
        mode="horizontal"
        items={items}
        style={{
          // flex: md ? 1 : 0,
          // justifyContent: "end",
          border: "none",
          display: "flex",
          backgroundColor: "blue",
        }}
        disabledOverflow
      />
    </Flex>
  );
};

export default HeaderMenu;
