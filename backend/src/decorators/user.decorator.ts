import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export interface AuthUser {
  email: string;
  sub: {
    userId: string;
    name: string;
  };
}
export const User = createParamDecorator(
  (data: unknown | undefined, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return user;
  },
);
