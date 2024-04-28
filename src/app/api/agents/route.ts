import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const agents = await prisma.agent.findMany({});
  return NextResponse.json(agents);
}

export async function POST(req: Request, res: Response) {
  const { password, ...restOfUser } = await req.json();
  const agent = await prisma.agent.create({
    data: restOfUser,
  });
  return NextResponse.json(agent);
}
