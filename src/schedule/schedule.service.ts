import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ScheduleMiddleware } from './middleware/schedule.middleware';

@Injectable()
export class ScheduleService {
  constructor(
    private prisma: PrismaService,
    private scheduleMiddleware: ScheduleMiddleware,
  ) {}

  async create(createScheduleDto: CreateScheduleDto, providerId: string) {
    const data = { ...createScheduleDto };
    return this.prisma.schedule.create({
      data: {
        endTime: data.endTime,
        startTime: data.startTime,
        status: data.status,
        Provider: { connect: { id: providerId } },
        client: { connect: { id: createScheduleDto.clientId } },
        service: { connect: { id: createScheduleDto.serviceId } },
      },
    });
  }

  async find(search: string) {
    const response = this.prisma.schedule.findMany({
      where: {
        OR: [
          { client: { name: { contains: search } } },
          { client: { id: { contains: search } } },
          { service: { name: { contains: search } } },
          { service: { id: { contains: search } } },
          { Provider: { id: { contains: search } } },
        ],
      },
    });

    if ((await response).length === 0) {
      return 'No schedules found';
    }
  }

  async update(updateScheduleDto: UpdateScheduleDto, schedule_id: string) {
    await this.scheduleMiddleware.checkSchedule(schedule_id);
    const data = { ...updateScheduleDto };
    return this.prisma.schedule.update({
      where: { id: schedule_id },
      data: {
        endTime: data.endTime,
        startTime: data.startTime,
        status: data.status,
      },
    });
  }

  async delete(schedule_id: string) {
    await this.scheduleMiddleware.checkSchedule(schedule_id);
    return this.prisma.schedule.delete({
      where: { id: schedule_id },
    });
  }
}
