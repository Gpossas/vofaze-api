import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeMiddleware {
  constructor(private prisma: PrismaService) {}

  async validateEmployeeId(employee_id: string) {
    if (!employee_id) {
      throw new HttpException('Employee ID is required ', 400);
    }

    if (!this.prisma.employee.findUnique({ where: { id: employee_id } })) {
      throw new HttpException('Employee not found', 404);
    }

    return true;
  }

  async validateCompanyId(company_id: string) {
    if (!company_id) {
      throw new HttpException('Company ID is required ', 400);
    }

    if (!this.prisma.company.findUnique({ where: { id: company_id } })) {
      throw new HttpException('Company not found', 404);
    }

    return true;
  }
}
