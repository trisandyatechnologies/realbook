"use client";
import CompanyForm from "@/components/CompanyForm";
import SearchCity from "@/components/common/SelectCity";
import { PATHS } from "@/utils/constants";
import { usePageContextStore } from "@/utils/hooks/usePageContext";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Typography } from "antd";
import { useEffect } from "react";

const { Title, Text, Paragraph } = Typography;

export default function NewCompany() {
  const setPageContext = usePageContextStore((s) => s.setContext);
  useEffect(() => {
    setPageContext("Add New Company", [
      { title: "Companies", href: PATHS.COMPANIES },
      { title: "New" },
    ]);
  }, [setPageContext]);

  return (
    <div className="layout-content">
      <Card className="header-solid h-full ant-card-p-0 mb-24">
        <CompanyForm />
      </Card>
    </div>
  );
}
