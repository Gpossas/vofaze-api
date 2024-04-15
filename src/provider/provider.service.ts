import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import * as crypto from 'bcrypt';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProviderService {
  constructor(private prisma: PrismaService) {}

  async create(createProviderDto: CreateProviderDto) {
    const data: Prisma.ProviderCreateInput = {
      ...createProviderDto,
      password: await crypto.hash(createProviderDto.password, 10),
      address: {
        create: createProviderDto.address,
      },
    };

    const createdProvider = await this.prisma.provider.create({ data });

    return {
      ...createdProvider,
      password: undefined,
    };
  }

  async findByEmail(email: string) {
    return this.prisma.provider.findUnique({
      where: { email },
    });
  }
}
