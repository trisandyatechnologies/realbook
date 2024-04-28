import { useState, useEffect } from "react";

import {
  Row,
  Col,
  Breadcrumb,
  Badge,
  Dropdown,
  Button,
  List,
  Avatar,
  Input,
  Drawer,
  Typography,
  Switch,
  Flex,
  DrawerProps,
} from "antd";

import {
  SearchOutlined,
  StarOutlined,
  TwitterOutlined,
  FacebookFilled,
  UserOutlined,
  SettingFilled,
  BellFilled,
  ClockCircleFilled,
  CreditCardFilled,
  WifiOutlined,
  FileImageFilled,
} from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import usePageContext from "@/utils/hooks/usePageContext";

const data = [
  {
    title: "New message from Sophie",
    description: <>{<ClockCircleFilled />} 2 days ago</>,

    avatar: <FileImageFilled />,
  },
  {
    title: "New album by Travis Scott",
    description: <>{<ClockCircleFilled />} 2 days ago</>,

    avatar: <Avatar shape="square">{<WifiOutlined />}</Avatar>,
  },
  {
    title: "Payment completed",
    description: <>{<ClockCircleFilled />} 2 days ago</>,
    avatar: <Avatar shape="square">{<CreditCardFilled />}</Avatar>,
  },
];

const menu = (
  <List
    min-width="100%"
    className="header-notifications-dropdown "
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar shape="square" src={item.avatar} />}
          title={item.title}
          description={item.description}
        />
      </List.Item>
    )}
  />
);

interface HeaderProps {
  onPress: () => void;
  placement?: DrawerProps["placement"];
}

export default function Header({ placement, onPress }: HeaderProps) {
  const pathname = usePathname();
  const name = pathname.replace("/", "");

  const [visible, setVisible] = useState(false);

  useEffect(() => window.scrollTo(0, 0));

  const showDrawer = () => setVisible(true);
  const hideDrawer = () => setVisible(false);

  const { title, navItems } = usePageContext();

  return (
    <>
      {/* <Button className="setting-drwer" onClick={showDrawer}>
        <SettingFilled />
      </Button> */}
      <Row gutter={[24, 0]}>
        <Col span={24} md={6}>
          <Breadcrumb items={navItems} />
          <div className="ant-page-header-heading">
            <span
              className="ant-page-header-heading-title"
              style={{ textTransform: "capitalize" }}
            >
              {title}
            </span>
          </div>
        </Col>
        <Col span={24} md={18} className="header-control">
          <Badge size="small" count={4}>
            <Dropdown overlay={menu} trigger={["click"]}>
              <a
                href="#"
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <BellFilled />
              </a>
            </Dropdown>
          </Badge>
          <Button type="link" onClick={showDrawer}>
            <SettingFilled />
          </Button>
          <Button
            type="link"
            className="sidebar-toggler"
            onClick={() => onPress()}
          >
            JB
          </Button>
          <Drawer
            className="settings-drawer"
            mask={true}
            width={360}
            onClose={hideDrawer}
            placement={placement}
            open={visible}
          >
            <Flex vertical>
              <></>
            </Flex>
          </Drawer>
          <Link href="/profile" className="btn-sign-in">
            <UserOutlined />
            <span>Jyothi Babu Araja</span>
          </Link>
          <Input
            className="header-search"
            placeholder="Type here..."
            prefix={<SearchOutlined />}
          />
        </Col>
      </Row>
    </>
  );
}
