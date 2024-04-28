import prisma from "@/lib/prisma";
import { ProjectStatus } from "@prisma/client";
import { NextResponse } from "next/server";
export interface ProjectRequestParams {
  params: { projectId: string; status: ProjectStatus };
}

export async function GET(req: Request, { params }: ProjectRequestParams) {
  const projects = await prisma.project.findUnique({
    where: {
      id: params.projectId,
    },
  });
  return NextResponse.json(projects);
}

export async function PUT(req: Request, { params }: ProjectRequestParams) {
  const projectBody = await req.json();
  const projects = await prisma.project.update({
    data: projectBody,
    where: {
      id: params.projectId,
    },
  });
  return NextResponse.json(projects);
}

export async function PATCH(req: Request, { params }: ProjectRequestParams) {
  const projectBody = await req.json();
  const project = await prisma.project.update({
    data: projectBody,
    where: {
      id: params.projectId,
    },
  });
  return NextResponse.json(project);
}

export async function DELETE(req: Request, { params }: ProjectRequestParams) {
  const project = await prisma.project.delete({
    where: {
      id: params.projectId,
    },
  });
  return NextResponse.json(project);
}
