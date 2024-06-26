import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { PrismaModule } from './prisma/prisma.module';
import { ProviderModule } from './provider/provider.module';
import { ClientModule } from './client/client.module';
import { CompanyModule } from './company/company.module';
import { ScheduleModule } from './schedule/schedule.module';
import { EmployeeModule } from './employee/employee.module';
import { GoogleModule } from './google/google.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [
    PrismaModule,
    ProviderModule,
    AuthModule,
    ClientModule,
    CompanyModule,
    ScheduleModule,
    EmployeeModule,
    GoogleModule,
    ServiceModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
