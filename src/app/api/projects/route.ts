import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const ProjectBody = await req.json();
  const project = await prisma.project.create({
    data: ProjectBody, //{
    // user: {
    //   connect: {
    //     id: ventureBody.userId,
    //   },
    // },
    //},
  });
  return NextResponse.json(project);
}
export async function GET(req: Request, res: Response) {
  const projects = await prisma.project.findMany({});
  return NextResponse.json(projects);
}
