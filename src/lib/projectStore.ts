
import { create } from "zustand";
import { message } from "antd";
import {  Project } from "@prisma/client";
import { getProject, updateProject } from "./api";

interface ProjectStore {
  projects: Project[];
  project?: Project;
  setProjects: () => void;
  updatedProject: (id: string, updateBody: Partial<Project>) => void;
  reset: () => void;
}

export const useProjectStore = create<ProjectStore>((set, get) => ({
  projects: [],
  setProjects: async () => {
    const projects = await getProject();
    set({ projects: projects });
  },
  updatedProject: async (id: string, update: Partial<Project>) => {
    const updated = await updateProject(id, update);
    if (updated) {
      set({ project: updated });
    } else {
      message.error("Failed to update.");
    }
  },
  reset: () => {
    set({ projects: undefined });
  },
}));