import { IsArray, IsString } from 'class-validator';

export class BrandKitDto {
  @IsString()
  name: string;

  @IsString()
  logoUrl: string;

  @IsArray()
  @IsString({ each: true })
  colours: string[];

  @IsArray()
  @IsString({ each: true })
  fonts: string[];
}
