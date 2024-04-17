import { ScheduleStatus } from '@prisma/client';

export class Schedule {
  id: string;
  date: Date;
  status: ScheduleStatus;
  startTime: Date;
  endTime: Date;
  createdAt: Date;
  updatedAt: Date;
}
