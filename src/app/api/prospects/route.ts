import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
    const { ...restOfUser } = await req.json();
    const prospect = await prisma.prospect.create({
      data: restOfUser,
    });
    return NextResponse.json(prospect);
  }
  export async function GET(req: Request, res: Response) {
    const prospects = await prisma.prospect.findMany({});
    return NextResponse.json(prospects);
  }
