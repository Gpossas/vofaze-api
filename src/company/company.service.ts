import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { CompanyMiddleware } from './middleware/company.middleware';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    private prisma: PrismaService,
    private companyMiddleware: CompanyMiddleware,
  ) {}

  async createCompany(provider_id: string, createCompanyDto: CreateCompanyDto) {
    await this.companyMiddleware.providerExists(provider_id);
    return this.prisma.company.create({
      data: {
        ...createCompanyDto,
        provider: { connect: { id: provider_id } },
      },
    });
  }

  async getCompany(company_id: string) {
    await this.companyMiddleware.companyExists(company_id);
    // If no company_id is provided, return all companies
    if (!company_id) {
      return this.prisma.company.findMany();
    }
    // Otherwise, return the company with the provided company_id
    return this.prisma.company.findUnique({ where: { id: company_id } });
  }

  async updateCompany(company_id: string, updateCompanyDto: UpdateCompanyDto) {
    await this.companyMiddleware.companyExists(company_id);
    return this.prisma.company.update({
      where: { id: company_id },
      data: updateCompanyDto,
    });
  }

  async deleteCompany(company_id: string) {
    await this.companyMiddleware.companyExists(company_id);
    return this.prisma.company.delete({ where: { id: company_id } });
  }
}
