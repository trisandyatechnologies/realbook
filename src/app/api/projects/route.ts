import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const data = await req.json();
  const project = await prisma.project.create({
    data,
  });
  return NextResponse.json(project);
}

export async function GET(req: Request, res: Response) {
  const projects = await prisma.project.findMany({});
  return NextResponse.json(projects);
}
