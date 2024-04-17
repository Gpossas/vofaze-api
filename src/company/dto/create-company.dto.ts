import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty({ message: 'Company name is required' })
  company_name: string;

  @IsNotEmpty({ message: 'Company Image is required' })
  url_img: string;

  @IsOptional()
  background_img?: string;

  @IsOptional()
  description?: string;
}
