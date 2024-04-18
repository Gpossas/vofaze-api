import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Post()
  create(
    @Query('company_id') company_id: string,
    @Body() createEmployeeDto: CreateEmployeeDto,
  ) {
    return this.employeeService.create(company_id, createEmployeeDto);
  }

  @Get()
  find(
    @Query('search') search: string,
    @Query('company_id') company_id: string,
  ) {
    return this.employeeService.find(search, company_id);
  }

  @Patch()
  update(
    @Query('employee_id') employee_id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeeService.update(employee_id, updateEmployeeDto);
  }

  @Delete()
  delete(@Query('employee_id') employee_id: string) {
    return this.employeeService.delete(employee_id);
  }
}
