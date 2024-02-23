import prisma from "@/lib/prisma";
import { VentureStatus } from "@prisma/client";
import { NextResponse } from "next/server";
export interface ventureRequestParams {
  params: { requestId: string; status: VentureStatus };
  // export interface requestFormParams {
  //   params: { requestId: string };
}

export async function GET(req: Request, { params }: ventureRequestParams) {
  const ventures = await prisma.venture.findUnique({
    where: {
      id: params.requestId,
    },
  });
  return NextResponse.json(ventures);
}
export async function PUT(req: Request, { params }: ventureRequestParams) {
  const ventureBody = await req.json();
  const ventures = await prisma.venture.update({
    data: ventureBody,
    where: {
      id: params.requestId,
    },
  });
  return NextResponse.json(ventures);
}
export async function PATCH(req: Request, { params }: ventureRequestParams) {
  const ventureBody = await req.json();
  const venture = await prisma.venture.update({
    data: ventureBody,
    where: {
      id: params.requestId,
    },
  });
  return NextResponse.json(venture);
}
