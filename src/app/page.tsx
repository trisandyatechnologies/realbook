"use client";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Sidenav from "@/components/layout/sidenav";
import Home from "@/app/home/page";
import { Col, Row } from "antd";

export default function Main() {
  return (
    <main>
      <Row>
        <Col span={6}>
          <Sidenav color="#fcfcfc" />
        </Col>
        <Col span={18}>
          <Header />
          <Home />
          <Footer />
        </Col>
      </Row>
    </main>
  );
}
