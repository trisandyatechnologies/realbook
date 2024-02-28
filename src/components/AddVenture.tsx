"use client";

import {
  Button,
  Card,
  DatePicker,
  Flex,
  Form,
  Input,
  InputNumber,
  Select,
} from "antd";
import ImageUpload from "./ImageUpload";

const { TextArea } = Input;

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const AddVenture: React.FC = () => {
  return (
    <>
      <Flex
        justify="center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww")`,
          backgroundRepeat: "no-repeat",
          width: "100vw",
          backgroundSize:"cover"
        }}
      >
        <Card
          style={{
            width: 500,
            backgroundColor: "rgba(255,254,254,0.5)",
            backdropFilter: "blur(2px)",
          }}
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item label="Title" name="title">
              <Input />
            </Form.Item>
            <Form.Item label="Description" name="description">
              <Input />
            </Form.Item>
            <Form.Item label="Images" name="images">
              <ImageUpload />
            </Form.Item>
            <Form.Item label="Address" name="address">
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item label="StartDate" name="startDate">
              <DatePicker />
            </Form.Item>
            <Form.Item label="Location" name="location">
              <Input />
            </Form.Item>
            <Form.Item label="Status" name="status">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Category" name="category">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Total Units" name="units">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Sold Units" name="soldUnits">
              <InputNumber />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginLeft: 100 }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Flex>
    </>
  );
};

export default () => <AddVenture />;
