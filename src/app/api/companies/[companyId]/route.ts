import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
export interface CompanyRequestParams {
  params: { companyId: string };
}

export async function GET(req: Request, { params }: CompanyRequestParams) {
  const companys = await prisma.company.findUnique({
    where: {
      id: params.companyId,
    },
  });
  return NextResponse.json(companys);
}

export async function PUT(req: Request, { params }: CompanyRequestParams) {
  const data = await req.json();
  const company = await prisma.company.update({
    data,
    where: {
      id: params.companyId,
    },
  });
  return NextResponse.json(company);
}

export async function PATCH(req: Request, { params }: CompanyRequestParams) {
  const data = await req.json();
  const company = await prisma.company.update({
    data,
    where: {
      id: params.companyId,
    },
  });
  return NextResponse.json(company);
}

export async function DELETE(req: Request, { params }: CompanyRequestParams) {
  const company = await prisma.company.delete({
    where: {
      id: params.companyId,
    },
  });
  return NextResponse.json(company);
}
