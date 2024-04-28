import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

type AgentRequestParams = {
  params: {
    agentId: string;
  };
};

export async function GET(req: Request, { params }: AgentRequestParams) {
  const agent = await prisma.agent.findUnique({
    where: {
      id: params.agentId,
    },
  });
  if (!agent)
    return NextResponse.json({ error: "Agent not found" }, { status: 404 });

  return NextResponse.json(agent);
}

export async function PUT(req: Request, { params }: AgentRequestParams) {
  const { id, ...restOfAgent } = await req.json();
  const data = restOfAgent;
  const agent = await prisma.agent.update({
    data,
    where: {
      id: params.agentId,
    },
  });
  return NextResponse.json(agent);
}
