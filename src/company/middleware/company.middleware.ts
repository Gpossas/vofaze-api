import { PrismaService } from 'src/prisma/prisma.service';

export class CompanyMiddleware {
  constructor(private prisma: PrismaService) {}

  async providerExists(provider_id: string) {
    if (!provider_id) {
      throw new Error('Provider ID is required');
    } else if (
      !this.prisma.provider.findUnique({ where: { id: provider_id } })
    ) {
      throw new Error('Provider not found');
    }
    return true;
  }

  async companyExists(company_id: string) {
    if (!this.prisma.company.findUnique({ where: { id: company_id } })) {
      throw new Error('Company not found');
    }
    return true;
  }
}
