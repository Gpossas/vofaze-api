import { Body, Controller, Post } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('provider')
export class ProviderController {
  constructor(private readonly providerService: ProviderService) {}

  @IsPublic()
  @Post()
  create(@Body() createProviderDto: CreateProviderDto) {
    return this.providerService.create(createProviderDto);
  }
}
