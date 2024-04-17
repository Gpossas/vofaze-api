import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { CompanyMiddleware } from './middleware/company.middleware';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
  constructor(
    private companyService: CompanyService,
    private companyMiddleware: CompanyMiddleware,
  ) {}

  @Post()
  async createCompany(
    @Query('provider_id') provider_id: string,
    @Body() createCompanyDto: CreateCompanyDto,
  ) {
    return this.companyService.createCompany(provider_id, createCompanyDto);
  }

  @Get()
  async getCompany(@Query('company_id') company_id: string) {
    return this.companyService.getCompany(company_id);
  }

  @Patch()
  async updateCompany(
    @Query('company_id') company_id: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ) {
    return this.companyService.updateCompany(company_id, updateCompanyDto);
  }

  @Delete()
  async deleteCompany(@Query('company_id') company_id: string) {
    const response = this.companyService.deleteCompany(company_id);
    return { response, message: 'Company deleted' };
  }
}
