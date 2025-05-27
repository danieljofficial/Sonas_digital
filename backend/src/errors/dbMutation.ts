import { Prisma } from '@prisma/client';
import {
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';

export function handlePrismaError(error: unknown, entityName: string): never {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2025':
        throw new NotFoundException(`${entityName} not found`);
      default:
        throw new InternalServerErrorException(
          `Prisma error during ${entityName} operation: ${error.message}`,
        );
    }
  }
  throw new InternalServerErrorException(
    `Operation failed for ${entityName}: ${error instanceof Error ? error.message : String(error)}`,
  );
}
