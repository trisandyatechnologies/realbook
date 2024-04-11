import { Project } from "@prisma/client";
import { create } from "zustand";
import { message } from "../../notify";
import { BaseStore } from "../common/types";
import { projectApi } from "./projectApi";

interface ProjectStore extends BaseStore<Project> {
  project?: Project;
  getProject: (id: string) => void;
  updateProject: (updateBody: Partial<Project>) => void;
}

export const useProjectStore = create<ProjectStore>((set, get) => ({
  getProject: async (id) => {
    const project = await projectApi.find(id);
    set({ project });
  },
  updateProject: async (update: Partial<Project>) => {
    const projectId = get()?.project?.id;
    if (!projectId) return;
    const updatedProject = await projectApi.update(projectId, update);
    if (updatedProject) {
      set({ project: updatedProject });
    } else {
      message.error("Failed to update project.");
    }
  },
  reset: () => {
    set({ project: undefined });
  },
}));
