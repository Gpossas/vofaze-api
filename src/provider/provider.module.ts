import { Module } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { ProviderController } from './provider.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProviderController],
  imports: [PrismaModule],
  providers: [ProviderService, PrismaService],
  exports: [ProviderService],
})
export class ProviderModule {}
