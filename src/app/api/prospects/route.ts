import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const prospects = await prisma.prospect.findMany({});
  return NextResponse.json(prospects);
}

export async function POST(req: Request, res: Response) {
  const { ...prospectBody } = await req.json();
  const prospect = await prisma.prospect.create({
    data: prospectBody,
  });
  return NextResponse.json(prospect);
}
