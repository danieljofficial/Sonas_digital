import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { BrandKitService } from './brand-kit/brand-kit.service';
import { BrandKitController } from './brand-kit/brand-kit.controller';
import { CloudinaryConfig } from 'src/cloudinary/cloudinary.config';
import { BrandKitModule } from './brand-kit/brand-kit.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    BrandKitModule,
    CloudinaryModule,
    ProductsModule,
  ],
  controllers: [AppController, BrandKitController],
  providers: [AppService, BrandKitService],
})
export class AppModule {}
