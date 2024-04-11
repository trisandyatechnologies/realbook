import { Agency } from "@prisma/client";
import { create } from "zustand";
import { message } from "../../notify";
import { BaseStore } from "../common/types";
import { agencyApi } from "./agencyApi";

interface AgencyStore extends BaseStore<Agency> {
  agency?: Agency;
  getAgency: (id: string) => void;
  updateAgency: (updateBody: Partial<Agency>) => void;
}

export const useAgencyStore = create<AgencyStore>((set, get) => ({
  getAgency: async (id) => {
    const agency = await agencyApi.find(id);
    set({ agency });
  },
  updateAgency: async (update: Partial<Agency>) => {
    const agencyId = get()?.agency?.id;
    if (!agencyId) return;
    const updatedAgency = await agencyApi.update(agencyId, update);
    if (updatedAgency) {
      set({ agency: updatedAgency });
    } else {
      message.error("Failed to update agency.");
    }
  },
  reset: () => {
    set({ agency: undefined });
  },
}));
