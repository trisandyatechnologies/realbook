import { Prospect } from "@prisma/client";
import BaseAPI from "../common/baseApi";

class ProspectAPI extends BaseAPI<Prospect> {}

export const prospectApi = new ProspectAPI("prospects");
