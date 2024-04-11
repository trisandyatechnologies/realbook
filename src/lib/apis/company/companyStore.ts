import { Company } from "@prisma/client";
import { create } from "zustand";
import { message } from "../../notify";
import { BaseStore } from "../common/types";
import { companyApi } from "./companyApi";

interface CompanyStore extends BaseStore<Company> {
  company?: Company;
  getCompany: (id: string) => void;
  updateCompany: (updateBody: Partial<Company>) => void;
}

export const useCompanyStore = create<CompanyStore>((set, get) => ({
  getCompany: async (id) => {
    const company = await companyApi.find(id);
    set({ company });
  },
  updateCompany: async (update: Partial<Company>) => {
    const companyId = get()?.company?.id;
    if (!companyId) return;
    const updatedCompany = await companyApi.update(companyId, update);
    if (updatedCompany) {
      set({ company: updatedCompany });
    } else {
      message.error("Failed to update company.");
    }
  },
  reset: () => {
    set({ company: undefined });
  },
}));
