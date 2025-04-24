import { BrandKitDto } from './brand-kit-dto';
import { PartialType } from '@nestjs/mapped-types';
export class UpdateBrandKitDto extends PartialType(BrandKitDto) {}
