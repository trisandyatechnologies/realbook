import { Project } from "@prisma/client";
import BaseAPI from "../common/baseApi";

class ProjectAPI extends BaseAPI<Project> {}

export const projectApi = new ProjectAPI("projects");
