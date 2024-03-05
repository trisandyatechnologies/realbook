import { Prospect } from "@prisma/client";
import { create } from "zustand";
import { getProspects } from "./api";

interface prospectStore{
    prospectsList:Prospect[];
    setProspectsList: ()=>void;
}

export const useStore = create<prospectStore>((set,get) =>({
    prospectsList:[],
setProspectsList: async() =>{
    const prospects = await getProspects();
    set({prospectsList: prospects})
}
}))