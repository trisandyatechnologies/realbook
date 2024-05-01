"use client";
import { getImage } from "@/utils/util";
import { Avatar, Card, Col, Image, Row, Typography, theme } from "antd";

interface ProfileCardProps {
  title: string;
  cover?: string;
  image?: string;
  description?: string;
  footer?: React.ReactNode;
}

export default function ProfileCard({
  cover,
  image,
  title,
  description,
  footer,
}: ProfileCardProps) {
  const {
    token: { padding, fontSizeHeading4 },
  } = theme.useToken();
  return (
    <Card
      className="card-project"
      cover={
        cover && <Image src={getImage(cover)} alt={title} preview={false} />
      }
    >
      <div style={{ padding: padding, paddingTop: 0 }}>
        <div className="card-image" style={{ marginTop: -60 }}>
          {image && <Avatar size={64} src={getImage(image)} />}
        </div>
        {/* <div className="card-tag">{company.name}</div>  */}
        <Typography.Text style={{ fontSize: fontSizeHeading4 }} strong>
          {title}
        </Typography.Text>
        <p>{description}</p>
        <div className="card-footer">{footer}</div>
      </div>
    </Card>
  );
}
