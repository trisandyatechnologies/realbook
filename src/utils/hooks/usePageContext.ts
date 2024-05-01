import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
import { create } from "zustand";

interface PageContextStore {
  title?: string;
  setTitle: (title: string) => void;
  navItems?: BreadcrumbItemType[];
  setItems: (items: BreadcrumbItemType[]) => void;
  setContext: (title: string, items?: BreadcrumbItemType[]) => void;
  reset: () => void;
}

export const usePageContextStore = create<PageContextStore>((set, get) => ({
  title: "Home",
  navItems: [],
  setTitle: (title) => {
    set({ title });
  },
  setItems: (navItems) => {
    set({ navItems });
  },
  setContext: (title: string, navItems?: BreadcrumbItemType[]) => {
    set({ title, navItems: navItems });
  },
  reset: () => {
    set({ title: "Home", navItems: undefined });
  },
}));

export default function usePageContext() {
  const title = usePageContextStore((s) => s.title);
  const navItems = usePageContextStore((s) => s.navItems);
  return { title, navItems };
}
