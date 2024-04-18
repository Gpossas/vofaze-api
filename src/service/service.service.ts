import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServiceService {
  constructor(private prisma: PrismaService) {}

  async create(createServiceDto: CreateServiceDto, providerId: string) {
    return this.prisma.service.create({
      data: {
        ...createServiceDto,
        Provider: {
          connect: {
            id: providerId,
          },
        },
      },
    });
  }

  async find(search: string) {
    return this.prisma.service.findMany({
      where: {
        name: {
          contains: search,
        },
      },
    });
  }

  async update(updateServiceDto: UpdateServiceDto, service_id: string) {
    return this.prisma.service.update({
      where: {
        id: service_id,
      },
      data: updateServiceDto,
    });
  }

  async delete(service_id: string) {
    return this.prisma.service.delete({
      where: {
        id: service_id,
      },
    });
  }
}
