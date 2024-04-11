import { Agency } from "@prisma/client";
import BaseAPI from "../common/baseApi";

class AgencyAPI extends BaseAPI<Agency> {}

export const agencyApi = new AgencyAPI("agencies");
