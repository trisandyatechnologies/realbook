import { API_ROOT } from "@/app/utils/config";
import { Prospect } from "@prisma/client";
import {  Project } from "@prisma/client";


export const createProspect = async (prospectBody: Prospect) => {
  try {
    const response = await fetch(`${API_ROOT}prospects`, {
      method: "POST",
      body: JSON.stringify(prospectBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Error creating prospect:", error);
  }
};

export const getProspects = async () => {
  try{
  const prospects = await fetch(`${API_ROOT}prospects`).then((res) => res.json());
  return prospects;
}catch (error) {
  console.error('Error fetching data:', error);
  throw error;
}
};
 
export const getProspectById = async (prospctId:string) => {
const prospect = await fetch(`${API_ROOT}prospects/${prospctId}`,{
cache:"no-cache",
}).then((res) => res.json());
return prospect;
}


export const createProject = async (ProjectBody:Project) => {
    const project = await fetch(`${API_ROOT}projects`, {
        method: "POST",
        body: JSON.stringify(ProjectBody),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());
    return project;
};


export const getProject = async () => {
    const projects = await fetch(`${API_ROOT}projects`).then((res) => res.json());
    return projects;
};

export const updateProject = async (projectId: string, updateBody: Partial<Project>) => {
    const project = await fetch(`${API_ROOT}projects/${projectId}`, {
        method: "PUT",
        body: JSON.stringify(updateBody),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());
    return project;
};

export const deleteProject = async (projectId: string) => {
    try {
        const response = await fetch(`${API_ROOT}projects/${projectId}`, {
            method: "DELETE",  
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to delete project: ${response.status} - ${response.statusText}`);
        }
        const project = await response.json();
        return project;
    } 
    catch (error) {
        console.error("Error creating project:");
        throw error;
    }
};
