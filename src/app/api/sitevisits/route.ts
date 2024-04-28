import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const data = await req.json();
  const siteVisit = await prisma.siteVisit.create({
    data,
  });
  return NextResponse.json(siteVisit);
}

export async function GET(req: Request, res: Response) {
  const sites = await prisma.siteVisit.findMany({});
  return NextResponse.json(sites);
}
