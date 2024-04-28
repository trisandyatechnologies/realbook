"use client";
import ListOfProspects from "@/components/Prospects";
import { usePageContextStore } from "@/utils/hooks/usePageContext";
import { useEffect } from "react";

export default function Companies() {
  const setPageContext = usePageContextStore((s) => s.setContext);
  useEffect(() => {
    setPageContext("Companies", [{ breadcrumbName: "Companies" }]);
  }, [setPageContext]);
  return <ListOfProspects />;
}
