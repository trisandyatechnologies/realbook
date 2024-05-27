"use client";
import ProfileCard from "@/components/common/ProfileCard";
import { Company } from "@prisma/client";
import { Col, Row } from "antd";

export default function CompanyList({ data = [] }: { data?: Company[] }) {
  return (
    <Row gutter={[24, 24]}>
      {data?.map((company) => (
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
  );
}
