import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsStrongPassword,
} from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  cpf: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @IsOptional()
  url_img: string;

  @IsNotEmpty()
  address: {
    street: string;
    number: string;
    city: string;
    state: string;
    country: string;
  };
}
