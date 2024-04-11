import { Prospect } from "@prisma/client";
import { create } from "zustand";
import { message } from "../../notify";
import { BaseStore } from "../common/types";
import { prospectApi } from "./prospectApi";

interface ProspectStore extends BaseStore<Prospect> {
  prospect?: Prospect;
  getProspect: (id: string) => void;
  updateProspect: (updateBody: Partial<Prospect>) => void;
}

export const useProspectStore = create<ProspectStore>((set, get) => ({
  getProspect: async (id) => {
    const prospect = await prospectApi.find(id);
    set({ prospect });
  },
  updateProspect: async (update: Partial<Prospect>) => {
    const prospectId = get()?.prospect?.id;
    if (!prospectId) return;
    const updatedProspect = await prospectApi.update(prospectId, update);
    if (updatedProspect) {
      set({ prospect: updatedProspect });
    } else {
      message.error("Failed to update prospect.");
    }
  },
  reset: () => {
    set({ prospect: undefined });
  },
}));
