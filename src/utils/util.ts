import { NextRequest } from "next/server";
import { DEFAULT_PAGE_SIZE, IMAGE_CDN_ROOT } from "./config";
export const getImage = (path: string = "") => `${IMAGE_CDN_ROOT}${path}`;

export const getBreadCrumbItems = (pathname: string) => {};

export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number
): (...args: Params) => void {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

export const normalize = (str: string) =>
  str.normalize("NFD").replace(/\p{Diacritic}/gu, "");

export const getBaseQueryProps = (req: NextRequest): BaseQuery => {
  const q = req.nextUrl.searchParams.get("q") ?? "";
  const page = Number(req.nextUrl.searchParams.get("page") ?? 1);
  const take = Number(
    req.nextUrl.searchParams.get("take") ?? DEFAULT_PAGE_SIZE
  );

  return {
    q,
    page,
    take,
  };
};
