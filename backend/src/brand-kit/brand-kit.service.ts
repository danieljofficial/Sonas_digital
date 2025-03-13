import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { BrandKitDto } from './dto/brand-kit-dto';
import { Express } from 'express';
import { CloudinaryConfig } from 'src/cloudinary/cloudinary.config';

@Injectable()
export class BrandKitService {
  constructor(
    private readonly databaseService: DatabaseService,
    private cloudinary: CloudinaryConfig,
  ) {}
  // private logoUrl: string;
  async uploadLogo(file: Express.Multer.File) {
    try {
      if (!file.mimetype.startsWith('image')) {
        throw new Error('Only image files are allowed!');
      }

      const uploadInfo = await this.cloudinary
        .getCloudinary()
        .uploader.upload(
          `data:${file.mimetype};base64,${file.buffer.toString('base64')}`,
          {
            folder: 'brand-logos',
          },
        );

      const result = {
        message: 'Logo uploaded successfully.',
        secureUrl: uploadInfo.secure_url,
      };

      // this.logoUrl = result.secureUrl;

      return result;
    } catch (error) {
      throw new Error(`Upload failed: ${error.message}`);
    }
  }

  async createBrandKit(dto: BrandKitDto) {
    if (!dto.logoUrl) {
      throw new Error('Please upload brand logo first.');
    }
    return await this.databaseService.brandKit.create({
      data: { ...dto },
    });
  }

  async getUserBrandKits(userId: string) {
    return await this.databaseService.brandKit.findMany({ where: { userId } });
  }

  async deleteBrandKit(id: string) {
    const brandKit = await this.databaseService.brandKit.findUnique({
      where: { id },
    });
    if (!brandKit) {
      throw new NotFoundException('Brand kit not found');
    }

    if (brandKit.logoUrl) {
      const publicId = brandKit.logoUrl.split('/').pop()?.split('.')[0];
      await this.cloudinary
        .getCloudinary()
        .uploader.destroy(`brand-logos/${publicId}`);
    }
    return await this.databaseService.brandKit.delete({ where: { id } });
  }
}
