import prisma from "@/lib/prisma";
<<<<<<< HEAD
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
    const { ...restOfUser } = await req.json();
    const prospect = await prisma.prospect.create({
      data: restOfUser,
    });
    return NextResponse.json(prospect);
  }
  export async function GET(req: Request, res: Response) {
=======
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
>>>>>>> main
    const prospects = await prisma.prospect.findMany({});
    return NextResponse.json(prospects);
  }

<<<<<<< HEAD

// export async function POST(req: Request, res: Response) {
//   const engagementBody = await req.json();
//   const engagement = await prisma.engagement.create({
//     data: {
//       user: {
//         connect: {
//           id: engagementBody.userId,
//         },
//       },
//       item: {
//         connect: {
//           id: engagementBody.requestId,
//         },
//       },
//     },
//   });
//   return NextResponse.json(engagement);
// }
=======
  export async function POST(req: Request, res: Response) {
    const prospectBody = await req.json();
    const prospect = await prisma.prospect.create({
      data: prospectBody,
    });
    return NextResponse.json(prospect);
  }
>>>>>>> main
