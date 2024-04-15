import { ProviderType } from '@prisma/client';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateProviderDto {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'CNPJ is required' })
  cnpj: string;

  @IsString()
  @IsNotEmpty({ message: 'Phone is required' })
  phone: string;

  @IsStrongPassword()
  @IsNotEmpty({ message: 'Password is required' })
  password: string;

  @IsString()
  @IsOptional()
  url_image: string;

  @IsNotEmpty()
  type: ProviderType;

  @IsNotEmpty({ message: 'Address is required' })
  address: {
    street: string;
    number: string;
    city: string;
    state: string;
    country: string;
  };
}
