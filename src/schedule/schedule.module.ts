import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ScheduleMiddleware } from './middleware/schedule.middleware';

@Module({
  imports: [PrismaModule],
  controllers: [ScheduleController],
  providers: [ScheduleService, ScheduleService, ScheduleMiddleware],
})
export class ScheduleModule {}
