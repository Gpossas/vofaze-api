import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Controller('schedule')
export class ScheduleController {
  constructor(private scheduleService: ScheduleService) {}

  @Post()
  create(
    @Body() createScheduleDto: CreateScheduleDto,
    @Query('providerId') providerId: string,
  ) {
    return this.scheduleService.create(createScheduleDto, providerId);
  }

  @Get()
  find(@Query('search') search: string) {
    return this.scheduleService.find(search);
  }

  @Patch()
  update(
    @Body() updateScheduleDto: UpdateScheduleDto,
    @Query('schedule_id') schedule_id: string,
  ) {
    return this.scheduleService.update(updateScheduleDto, schedule_id);
  }

  @Delete()
  delete(@Query('schedule_id') schedule_id: string) {
    return this.scheduleService.delete(schedule_id);
  }
}
