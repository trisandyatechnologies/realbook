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
  Typography,
  message,
} from "antd";
import ImageUpload from "./ImageUpload";
import { useSession } from "next-auth/react";
import { createProject } from "@/lib/api";



const AddProject: React.FC = () => {
const [form] = Form.useForm();
// const { data: session} = useSession();
const onFinish = async(values: any) => {
  const project = await createProject({...values});
    if (project?.id) {
      message.success("Project added");
      form.resetFields();
    } else {
      message.error("Failed to add the project");
    }
};

  return (
    <>
      <Flex vertical>
        <Typography.Title style={{display:"flex",justifyContent:"center"}}>Add Project</Typography.Title>
        <Card
          style={{
            width:"100%",
            backgroundColor: "rgba(255,254,254,0.5)",
            backdropFilter: "blur(2px)",
          }}
        >
          <Form
            labelCol={{ span: 9 }}
            wrapperCol={{ span: 20 }}
            layout="horizontal"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            
            form={form}
          >
            <Flex justify="space-evenly" wrap="wrap">
            <Flex vertical>
            <Form.Item label="Title" name="title">
              <Input />
            </Form.Item>
            <Form.Item label="Description" name="description">
              <Input />
              </Form.Item>
              <Form.Item label="Category" name="category">
              <Select>
                <Select.Option value="Villas">Villas</Select.Option>
                <Select.Option value="Individual_Houses">Individual_Houses</Select.Option>
                <Select.Option value="Apartments">Apartments</Select.Option>
                <Select.Option value="Plots">Plots</Select.Option>
                <Select.Option value="Grouped_House">Grouped_House</Select.Option>
                <Select.Option value="Gated_Community">Gated_Community</Select.Option>
                <Select.Option value="Semi_Gated_Community">Semi_Gated_Community</Select.Option>
                <Select.Option value="Standalone_Building">Standalone_Building</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Images" name="images">
              <ImageUpload />
              </Form.Item>
              <Form.Item label="StartDate" name="startDate">
              <DatePicker />
            
            </Form.Item>
            <Form.Item label="Status" name="status">
              <Select>
                <Select.Option value="Available">Available</Select.Option>
                <Select.Option value="Sold_Out">Sold_Out</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Total Units" name="units">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Sold Units" name="soldUnits">
              <InputNumber />
            </Form.Item>
           
            
           
            </Flex>
            <Flex vertical>

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


            
            <Form.Item label="Location" name="location">
              <Input />
            </Form.Item>
            
            </Flex>
            </Flex>
            <Form.Item style={{display:"flex",justifyContent:"center"}}>
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

export default () => <AddProject />;
