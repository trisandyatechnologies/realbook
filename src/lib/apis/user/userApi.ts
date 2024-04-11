import { User } from "@prisma/client";
import BaseAPI from "../common/baseApi";

class UserAPI extends BaseAPI<User> {}

export const userApi = new UserAPI("users");
