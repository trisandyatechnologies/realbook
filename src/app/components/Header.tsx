"use client";
import { Col, Flex, Input, Row, Typography, theme } from "antd";
import { BellFilled } from "@ant-design/icons";
import { SearchProps } from "antd/es/input";

import { Avatar, List } from "antd";
const { Search } = Input;
const data = [
  {
    title: "tulasi",
    description: "Company Manager ",
  },
];

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);
export default function HeaderPage() {
  const {
    token: { padding, margin },
  } = theme.useToken();
  return (
    <Row>
      <Col xs={12} lg={12}>
        <Flex style={{ margin: margin }}>
          <Search
            placeholder="Search Property ,Prospect"
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </Flex>
      </Col>
      <Col xs={4} lg={6}></Col>
      <Col xs={8} lg={6}>
        <Flex style={{ textAlign: "center" }}>
          <BellFilled style={{ color: "black", fontSize: 25 }} />

          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      style={{ height: 40, width: 40, borderRadius: "50%" }}
                      src={`https://thumbs.dreamstime.com/z/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg?ct=jpeg=${index}`}
                    />
                  }
                  title={item.title}
                  // description={item.description}
                />
              </List.Item>
            )}
          />
        </Flex>
      </Col>
    </Row>
  );
}
