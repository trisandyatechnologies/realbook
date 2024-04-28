import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const data = await req.json();
  const company = await prisma.company.create({
    data,
  });
  return NextResponse.json(company);
}

export async function GET(req: Request, res: Response) {
  const companys = await prisma.company.findMany({});
  return NextResponse.json(companys);
}
