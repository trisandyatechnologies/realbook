"use client";
import React, { useEffect } from "react";
import {
  Flex,
  Progress,
  Typography,
  Card,
  Row,
  Col,
  Space,
  List,
  Avatar,
  theme,
} from "antd";
import { useStore } from "@/lib/prospectStore";

import { Prospect } from "@prisma/client";

export default function Contentpage(props: { data: Prospect }) {
  const status = [
    { status: "Created ", range: 20 },

    { status: "Bought", range: 20 },
    { status: "Dropped ", range: 20 },
  ];
  const { data = [] } = props;
  const prospects = useStore((s) => s.prospectsList);
  const setProspects = useStore((s) => s.setProspectsList);

  useEffect(() => {
    setProspects();
  }, []);

  const {
    token: { padding, margin },
  } = theme.useToken();
  return (
    <main>
      <Flex
        wrap="wrap"
        style={{
          padding: padding,
          margin: margin,
        }}
      >
        {status?.map((item, i) => (
          <Card style={{ width: 250, margin: margin }}>
            <Flex>
              <Flex vertical>
                <Typography>Prospect For{item.status}</Typography>

                <Typography>{item.range} </Typography>
              </Flex>

              <Flex gap="small" wrap="wrap">
                <Progress
                  size={50}
                  type="circle"
                  percent={20}
                  format={(percent) => `${percent}`}
                />
              </Flex>
            </Flex>
          </Card>
        ))}
      </Flex>

      <Row>
        <Col xs={12} lg={12}></Col>
        <Col xs={12} lg={12}>
          {prospects?.map((prospect, i) => (
            <List itemLayout="vertical">
              <Space>
                <List.Item style={{ display: "flex", flexDirection: "column" }}>
                  <Flex gap={10}>
                    <Avatar
                      style={{ height: 40, width: 40, borderRadius: "50%" }}
                      src={`https://thumbs.dreamstime.com/z/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg?ct=jpeg`}
                    />

                    <Typography>{prospect.name}</Typography>
                  </Flex>
                </List.Item>
              </Space>
            </List>
          ))}
        </Col>
      </Row>
    </main>
  );
}
