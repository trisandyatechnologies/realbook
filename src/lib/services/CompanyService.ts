import { Prisma } from "@prisma/client";
import prisma from "../prisma";
import { DEFAULT_PAGE_SIZE } from "@/utils/config";

export interface CompanyQuery extends BaseQuery {
  ownerId?: string;
}

class CompanyService {
  async create(ownerId: string, data: Prisma.CompanyCreateInput) {
    const company = await prisma.company.create({
      data: {
        ...data,
        owner: {
          connect: {
            id: ownerId,
          },
        },
      },
    });
    return company;
  }

  async findById(id: string) {
    const company = await prisma.company.findUnique({ where: { id } });
    return company;
  }

  async findAll({
    q = "",
    page = 1,
    take = DEFAULT_PAGE_SIZE,
    ownerId,
  }: CompanyQuery) {
    const query: Prisma.CompanyFindManyArgs = {
      where: {
        name: {
          contains: q,
          mode: "insensitive",
        },
        ownerId: ownerId,
      },
      take,
      skip: take * (page - 1),
    };

    console.log({ query, q, page, take });

    const [companies, count] = await prisma.$transaction([
      prisma.company.findMany(query),
      prisma.company.count({ where: query.where }),
    ]);

    console.log({ companies, count });

    return { data: companies, total: count };
  }

  async update(id: string, data: Prisma.CompanyUpdateInput) {
    const company = await prisma.company.update({ where: { id }, data });
    return company;
  }

  async delete(id: string) {
    const company = await prisma.company.delete({ where: { id } });
    return company;
  }
}

export const companyService = new CompanyService();
