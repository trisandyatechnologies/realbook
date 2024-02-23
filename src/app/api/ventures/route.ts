import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const ventureBody = await req.json();
  const venture = await prisma.venture.create({
    data: ventureBody, //{
    // user: {
    //   connect: {
    //     id: ventureBody.userId,
    //   },
    // },
    //},
  });
  return NextResponse.json(ventureBody);
}
export async function GET(req: Request, res: Response) {
  const ventures = await prisma.venture.findMany({});
  return NextResponse.json(ventures);
}
