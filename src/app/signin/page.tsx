"use client";
import React, { useEffect } from "react";
import {
  Layout,
  Menu,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Switch,
} from "antd";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { message } from "@/lib/notify";
import PublicLayout from "@/components/layouts/PublicLayout";

function onChange(checked: any) {
  console.log(`switch to ${checked}`);
}

const { Title } = Typography;
const { Content } = Layout;

export default function Signin() {
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace(searchParams.get("redirect") ?? "/");
    }
  }, [session, status, router, searchParams]);

  const onFinish = async (values: any) => {
    const { error: err, status } = (await signIn("credentials", {
      redirect: false,
      ...values,
    })) ?? { error: true };
    if (err || status === 401) {
      message.error("Email or password incorrect.");
    } else {
      router.replace(searchParams.get("redirect") ?? "/");
    }
  };

  return (
    <PublicLayout className="layout-signin">
      <Content className="signin">
        <Row gutter={[24, 0]} justify="space-around">
          <Col
            xs={{ span: 24, offset: 0 }}
            lg={{ span: 6, offset: 2 }}
            md={{ span: 12 }}
          >
            <Title className="mb-15">Sign In</Title>
            <Title className="font-regular text-muted" level={5}>
              Enter your email and password to sign in
            </Title>
            <Form onFinish={onFinish} layout="vertical" className="row-col">
              <Form.Item
                className="username"
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input type="Email" placeholder="Email" />
              </Form.Item>

              <Form.Item
                className="username"
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input minLength={8} placeholder="Password" type="password" />
              </Form.Item>

              <Form.Item
                name="remember"
                className="aligin-center"
                valuePropName="checked"
              >
                <Switch defaultChecked onChange={onChange} />
                Remember me
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  SIGN IN
                </Button>
              </Form.Item>
              <p className="font-semibold text-muted">
                Don't have an account?{" "}
                <Link href="/signup" className="text-dark font-bold">
                  Sign Up
                </Link>
              </p>
            </Form>
          </Col>
          <Col
            className="sign-img"
            style={{ padding: 12 }}
            xs={{ span: 24 }}
            lg={{ span: 12 }}
            md={{ span: 12 }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1680721445448-33ed9d682c3a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              style={{ height: "100%", borderRadius: "20px", margin: "0 auto" }}
            />
          </Col>
        </Row>
      </Content>
    </PublicLayout>
  );
}
