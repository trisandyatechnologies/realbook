import { Company } from "@prisma/client";
import { create } from "zustand";
import { message } from "../../notify";
import { BaseStore } from "../common/types";
import { companyApi } from "./companyApi";
import { CompanyQuery } from "@/lib/services/CompanyService";
import { baseStore } from "../common/baseStore";

interface CompanyStore extends BaseStore<Company> {
  getCompany: (id: string) => void;
  getCompanies: (query: CompanyQuery) => void;
  updateCompany: (updateBody: Partial<Company>) => void;
}

export const useCompanyStore = create<CompanyStore>((set, get) => ({
  getCompany: async (id) => {
    const record = await companyApi.find(id);
    set({ record });
  },
  getCompanies: async (query) => {
    const records = await companyApi.findAll(query);
    set({ records });
  },
  updateCompany: async (update: Partial<Company>) => {
    const companyId = get()?.record?.id;
    if (!companyId) return;
    const updatedCompany = await companyApi.update(companyId, update);
    if (updatedCompany) {
      set({ record: updatedCompany });
    } else {
      message.error("Failed to update company.");
    }
  },
  ...baseStore(set, get),
}));
