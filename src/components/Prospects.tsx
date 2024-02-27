"use client";

import { useStore } from "@/lib/useStore";
import ProspectsList from "./ProspectsList";
import { useEffect } from "react";

export default function ListOfProspects(){
    const prospectsList = useStore(s => s.prospectsList);
    const setProspectsList = useStore(s => s.setProspectsList);
    console.log(prospectsList);

    useEffect(() =>{
        setProspectsList();
    },[])

    return(
        <ProspectsList prospects={prospectsList}/>
    )
}