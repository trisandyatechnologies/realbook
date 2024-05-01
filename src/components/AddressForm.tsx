"use client";

import { Form, Input, Row, Col, Select, FormInstance } from "antd";
import { useAddressStore } from "@/lib/apis/external/addressStore";
import { useEffect } from "react";

const filterOption = (
  input: string,
  option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

interface AddressFormProps {
  form: FormInstance;
}

export default function AddressForm({ form }: AddressFormProps) {
  const {
    countries,
    states,
    cities,
    getCountries,
    getStates,
    getCities,
    reset,
  } = useAddressStore((s) => s);

  useEffect(() => {
    getCountries();
    return () => {
      reset();
    };
  }, [getCountries, reset]);

  return (
    <Row>
      <Col xs={24}>
        <Form.Item label="Door No." name={["address", "dno"]}>
          <Input />
        </Form.Item>
      </Col>
      <Col xs={24}>
        <Form.Item label="Street/Village" name={["address", "street"]}>
          <Input />
        </Form.Item>
      </Col>
      <Col xs={24}>
        <Form.Item label="Country" name={["address", "country"]} required>
          <Select
            showSearch
            placeholder="Select country"
            optionFilterProp="children"
            filterOption={filterOption}
            options={countries.map((d) => ({
              value: d,
              label: d,
            }))}
            onSelect={(country) => {
              getStates(country);
              form.setFieldValue(["address", "state"], "");
              form.setFieldValue(["address", "city"], "");
            }}
            size="large"
            // @ts-ignore
            autoComplete="new-password"
          />
        </Form.Item>
      </Col>
      <Col xs={24}>
        <Form.Item label="State" name={["address", "state"]} required>
          <Select
            showSearch
            placeholder="Select state"
            optionFilterProp="children"
            filterOption={filterOption}
            options={states.map((d) => ({
              value: d,
              label: d,
            }))}
            onSelect={(state) => {
              getCities(form.getFieldValue("address").country, state);
              form.setFieldValue(["address", "city"], "");
            }}
            size="large"
            // @ts-ignore
            autoComplete="new-password"
          />
        </Form.Item>
      </Col>
      <Col xs={24}>
        <Form.Item label="City" name={["address", "city"]} required>
          <Select
            showSearch
            placeholder="Select city"
            optionFilterProp="children"
            filterOption={filterOption}
            options={cities.map((d) => ({
              value: d,
              label: d,
            }))}
            size="large"
            // @ts-ignore
            autoComplete="new-password"
          />
        </Form.Item>
      </Col>
      <Col xs={24}>
        <Form.Item label="Survey No." name={["address", "survey"]}>
          <Input />
        </Form.Item>
      </Col>
      <Col xs={24}>
        <Form.Item label="Landmark" name={["address", "landmark"]}>
          <Input />
        </Form.Item>
      </Col>
      <Col xs={24}>
        <Form.Item label="PIN code" name={["address", "pin"]} required>
          <Input />
        </Form.Item>
      </Col>
    </Row>
  );
}
