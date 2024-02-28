"use client";

import { createProspect } from "@/lib/api";
import { Button, Card, Col, Flex, Form, Input, Row, Typography, message } from "antd";
import { useSession } from "next-auth/react";
import ProspectsList from "./ProspectsList";
import { useRouter } from "next/navigation";
import { URL } from "url";
import { UserOutlined } from "@ant-design/icons";

export default function AddingProspect() {
  const [form] = Form.useForm();
  //    const { data: session } = useSession();
  const onFinish = async (values: any) => {
    const request = await createProspect({
      ...values,
      //  userId: session?.user?.name,
    });
    if (request?.id) {
      message.success("Prospect added");
      form.resetFields();
    } else {
      message.error("Failed to add the prospect");
    }
  };
  const router = useRouter();
  const onClickhandler = () => {
    router.push("/prospects");
  };

  return (
    <Flex
      justify="center"
      style={{
        backgroundImage: `url("/bgi4.jpg")`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
      }}
    >
      {/* <Flex><UserOutlined/></Flex> */}
     
      <Card
        style={{
          width: 500,
          backgroundColor: "rgba(255,254,254,0.5)",
          backdropFilter: "blur(3px)",
          margin: "20px 0",
        }}
      >
        <Form
          onFinish={onFinish}
          variant="filled"
          form={form}
          layout="vertical"
        >
          <Typography.Title
            style={{ display: "flex", justifyContent: "center" }}
          >
            Add New Prospect
          </Typography.Title>

          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input
              style={{ minWidth: "120px", maxWidth: "500px", borderRadius: 5 }}
            />
          </Form.Item>
          <Form.Item
            label="Phone number"
            name="phone"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input style={{ minWidth: "120px", borderRadius: 5 }} />
          </Form.Item>

          <Form.Item
            label="Agent ID"
            name="agentId"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input style={{ borderRadius: 5 }} />
          </Form.Item>

          {/* <Form.Item
        label="Address"
        name="address"
        rules={[{ required: false, message: "Please input!" }]}
      >
        <Input />
      </Form.Item> */}
          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: false, message: "Please input!" }]}
          >
            <Input style={{ borderRadius: 5 }} />
          </Form.Item>
          <Form.Item
            label="Site visits"
            name="siteVisits"
            rules={[{ required: false, message: "Please input!" }]}
          >
            <Input style={{ borderRadius: 5 }} />
          </Form.Item>
          {/*  */}
          <Form.Item
            label="Street"
            name={["address", "street"]}
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input
              placeholder="Street name / Place name"
              style={{ borderRadius: 5 }}
            />
          </Form.Item>
          <Form.Item
            label="Village"
            name={["address", "village"]}
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input
              placeholder="Street name / Place name"
              style={{ borderRadius: 5 }}
            />
          </Form.Item>
          <Form.Item
            label="City"
            name={["address", "city"]}
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input
              placeholder="Street name / Place name"
              style={{ borderRadius: 5 }}
            />
          </Form.Item>
          <Form.Item
            label="State"
            name={["address", "state"]}
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input
              placeholder="Street name / Place name"
              style={{ borderRadius: 5 }}
            />
          </Form.Item>
          <Form.Item
            label="Country"
            name={["address", "country"]}
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input
              placeholder="Street name / Place name"
              style={{ borderRadius: 5 }}
            />
          </Form.Item>
          <Form.Item
            label="Survey No"
            name={["address", "survey"]}
            rules={[{ required: false, message: "Please input your Name!" }]}
          >
            <Input
              placeholder="Street name / Place name"
              style={{ borderRadius: 5 }}
            />
          </Form.Item>
          <Form.Item
            label="Land mark"
            name={["address", "landmark"]}
            rules={[{ required: false, message: "Please input your Name!" }]}
          >
            <Input
              placeholder="Street name / Place name"
              style={{ borderRadius: 5 }}
            />
          </Form.Item>
          {/*  */}

          <Form.Item
            //wrapperCol={{ offset: 11, span: 15 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button type="primary" htmlType="submit" style={{ width: 90 }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Button onClick={onClickhandler}>Prospects list</Button>
      </Card>
    </Flex>
  );
}
