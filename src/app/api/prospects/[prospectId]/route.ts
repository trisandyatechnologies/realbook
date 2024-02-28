import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";

export interface prospectParams{
    params:{prospectId:string}
};

export async function GET(req:Request,{params}:prospectParams) {
    const prospect = await prisma.prospect.findUnique({
        where:{
            id : params.prospectId,
        }
    });
    return NextResponse.json(prospect);
}