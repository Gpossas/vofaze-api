import { HttpException, Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmployeeMiddleware } from './middleware/employee.middleware';

@Injectable()
export class EmployeeService {
  constructor(
    private prisma: PrismaService,
    private employeeMidleware: EmployeeMiddleware,
  ) {}

  async create(company_id: string, createEmployeeDto: CreateEmployeeDto) {
    await this.employeeMidleware.validateCompanyId(company_id);
    return this.prisma.employee.create({
      data: {
        ...createEmployeeDto,
        company: { connect: { id: company_id } },
      },
    });
  }

  async find(search: string, companyId: string) {
    // If no search query is provided, return all employees
    if (!search) {
      return this.prisma.employee.findMany({ where: { companyId: companyId } });
    }

    // If search query is provided, return employees that match the search query
    const response = this.prisma.employee.findMany({
      where: {
        OR: [
          { name: { contains: search } },
          { phone: { contains: search } },
          { id: { contains: search } },
        ],
      },
    });

    if ((await response).length === 0) {
      throw new HttpException('No employee found', 404);
    }

    return response;
  }

  async update(employee_id: string, updateEmployeeDto: UpdateEmployeeDto) {
    await this.employeeMidleware.validateEmployeeId(employee_id);
    return this.prisma.employee.update({
      where: { id: employee_id },
      data: updateEmployeeDto,
    });
  }

  async delete(employee_id: string) {
    await this.employeeMidleware.validateEmployeeId(employee_id);
    return this.prisma.employee.delete({ where: { id: employee_id } });
  }
}
