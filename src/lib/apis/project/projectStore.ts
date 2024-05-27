import { Project } from "@prisma/client";
import { create } from "zustand";
import { message } from "../../notify";
import { BaseStore } from "../common/types";
import { projectApi } from "./projectApi";
import { baseStore } from "../common/baseStore";

interface ProjectStore extends BaseStore<Project> {
  getProject: (id: string) => void;
  updateProject: (updateBody: Partial<Project>) => void;
}

export const useProjectStore = create<ProjectStore>((set, get) => ({
  getProject: async (id) => {
    const record = await projectApi.find(id);
    set({ record });
  },
  updateProject: async (update: Partial<Project>) => {
    const projectId = get()?.record?.id;
    if (!projectId) return;
    const updatedProject = await projectApi.update(projectId, update);
    if (updatedProject) {
      set({ record: updatedProject });
    } else {
      message.error("Failed to update record.");
    }
  },
  ...baseStore(set, get),
}));
