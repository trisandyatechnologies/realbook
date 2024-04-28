"use client";
import { useStore } from "@/lib/useStore";
import { Prospect } from "@prisma/client";
import { Button, Card, Flex, Typography } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProspectsList(props: { prospects: Prospect }) {
  const { prospects = [] } = props;
  const prospectsList = useStore((s) => s.prospectsList);
  const setProspectsList = useStore((s) => s.setProspectsList);

  useEffect(() => {
    setProspectsList();
  }, []);

  const router = useRouter();
  const onClickhandler = () => {
    router.push("/new");
  };
  return (
    <Flex dir="vertical" wrap="wrap" style={{ flexGrow: 1 }}>
      {prospectsList?.map((prospect, i) => (
        <Card style={{ width: 500, margin: 5 }} key={i}>
          {/* <Typography>{prospect.id}</Typography> */}
          <Typography>
            {" "}
            <b>Name :</b> {prospect.name}
          </Typography>
          <Typography>
            <b>Phone number :</b> {prospect.phone}
          </Typography>
          {/* <Typography>{prospect.agentId}</Typography> */}
          {/* <Typography>{prospect.ventureId}</Typography> */}

          <Typography>
            {" "}
            <b>Address :</b> {prospect.address?.street}
            <Typography>{prospect.address?.city}</Typography>
            <Typography>{prospect.address?.country}</Typography>
            <Typography>{prospect.address?.state}</Typography>
            <Typography>{prospect.address?.village}</Typography>
          </Typography>
        </Card>
      ))}
      <Button
        onClick={onClickhandler}
        style={{
          background: "orange",
          color: "white",
          margin: 10,
          borderRadius: 7,
        }}
      >
        + New Prospect
      </Button>
    </Flex>
  );
}
