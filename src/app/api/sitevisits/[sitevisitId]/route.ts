import prisma from "@/lib/prisma";
import { SiteVisitStatus } from "@prisma/client";
import { NextResponse } from "next/server";

export interface SiteVistsParams {
  params: { sitevisitId: string, status:SiteVisitStatus};
}

export async function GET(req: Request, { params }: SiteVistsParams) {
  const siteVisit = await prisma.siteVisit.findUnique({
    where: {
      id: params.sitevisitId,
    },
  });
  return NextResponse.json(siteVisit);
}

export async function PUT(req: Request, { params }: SiteVistsParams) {
  const { id, ...siteVisitBody } = await req.json();
  const siteVisit = await prisma.siteVisit.update({
    data: siteVisitBody,
    where: {
      id: params.sitevisitId,
    },
  });
  return NextResponse.json(siteVisit);
}

export async function PATCH(req: Request, { params }: SiteVistsParams) {
  const siteVisitBody = await req.json();
  const siteVisit = await prisma.siteVisit.update({
    data: siteVisitBody,
    where: {
      id: params.sitevisitId,
    },
  });
  return NextResponse.json(siteVisit);
}

export async function DELETE(req: Request, { params }: SiteVistsParams) {
    const siteVisit = await prisma.siteVisit.delete({
      where: {
        id: params.sitevisitId,
      },
    });
    return NextResponse.json(siteVisit);
  }