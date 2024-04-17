import { ScheduleStatus } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class CreateScheduleDto {
  @IsNotEmpty()
  startTime: Date;

  @IsNotEmpty()
  endTime: Date;

  @IsNotEmpty()
  status: ScheduleStatus;

  @IsNotEmpty()
  clientId: string;

  @IsNotEmpty()
  serviceId: string;
}
