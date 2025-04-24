import {
  Body,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { BrandKitDto } from './dto/brand-kit-dto';
import { CloudinaryConfig } from 'src/cloudinary/cloudinary.config';
import { debugPort } from 'process';
import { UpdateBrandKitDto } from './dto/update-kit-dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class BrandKitService {
  constructor(
    private readonly databaseService: DatabaseService,
    private cloudinary: CloudinaryConfig,
    // private cloudinary: CloudinaryService
  ) {}
  private readonly MAX_BRAND_KITS = 3;

  async uploadLogo(
    userId: string,
    brandKitId: string,
    file: Express.Multer.File,
  ) {
    const brandKit = this.databaseService.brandKit.findUnique({
      where: { id: brandKitId, userId },
    });

    if (!brandKit) throw new ForbiddenException();

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
            public_id: `logo-${brandKitId}`,
          },
        );

      const result = {
        message: 'Logo uploaded successfully.',
        secureUrl: uploadInfo.secure_url,
      };

      // this.logoUrl = result.secureUrl;

      return await this.databaseService.brandKit.update({
        where: { id: brandKitId, userId },
        data: { logoUrl: result.secureUrl },
      });
    } catch (error) {
      throw new Error(`Upload failed: ${error.message}`);
    }
  }

  async createBrandKit(userId: string, dto: BrandKitDto) {
    // if (!dto.logoUrl) {
    //   throw new Error('Please upload brand logo first.');
    // }

    const userExists = await this.databaseService.user.findUnique({
      where: { id: userId },
      select: { id: true },
    });

    if (!userExists) {
      throw new NotFoundException('user not found');
    }

    const count = await this.databaseService.brandKit.count({
      where: { userId },
    });
    if (count >= this.MAX_BRAND_KITS) {
      throw new ConflictException(
        `Maximum of ${this.MAX_BRAND_KITS} allowed per user`,
      );
    }
    return await this.databaseService.brandKit.create({
      data: {
        ...dto,
        user: {
          connect: { id: userId },
        },
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });
  }

  async getUserBrandKits(userId: string) {
    return await this.databaseService.brandKit.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getBrandKit(userId: string, brandKitId: string) {
    return await this.databaseService.brandKit.findUnique({
      where: { id: brandKitId, userId },
    });
  }

  async updateBrandKit(
    userId: string,
    dto: UpdateBrandKitDto,
    brandKitId: string,
  ) {
    const brandKit = this.databaseService.brandKit.findUnique({
      where: { id: brandKitId, userId },
    });
    if (!brandKit) throw new NotFoundException();

    return this.databaseService.brandKit.update({
      where: { id: brandKitId },
      data: dto,
    });
  }

  async deleteBrandKit(userId: string, brandKitId: string) {
    const brandKit = await this.databaseService.brandKit.findUnique({
      where: { id: brandKitId, userId },
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
    return await this.databaseService.brandKit.delete({
      where: { id: brandKitId, userId },
    });
  }
}
