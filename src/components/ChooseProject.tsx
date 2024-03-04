"use client";
import React from "react";
import { Col, Flex, Row, Typography, theme } from "antd";
import Link from "next/link";
import { ProjectCategory } from "@prisma/client";

const ChooseProject = () => {
  const {
    token: { padding, margin },
  } = theme.useToken();

  return (
    <Flex vertical style={{ alignItems: "center" }}>
      <Typography.Title>Choose Projects</Typography.Title>

      <Flex vertical style={{width:"100%"}}>
        <Row gutter={[16, 16]} style={{ alignItems: "center" }}>
          <Col xs={{ span: 24 }} lg={{ span: 5, offset: 1 }}>
            <Link href={`/projects/new?category=${ProjectCategory.Plots}`}>
              <Flex
                style={{
                  backgroundImage: `url('/plots.jpeg')`,
                  backgroundSize: "cover",
                  height: "200px",
                  color: "white",
                 justifyContent:"center",
                 fontSize:30
                }}
              >
                Plots
              </Flex>
            </Link>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 5, offset: 1 }}>
            <Link href={`/projects/new?category=${ProjectCategory.Villas}`}>
              <Flex
                style={{
                  backgroundImage: `url('/villa.jpeg')`,
                  backgroundSize: "cover",
                  height: "200px",
                  color: "white",
                  justifyContent:"center",
                  fontSize:30
                }}
              >
                Villas
              </Flex>
            </Link>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 5, offset: 1 }}>
            <Link
              href={`/projects/new?category=${ProjectCategory.Individual_Houses}`}
            >
              <Flex
                style={{
                  backgroundImage: `url('/house.png')`,
                  backgroundSize: "cover",
                  height: "200px",
                  color: "white",
                  justifyContent:"center",
                  fontSize:30
                }}
              >
                Individual House
              </Flex>
            </Link>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 5, offset: 1 }}>
            <Link href={`/projects/new?category=${ProjectCategory.Apartments}`}>
              <Flex
                style={{
                  backgroundImage: `url('/appartment.png')`,
                  backgroundSize: "cover",
                  height: "200px",
                  color: "white",
                  justifyContent:"center",
                  fontSize:30
                }}
              >
                Appartments
              </Flex>
            </Link>
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{ alignItems: "center", marginTop: 20 }}>
          <Col xs={{ span: 24 }} lg={{ span: 5, offset: 1 }}>
            <Link
              href={`/projects/new?category=${
                ProjectCategory.Gated_Community}`}
            >
              <Flex
                style={{
                  backgroundImage: `url('/gated.png')`,
                  backgroundSize: "cover",
                  height: "200px",
                  color: "white",
                  justifyContent:"center",
                  fontSize:30
                }}
              >
                Gated communuty
              </Flex>
            </Link>
          </Col>

          <Col
            xs={{ span: 24 }}
            lg={{ span: 5, offset: 1 }}
           
          >
            <Link
              href={`/projects/new?category=${ProjectCategory.Grouped_House}`}
            >
              <Flex  style={{
              backgroundImage: `url('/group.jpeg')`,
              backgroundSize: "cover",
              height: "200px",
              color: "white",
              justifyContent:"center",
              fontSize:30
            }}>Grouped House</Flex>
            </Link>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 5, offset: 1 }}>
            <Link
              href={`/projects/new?category=${ProjectCategory.Semi_Gated_Community}`}
            >
              <Flex
                style={{
                  backgroundImage: `url('/semigated.jpeg')`,
                  backgroundSize: "cover",
                  height: "200px",
                  color: "white",
                  justifyContent:"center",
                  fontSize:30
                }}
              >
                Semi Gated communuty
              </Flex>
            </Link>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 5, offset: 1 }}>
            <Link
              href={`/projects/new?category=${ProjectCategory.Standalone_Building}`}
            >
              <Flex
                style={{
                  backgroundImage: `url('/stand.jpeg')`,
                  backgroundSize: "cover",
                  height: "200px",
                  color: "white",
                  justifyContent:"center",
                  fontSize:30
                }}
              >
                Standalone Building
              </Flex>
            </Link>
          </Col>
        </Row>
      </Flex>
    </Flex>
  );
};

export default ChooseProject;
