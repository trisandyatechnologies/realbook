import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const { ownerId, ...restData } = await req.json();
  const company = await prisma.company.create({
    data: {
      ...restData,
      owner: {
        connect: {
          id: ownerId,
        },
      },
    },
  });
  return NextResponse.json(company);
}

export async function GET(req: Request, res: Response) {
  const companies = await prisma.company.findMany({});
  return NextResponse.json(companies);
}
