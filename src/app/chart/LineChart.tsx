import { Layout, Typography } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import lineChart from "../../components/configs/lineChart";
import { Main } from "next/document";

function LineChart() {
  const { Title, Paragraph } = Typography;

  return (
    <Layout>
      <Typography className="linechart">
        <Typography>
          <Title level={5}>Active Users</Title>
          <Paragraph className="lastweek">
            than last week <span className="bnb2">+30%</span>
          </Paragraph>
        </Typography>
        <Typography className="sales">
          <ul>
            <li>{<MinusOutlined />} Traffic</li>
            <li>{<MinusOutlined />} Sales</li>
          </ul>
        </Typography>
      </Typography>

      <Typography
        className="full-width"
        // options={lineChart.options}
        // series={lineChart.series}
        style={{
          height: "350",
          width: "100%",
        }}
      />
    </Layout>
  );
}

export default LineChart;
