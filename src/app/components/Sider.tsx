import React from "react";
import { Avatar, Col, List, Row } from "antd";
import {
  AppstoreOutlined,
  BankOutlined,
  BarChartOutlined,
  MailOutlined,
  StarOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import Typography from "antd/es/typography/Typography";

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
  <Row>
    <Col xs={5} lg={12}>
      <List
        itemLayout="horizontal"
        style={{ marginTop: 120  }}
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={item.icon}
                  style={{ color: "black", fontSize: 20 }}
                />
              }
              title={item.title}
              style={{ flex: 0, direction: "inherit" }}
            />
          </List.Item>
        )}
      />
    </Col>
  </Row>
);

export default Siderpage;
