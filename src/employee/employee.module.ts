import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EmployeeMiddleware } from './middleware/employee.middleware';

@Module({
  imports: [PrismaModule],
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeMiddleware],
})
export class EmployeeModule {}
