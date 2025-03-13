import { Module } from '@nestjs/common';
import { CloudinaryConfig } from 'src/cloudinary/cloudinary.config';
import { DatabaseModule } from 'src/database/database.module';
import { BrandKitController } from './brand-kit.controller';
import { BrandKitService } from './brand-kit.service';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [DatabaseModule, ConfigModule, CloudinaryModule],
  controllers: [BrandKitController],
  providers: [BrandKitService],
  exports: [BrandKitService],
})
export class BrandKitModule {}
