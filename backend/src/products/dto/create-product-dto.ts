import { IsNumber, IsString, IsUrl } from 'class-validator';

export class createProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsUrl()
  baseImageUrl: string;

  @IsString()
  imagePublicId: string;
}
