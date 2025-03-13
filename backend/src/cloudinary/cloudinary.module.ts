import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryConfig } from './cloudinary.config';

@Module({
  imports: [ConfigModule],
  providers: [CloudinaryConfig],
  exports: [CloudinaryConfig],
})
export class CloudinaryModule {}
