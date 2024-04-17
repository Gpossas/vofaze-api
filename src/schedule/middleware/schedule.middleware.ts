import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ScheduleMiddleware {
  constructor(private prisma: PrismaService) {}

  async checkSchedule(schedule_id: string) {
    const schedule = await this.prisma.schedule.findUnique({
      where: { id: schedule_id },
    });

    if (!schedule) {
      throw new HttpException('Schedule not found', 404);
    }

    return schedule;
  }
}
