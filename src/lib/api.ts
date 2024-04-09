import { API_ROOT } from "@/utils/config";
import { Prospect, User } from "@prisma/client";
import { Project } from "@prisma/client";
import api from "./axios";

export const createProspect = async (body: Prospect) => {
  const response = await api.post<Prospect>(`${API_ROOT}prospects`, {
    body,
  });
  return response.data;
};

export const getProspects = async () => {
  const res = await api.get<Prospect[]>(`${API_ROOT}prospects`);
  return res.data;
};

export const getProspectById = async (prospctId: string) => {
  const res = await api.get<Prospect>(`${API_ROOT}prospects/${prospctId}`);
  return res.data;
};

export const createProject = async (body: Project) => {
  const res = await api.post<Project>(`${API_ROOT}projects`, {
    body,
  });
  return res.data;
};

export const getProjects = async () => {
  const res = await api.get<Project[]>(`${API_ROOT}projects`);
  return res.data;
};

export const updateProject = async (
  projectId: string,
  body: Partial<Project>
) => {
  const res = await api.put<Project>(`${API_ROOT}projects/${projectId}`, {
    body,
  });
  return res.data;
};

export const deleteProject = async (projectId: string) => {
  const res = await api.delete<Project>(`${API_ROOT}projects/${projectId}`);
  return res.data;
};

export const getUser = async (userId: string) => {
  const res = await api.get<User>(`${API_ROOT}users/${userId}`);
  return res.data;
};

export const updateUser = async (
  userId: string,
  body: Partial<User>
): Promise<User> => {
  const res = await api.put<User>(`${API_ROOT}users/${userId}`, {
    body,
  });
  return res.data;
};
