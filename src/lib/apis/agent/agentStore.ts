import { Agent } from "@prisma/client";
import { create } from "zustand";
import { message } from "../../notify";
import { BaseStore } from "../common/types";
import { agentApi } from "./agentApi";

interface AgentStore extends BaseStore<Agent> {
  agent?: Agent;
  getAgent: (id: string) => void;
  updateAgent: (updateBody: Partial<Agent>) => void;
}

export const useAgentStore = create<AgentStore>((set, get) => ({
  getAgent: async (id) => {
    const agent = await agentApi.find(id);
    set({ agent });
  },
  updateAgent: async (update: Partial<Agent>) => {
    const agentId = get()?.agent?.id;
    if (!agentId) return;
    const updatedAgent = await agentApi.update(agentId, update);
    if (updatedAgent) {
      set({ agent: updatedAgent });
    } else {
      message.error("Failed to update agent.");
    }
  },
  reset: () => {
    set({ agent: undefined });
  },
}));
