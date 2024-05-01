"use client";

import {
  Button,
  Card,
  DatePicker,
  Flex,
  Form,
  Input,
  InputNumber,
  Row,
  Col,
  Select,
  Typography,
} from "antd";
import ImageUpload from "./ImageUpload";
import { companyApi } from "@/lib/apis/company/companyApi";
import useAuth from "@/utils/hooks/useAuth";
import AddressForm from "./AddressForm";
import { message } from "@/lib/notify";
import { useRouter } from "next/navigation";
import { PATHS } from "@/utils/constants";

export default function CompanyForm() {
  const [form] = Form.useForm();
  const { user } = useAuth();
  const router = useRouter();
  const onFinish = async (values: any) => {
    if (!user?.id) {
      message.error("User not authenticated.");
      return;
    }
    const company = await companyApi.create({ ...values, ownerId: user?.id });
    if (company?.id) {
      message.success("Company added, redirecting...");
      form.resetFields();
      setTimeout(() => {
        router.replace(`${PATHS.COMPANIES}/${company.id}`);
      }, 3000);
    } else {
      message.error("Failed to add the company");
    }
  };

  return (
    <Form
      labelCol={{ span: 9 }}
      wrapperCol={{ span: 20 }}
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      form={form}
      autoComplete="off"
    >
      <Row>
        <Col xs={24} md={16}>
          <Row>
            <Col xs={24}>
              <Form.Item label="Name" name="name" required>
                <Input placeholder="ABC Constructions" />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item label="Description" name="description">
                <Input.TextArea rows={4} />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Email" name="email">
                <Input placeholder="contact@abc.com" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Phone" name="phone">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item label="Company established date" name="startDate">
                <DatePicker />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item label="Logo" name="logo">
                <ImageUpload>Upload company logo</ImageUpload>
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item label="Cover photo" name="cover">
                <ImageUpload>Upload company cover photo</ImageUpload>
              </Form.Item>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={8}>
          <AddressForm form={form} />
        </Col>
      </Row>
      <Form.Item style={{ display: "flex", justifyContent: "center" }}>
        <Button type="primary" htmlType="submit" style={{ minWidth: 180 }}>
          Add company
        </Button>
      </Form.Item>
    </Form>
  );
}
