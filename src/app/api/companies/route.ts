import { companyService } from "@/lib/services/CompanyService";
import { getBaseQueryProps } from "@/utils/util";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const { ownerId, ...restData } = await req.json();

  const company = companyService.create(ownerId, restData);

  return NextResponse.json(company);
}

export async function GET(req: NextRequest, res: Response) {
  const query = getBaseQueryProps(req);

  const data = await companyService.findAll(query);

  return NextResponse.json(data);
}
