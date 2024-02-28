import React from "react";
import { Avatar, List } from "antd";
import {
  AppstoreOutlined,
  BankOutlined,
  BarChartOutlined,
  MailOutlined,
  StarOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

const data = [
  {
    title: "Dashboard",
    icon: <AppstoreOutlined />,
  },
  {
    title: "Property",
    icon: <BankOutlined />,
  },
  {
    title: "Agents",
    icon: <UsergroupAddOutlined />,
  },
  {
    title: "Analytics",
    icon: <BarChartOutlined />,
  },
  {
    title: "Review",
    icon: <StarOutlined />,
  },
  {
    title: "Message",
    icon: <MailOutlined />,
  },
  {
    title: "MyProfile",
    icon: <UserAddOutlined />,
  },
];

const Siderpage: React.FC = () => (
  <List
    itemLayout="horizontal"
    style={{ marginTop: 120 }}
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar src={item.icon} style={{ color: "black", fontSize: 20 }} />
          }
          title={item.title}
          style={{ flex: 0, direction: "inherit" }}
        />
      </List.Item>
    )}
  />
);

export default Siderpage;
