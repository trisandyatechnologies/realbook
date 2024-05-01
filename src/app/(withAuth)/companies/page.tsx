"use client";
import ProfileCard from "@/components/common/ProfileCard";
import SearchCity from "@/components/common/SelectCity";
import SearchInput from "@/components/common/SearchInput";
import { useCompanyStore } from "@/lib/apis/company/companyStore";
import { PATHS } from "@/utils/constants";
import { usePageContextStore } from "@/utils/hooks/usePageContext";
import { getImage } from "@/utils/util";
import { PlusOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Card, Col, Image, Row, Typography, theme } from "antd";
import Link from "next/link";
import { useEffect } from "react";

const { Title, Text, Paragraph } = Typography;

export default function Companies() {
  const {
    token: { padding },
  } = theme.useToken();
  const setPageContext = usePageContextStore((s) => s.setContext);
  useEffect(() => {
    setPageContext("Companies");
  }, [setPageContext]);

  const getCompanies = useCompanyStore((s) => s.getCompanies);
  const companies = useCompanyStore((s) => s.companies);

  useEffect(() => {
    getCompanies();
  }, [getCompanies]);

  return (
    <div className="layout-content">
      <Card className="header-solid h-full ant-card-p-0 mb-24">
        <Row gutter={[24, 0]} className="ant-row-flex ant-row-flex-middle">
          <Col xs={24} md={8} lg={8}>
            <SearchCity />
          </Col>
          <Col xs={24} md={4} lg={8}></Col>
          <Col xs={24} md={12} lg={8} className="d-flex">
            <Link href={`${PATHS.NEW_COMPANY}`}>
              <Button type="primary" icon={<PlusOutlined />}>
                Add your company
              </Button>
            </Link>
          </Col>
        </Row>
      </Card>
      <Row gutter={[24, 24]}>
        {companies.map((company) => (
          <Col span={24} md={12} xl={6} key={company.id}>
            <ProfileCard
              cover={company.cover[0]}
              image={company.logo[0]}
              title={company.name}
              description={company.description ?? undefined}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
