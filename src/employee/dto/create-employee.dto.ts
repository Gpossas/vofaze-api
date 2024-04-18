import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsNotEmpty({ message: 'Phone is required' })
  phone: string;

  @IsOptional()
  url_img?: string;

  @IsOptional()
  description?: string;
}
