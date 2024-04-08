"use client";
import React, { useEffect } from "react";
import { Button, Typography, Card, Form, Input, Checkbox, Flex } from "antd";
import {
  GoogleOutlined,
  FacebookOutlined,
  AppleOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Link from "next/link";

import { signIn, useSession } from "next-auth/react";
import { message } from "@/lib/notify";
import { useRouter } from "next/navigation";
import PublicLayout from "@/components/layouts/PublicLayout";

const { Title } = Typography;

export default function Signup() {
  const router = useRouter();

  const onFinish = async (values: any) => {
    const { error: err } = (await signIn("credentials", {
      isRegister: true,
      redirect: false,
      ...values,
    })) ?? { error: true };
    if (err) {
      message.error("Failed to create account, email/phone already exists.");
    } else {
      router.replace("/");
    }
  };

  return (
    <PublicLayout className="layout-sign-up">
      <Typography className="sign-up-header">
        <Typography className="content">
          <Title>Sign Up</Title>
        </Typography>
      </Typography>

      <Card
        className="card-signup header-solid h-full ant-card pt-0"
        title={<>Register With</>}
      >
        <Typography className="sign-up-gateways">
          <Button>
            <GoogleOutlined />
          </Button>
          <Button>
            <FacebookOutlined />
          </Button>
          <Button>
            <TwitterOutlined />
          </Button>
        </Typography>
        <p className="text-center my-25 font-semibold text-muted">Or</p>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className="row-col"
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input type="number" placeholder="Phone number" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input minLength={8} placeholder="Password" type="password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>
              I agree the{" "}
              <a href="#pablo" className="font-bold text-dark">
                Terms and Conditions
              </a>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button style={{ width: "100%" }} type="primary" htmlType="submit">
              SIGN UP
            </Button>
          </Form.Item>
        </Form>
        <p className="font-semibold text-muted text-center">
          Already have an account?{" "}
          <Link href="/signin" className="font-bold text-dark">
            Sign In
          </Link>
        </p>
      </Card>
    </PublicLayout>
  );
}
