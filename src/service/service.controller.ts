import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  create(
    @Body() createServiceDto: CreateServiceDto,
    @Query('providerId') providerId: string,
  ) {
    return this.serviceService.create(createServiceDto, providerId);
  }

  @Get()
  find(@Query('search') search: string) {
    return this.serviceService.find(search);
  }

  @Patch()
  update(
    @Body() updateServiceDto: UpdateServiceDto,
    @Query('service_id') service_id: string,
  ) {
    return this.serviceService.update(updateServiceDto, service_id);
  }

  @Delete()
  delete(@Query('service_id') service_id: string) {
    return this.serviceService.delete(service_id);
  }
}
