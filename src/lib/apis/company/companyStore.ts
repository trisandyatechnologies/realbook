import { Company } from "@prisma/client";
import { create } from "zustand";
import { message } from "../../notify";
import { BaseStore } from "../common/types";
import { companyApi } from "./companyApi";

interface CompanyStore extends BaseStore<Company> {
  company?: Company;
  companies: Company[];
  getCompany: (id: string) => void;
  getCompanies: () => void;
  updateCompany: (updateBody: Partial<Company>) => void;
}

export const useCompanyStore = create<CompanyStore>((set, get) => ({
  companies: [],
  getCompany: async (id) => {
    const company = await companyApi.find(id);
    set({ company });
  },
  getCompanies: async () => {
    const companies = await companyApi.findAll();
    set({ companies });
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
