import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CompanyMiddleware } from './middleware/company.middleware';

@Module({
  imports: [PrismaModule],
  controllers: [CompanyController],
  providers: [CompanyService, CompanyMiddleware],
})
export class CompanyModule {}
