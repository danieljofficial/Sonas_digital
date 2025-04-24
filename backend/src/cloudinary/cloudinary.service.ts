import { Injectable } from '@nestjs/common';
import { CloudinaryConfig } from './cloudinary.config';

@Injectable()
export class CloudinaryService {
  constructor(private cloudinaryConfig: CloudinaryConfig) {}
}
