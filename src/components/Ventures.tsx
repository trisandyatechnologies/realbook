"use client";
import React from "react";
import { Card, Flex, Typography } from "antd";

const Ventures: React.FC = () => (
    
  <Flex vertical style={{ textAlign: "center"}}>
    <Typography.Title>Ventures</Typography.Title>
    <Flex justify="center">
      <Card bordered={false} style={{ maxWidth: "650px", width: "100%" }}>
        <Flex justify="space-between">
          <Typography.Title level={4}>title</Typography.Title>
          <Flex justify="center" gap={10}>
            <Typography>units</Typography>
            <Typography>sold units</Typography>
            <Typography>prospects</Typography>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  </Flex>
);

export default Ventures;
