"use client";
import AddingProspect from "@/components/ProspectsForm";
import { SessionProvider } from "next-auth/react";

export default function newProspects() {
  return(

   <SessionProvider>
    <AddingProspect />
    
   </SessionProvider> 
)}
 