import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompanyMiddleware {
  constructor(private prisma: PrismaService) {}

  async providerExists(provider_id: string) {
    if (!provider_id) {
      throw new HttpException('Provider ID is required', 400);
    }
    if (!this.prisma.provider.findUnique({ where: { id: provider_id } })) {
      throw new HttpException('Provider not found', 404);
    }
    return true;
  }

  async companyExists(company_id: string) {
    console.log('company_id: ', company_id, typeof company_id);
    if (!this.prisma.company.findUnique({ where: { id: company_id } })) {
      throw new HttpException('Company not found', 404);
    }
    return true;
  }
}
