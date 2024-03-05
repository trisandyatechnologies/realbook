import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export interface ventureParams{
    params :{ventureId:string};

}

export async function GET(req:Request,{params}:ventureParams) {
 const venture = await prisma.venture.findUnique({
    where :{
        id:params.ventureId
    }
 })
    return NextResponse.json(venture);
}

export async function PUT(req:Request,{params}:ventureParams) {
    const ventureBody = await req.json();
    const venture = await prisma.venture.update({
        data:ventureBody,
        where:{
            id:params.ventureId
        }
    })
    return NextResponse.json(venture)
}