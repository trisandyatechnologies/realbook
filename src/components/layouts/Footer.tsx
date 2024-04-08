"use client";
import { Layout, Row, Col, theme } from "antd";
import { HeartFilled } from "@ant-design/icons";
import Link from "next/link";
import { appName, parentName, parentSiteAddress } from "@/utils/config";

export default function Footer() {
  const { Footer: AntFooter } = Layout;
  const {
    token: { padding },
  } = theme.useToken();

  return (
    <AntFooter style={{ background: "#fafafa" }}>
      <Row className="just">
        <Col xs={24} md={12} lg={12}>
          <div className="copyright">
            © {new Date().getFullYear()}, made with
            {<HeartFilled />} by
            <a href="#pablo" className="font-weight-bold" target="_blank">
              {appName}
            </a>
            for a better web.
          </div>
        </Col>
        <Col xs={24} md={12} lg={12}>
          <div className="footer-menu">
            <ul>
              <li className="nav-item">
                <a
                  href={parentSiteAddress}
                  className="nav-link text-muted"
                  target="_blank"
                >
                  {parentName}
                </a>
              </li>
              <li className="nav-item">
                <Link
                  href="/about"
                  className="nav-link text-muted"
                  target="_blank"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/blog"
                  className="nav-link text-muted"
                  target="_blank"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#pablo"
                  className="nav-link pe-0 text-muted"
                  target="_blank"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </AntFooter>
  );
}
