import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

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
  await app.listen(port, host);
  console.log(`Application is running on port ${port}`);
  console.log(`Application is running on port ${port}`);
  console.log(`Application is running on port ${port}`);
  console.log(`Application is running on port ${port}`);
  // const server = app.getHttpServer();
  // server.on('listening', () => {
  //   console.log('Server is listening on port:', server.address().port);
  // });
}
bootstrap().catch((err) => {
  console.error('Application failed to start:', err);
  process.exit(1);
});
