import { SiteVisit } from "@prisma/client";
import BaseAPI from "../common/baseApi";

class SiteVisitAPI extends BaseAPI<SiteVisit> {}

export const siteVisitApi = new SiteVisitAPI("site-visits");
