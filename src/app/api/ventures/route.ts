import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
    const { ...restOfVentures } = await req.json();
    const venture = await prisma.venture.create({
      data: restOfVentures,
    });
    return NextResponse.json(venture);
  }
  export async function GET(req: Request, res: Response) {
    const ventures = await prisma.venture.findMany({});
    return NextResponse.json(ventures);
  }