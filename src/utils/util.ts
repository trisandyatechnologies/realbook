import { IMAGE_CDN_ROOT } from "./config";
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
