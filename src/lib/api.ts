import { API_ROOT } from "@/utils/config";
import {  Project } from "@prisma/client";

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