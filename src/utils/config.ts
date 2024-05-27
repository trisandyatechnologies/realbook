export const IMAGE_CDN_ROOT = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/`;

export const siteAddress =
  process.env.NEXT_PUBLIC_SITE_ADDRESS ?? "http://localhost:3000";

export const appLogo = `${siteAddress}/logo.png`;

export const API_ROOT = `${siteAddress}/api/`;

export const appName = process.env.NEXT_PUBLIC_APP_NAME;

export const parentName = process.env.NEXT_PUBLIC_PARENT_NAME;
export const parentLegalName = process.env.NEXT_PUBLIC_PARENT_LEGAL_NAME;
export const parentSiteAddress = process.env.NEXT_PUBLIC_PARENT_SITE_ADDRESS;

export const defaultCountry =
  process.env.NEXT_PUBLIC_DEFAULT_COUNTRY ?? "India";

export const DEFAULT_PAGE_SIZE = Number(
  process.env.NEXT_PUBLIC_DEFAULT_PAGE_SIZE ?? 10
);
