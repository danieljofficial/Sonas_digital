import { Injectable } from '@nestjs/common';
import { User } from './decorators/user.decorator';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
