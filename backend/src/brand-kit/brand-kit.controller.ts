import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { BrandKitDto } from './dto/brand-kit-dto';
import { BrandKitService } from './brand-kit.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { AuthUser, User } from 'src/decorators/user.decorator';
import { UpdateBrandKitDto } from './dto/update-kit-dto';

@Controller('brand-kit')
@UseGuards(JwtGuard)
export class BrandKitController {
  constructor(private brandKitService: BrandKitService) {}

  @Post(':brandKitId/logo')
  @UseInterceptors(FileInterceptor('file'))
  async uploadLogo(
    @User() user: AuthUser,
    @Param('brandKitId') brandKitId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const urlObject = await this.brandKitService.uploadLogo(
      user.sub.userId,
      brandKitId,
      file,
    );
    return urlObject;
  }

  @Post()
  async create(@Body() dto: BrandKitDto, @User() user: AuthUser) {
    console.log('Creating brand kit for user:', user);
    return this.brandKitService.createBrandKit(user.sub.userId, dto);
  }

  @Get()
  async findMany(@User() user: AuthUser) {
    return this.brandKitService.getUserBrandKits(user.sub.userId);
  }

  @Get(':brandKitId')
  async findOne(
    @Param('brandKitId') brandKitId: string,
    @User() user: AuthUser,
  ) {
    return this.brandKitService.getBrandKit(user.sub.userId, brandKitId);
  }

  @Patch(':brandKitId')
  async update(
    @Param('brandKitId') brandKitId: string,
    @Body() dto: UpdateBrandKitDto,
    @User() user: AuthUser,
  ) {
    return this.brandKitService.updateBrandKit(
      user.sub.userId,
      dto,
      brandKitId,
    );
  }

  @Delete(':brandKitId')
  async remove(
    @User() user: AuthUser,
    @Param('brandKitId') brandKitId: string,
  ) {
    return this.brandKitService.deleteBrandKit(user.sub.userId, brandKitId);
  }
}
