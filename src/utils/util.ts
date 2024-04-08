import { IMAGE_CDN_ROOT } from "./config";
export const getImage = (path: string) => `${IMAGE_CDN_ROOT}${path}`;

export const getBreadCrumbItems = (pathname: string) => {};
