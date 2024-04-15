import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import * as crypto from 'bcrypt';
import { CreateClientDto } from './dto/create-client.dto';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  async create(createClientDto: CreateClientDto) {
    const data: Prisma.ClientCreateInput = {
      ...createClientDto,
      password: await crypto.hash(createClientDto.password, 10),
      address: {
        create: createClientDto.address,
      },
    };

    const createdClient = await this.prisma.client.create({ data });

    return {
      ...createdClient,
      password: undefined,
    };
  }

  async findByEmail(email: string) {
    return this.prisma.client.findUnique({
      where: { email },
    });
  }
}
