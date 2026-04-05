/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);


   // Habilita que Angular pueda hablar con NestJS
  app.enableCors();


  const port = process.env.PORT || 3000;
  await app.listen(port);

  //Sale mensaje en la cosona
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );


}

bootstrap();
