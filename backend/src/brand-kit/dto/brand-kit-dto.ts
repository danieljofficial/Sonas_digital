import { IsArray, IsString } from 'class-validator';

export class BrandKitDto {
  @IsString()
  userId: string;

  @IsString()
  logoUrl: string;

  @IsArray()
  @IsString({ each: true })
  Colours: string[];

  @IsArray()
  @IsString({ each: true })
  Fonts: string[];
}
