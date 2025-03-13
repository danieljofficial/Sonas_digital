import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { BrandKitDto } from './dto/brand-kit-dto';
import { BrandKitService } from './brand-kit.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';

@Controller('brand-kit')
export class BrandKitController {
  constructor(private brandKitService: BrandKitService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadLogo(
    @UploadedFile() file: Express.Multer.File,
    // @Body() userId: string,
  ) {
    //Send id through request, then add type annotation for req.
    const urlObject = await this.brandKitService.uploadLogo(file);
    return urlObject;
  }

  @Post()
  async create(@Body() dto: BrandKitDto) {
    return this.brandKitService.createBrandKit(dto);
  }

  @Get(':userId')
  async findMany(@Param('userId') userId: string) {
    return this.brandKitService.getUserBrandKits(userId);
  }

  @Delete(':id')
  async remove(@Param(':id') id: string) {
    return this.brandKitService.deleteBrandKit(id);
  }
}
