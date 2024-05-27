"use client";
import CompanyList from "@/components/CompanyList";
import Pagination from "@/components/common/Pagination";
import SearchInput from "@/components/common/SearchInput";
import { companyApi } from "@/lib/apis/company/companyApi";
import { useCompanyStore } from "@/lib/apis/company/companyStore";
import { PATHS } from "@/utils/constants";
import { usePageContextStore } from "@/utils/hooks/usePageContext";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Companies() {
  const setPageContext = usePageContextStore((s) => s.setContext);
  useEffect(() => {
    setPageContext("Companies");
  }, [setPageContext]);

  const getCompanies = useCompanyStore((s) => s.getCompanies);
  const companies = useCompanyStore((s) => s.records);
  const [q, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCompanies({ q, page });
  }, [getCompanies, q, page]);

  return (
    <div className="layout-content">
      <Card className="header-solid h-full ant-card-p-0 mb-24">
        <Row gutter={[24, 0]} className="ant-row-flex ant-row-flex-middle">
          <Col xs={24} md={8} lg={8}>
            <SearchInput
              searchApi={(q) =>
                companyApi
                  .findAll({ q })
                  .then((d) =>
                    d.data.map((o) => ({ label: o.name, value: o.id }))
                  )
              }
              getPath={(id) => `${PATHS.COMPANIES}/${id}`}
              onChange={setQuery}
            />
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
      <CompanyList data={companies?.data} />
      <Pagination total={companies?.total} onChange={setPage} />
    </div>
  );
}
