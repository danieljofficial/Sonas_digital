import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function runPrismaMigrate() {
  try {
    console.log('Running Prisma migration...');
    const { stdout, stderr } = await execAsync('npx prisma migrate deploy');
    console.log(stdout);
    if (stderr) console.error('stderr:', stderr);
  } catch (error) {
    console.error('Prisma migration failed:', error);
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 8000;
  const host = '0.0.0.0';
  app.setGlobalPrefix('api');
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await runPrismaMigrate();
  await await app.listen(port, host);
  console.log(`Application is running on port ${port}`);
  console.log('PORT', port);
  console.log('HOST', host);
}
bootstrap().catch((err) => {
  console.error('Application failed to start:', err);
  process.exit(1);
});
