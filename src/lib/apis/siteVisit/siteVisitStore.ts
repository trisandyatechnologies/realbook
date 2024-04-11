import { SiteVisit } from "@prisma/client";
import { create } from "zustand";
import { message } from "../../notify";
import { BaseStore } from "../common/types";
import { siteVisitApi } from "./siteVisitApi";

interface SiteVisitStore extends BaseStore<SiteVisit> {
  siteVisit?: SiteVisit;
  getSiteVisit: (id: string) => void;
  updateSiteVisit: (updateBody: Partial<SiteVisit>) => void;
}

export const useSiteVisitStore = create<SiteVisitStore>((set, get) => ({
  getSiteVisit: async (id) => {
    const siteVisit = await siteVisitApi.find(id);
    set({ siteVisit });
  },
  updateSiteVisit: async (update: Partial<SiteVisit>) => {
    const siteVisitId = get()?.siteVisit?.id;
    if (!siteVisitId) return;
    const updatedSiteVisit = await siteVisitApi.update(siteVisitId, update);
    if (updatedSiteVisit) {
      set({ siteVisit: updatedSiteVisit });
    } else {
      message.error("Failed to update siteVisit.");
    }
  },
  reset: () => {
    set({ siteVisit: undefined });
  },
}));
