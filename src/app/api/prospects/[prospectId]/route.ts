import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export interface ProspectsParams {
  params: { prospectId: string };
}

export async function GET(req: Request, { params }: ProspectsParams) {
  const prospect = await prisma.prospect.findUnique({
    where: {
      id: params.prospectId,
    },
  });
  return NextResponse.json(prospect);
}

export async function PUT(req: Request, { params }: ProspectsParams) {
  const { id, ...prospectBody } = await req.json();
  const prospect = await prisma.prospect.update({
    data: prospectBody,
    where: {
      id: params.prospectId,
    },
  });
  return NextResponse.json(prospect);
}

export async function PATCH(req: Request, { params }: ProspectsParams) {
  const prospectBody = await req.json();
  const prospect = await prisma.prospect.update({
    data: prospectBody,
    where: {
      id: params.prospectId,
    },
  });
  return NextResponse.json(prospect);
}

export async function DELETE(req: Request, { params }: ProspectsParams) {
    const prospect = await prisma.prospect.delete({
      where: {
        id: params.prospectId,
      },
    });
    return NextResponse.json(prospect);
  }
