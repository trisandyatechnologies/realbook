import { Company } from "@prisma/client";
import BaseAPI from "../common/baseApi";

class CompanyAPI extends BaseAPI<Company> {}

export const companyApi = new CompanyAPI("companies");
