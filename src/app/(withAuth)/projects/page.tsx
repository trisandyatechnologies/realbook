"use client";
import Projects from "@/components/Projects";
import { usePageContextStore } from "@/utils/hooks/usePageContext";
import { useEffect } from "react";

export default function ProjectsPage() {
  const setPageContext = usePageContextStore((s) => s.setContext);
  useEffect(() => {
    setPageContext("Projects", [
      { title: "Companies" },
      { title: "Aparna", path: "[companyId]" },
      { title: "Projects" },
    ]);
  }, [setPageContext]);

  return <Projects />;
}
