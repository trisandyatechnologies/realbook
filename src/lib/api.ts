import { API_ROOT } from "@/utils/config";
import { Venture } from "@prisma/client/edge";
import { Prospect } from "@prisma/client/edge";

export const createVenture = async (VentureBody: Partial<Venture>) => {
    const venture = await fetch(`${API_ROOT}ventures`, {
        method: "POST",
        body: JSON.stringify(VentureBody),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());
    return venture;
};

export const getVenture = async () => {
    const ventures = await fetch(`${API_ROOT}ventures`).then((res) => res.json());
    return ventures;
};

export const updateVenture = async (ventureId: string, updateBody: Partial<Venture>) => {
    const venture = await fetch(`${API_ROOT}ventures/${ventureId}`, {
        method: "PUT",
        body: JSON.stringify(updateBody),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());
    return venture;
};

export const deleteVenture = async (ventureId: string) => {
    try {
        const response = await fetch(`${API_ROOT}ventures/${ventureId}`, {
            method: "DELETE",  
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to delete venture: ${response.status} - ${response.statusText}`);
        }
        const venture = await response.json();
        return venture;
    } 
    catch (error) {
        console.error("Error creating venture:");
        throw error;
    }
};

export const createProspect = async (ProspectBody: Partial<Prospect>) => {
    const prospect = await fetch(`${API_ROOT}prospects`, {
        method: "POST",
        body: JSON.stringify(ProspectBody),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());
    return prospect;
};

export const getProspect = async () => {
    const prospect = await fetch(`${API_ROOT}prospect`).then((res) => res.json());
    return prospect;
};

export const updateprospect = async (ProspectId: string, ProspectBody: Partial<Prospect>) => {
    const prospect = await fetch(`${API_ROOT}prospects/${ProspectId}`, {
        method: "PUT",
        body: JSON.stringify(ProspectBody),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());
    return prospect;
};

export const deleteProspect = async (prospectId: string) => {
    try {
        const response = await fetch(`${API_ROOT}prospects/${prospectId}`, {
            method: "DELETE",  
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to delete prospect: ${response.status} - ${response.statusText}`);
        }
        const prospect = await response.json();
        return prospect;
    } 
    catch (error) {
        console.error("Error creating Prospect:");
        throw error;
    }
};