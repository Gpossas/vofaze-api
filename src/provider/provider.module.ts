import { Module } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { ProviderController } from './provider.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ProviderController],
  imports: [PrismaModule, PrismaModule],
  providers: [ProviderService],
  exports: [ProviderService],
})
export class ProviderModule {}
