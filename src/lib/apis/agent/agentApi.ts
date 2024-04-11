import { Agent } from "@prisma/client";
import BaseAPI from "../common/baseApi";

class AgentAPI extends BaseAPI<Agent> {}

export const agentApi = new AgentAPI("agents");
