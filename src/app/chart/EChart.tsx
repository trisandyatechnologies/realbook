import { Row, Col, Typography, Layout } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

function EChart() {
  const items = [
    {
      Title: "3,6K",
      user: "Users",
    },
    {
      Title: "2m",
      user: "Clicks",
    },
    {
      Title: "$772",
      user: "Sales",
    },
    {
      Title: "82",
      user: "Items",
    },
  ];

  return (
    <Layout>
      <Typography id="chart">
        <div className="bar-chart" style={{ height: "220" }} />
      </Typography>
      <Typography className="chart-vistior">
        <Title level={5}>Active Users</Title>
        <Paragraph className="lastweek">than last week +30% </Paragraph>
        <Paragraph className="lastweek">
          We have created multiple options for you to put together and customise
          into pixel perfect pages.
        </Paragraph>
        <Row>
          {items.map((v, index) => (
            <Col xs={6} xl={6} sm={6} md={6} key={index}>
              <div className="chart-visitor-count">
                <Title level={4}>{v.Title}</Title>
                <span>{v.user}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Typography>
    </Layout>
  );
}

export default EChart;
