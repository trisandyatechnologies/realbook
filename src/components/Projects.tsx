"use client";
import React, { useEffect } from "react";
import { Button, Card, Flex, Typography } from "antd";
import { useRouter } from "next/navigation";
import {  useProjectStore } from "@/lib/projectStore";




const Projects: React.FC = () => {
  const router = useRouter();

  const AddProject = () => {
    router.push(`/projects/choose`);
  };
const projects = useProjectStore((s) => s.projects);
const setProjects =useProjectStore((s)=>s.setProjects)
useEffect(()=>{
  setProjects()
})
  return (
    <Flex vertical style={{ textAlign: "center"}}>
      <Typography.Title>Projects</Typography.Title>
      <Flex justify="flex-end" style={{ padding: "0 10px" }}>
        <Button style={{ color: "blue" }} onClick={AddProject}>
          Add Project
        </Button>
      </Flex>
      <Flex justify="center">
     {projects.map((project,i) =>(
        <Card
          bordered={false}
          style={{ maxWidth: "650px", width: "100%", padding: 10 }}
        >
          <Flex justify="space-between">
            <Typography>{project.title}</Typography>
              <Typography>{project.units} Available units</Typography>
              <Typography>{project.soldUnits}  Units Sold</Typography>
              <Typography>prospects</Typography>
          </Flex>
        </Card>
             )
      
             )}
      </Flex>
    </Flex>
  );
};

export default Projects;
