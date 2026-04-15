/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { ClassSerializerInterceptor, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);

  // 1. 🛡️ FILTRO DE SERIALIZACIÓN GLOBAL (Blindaje Total)
  // Usamos 'excludeAll' para que NADA salga al frontend si no tiene @Expose()
  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector), {
      strategy: 'excludeAll',
    })
  );

  // 2. 🧹 PIPE DE VALIDACIÓN (Limpieza y Seguridad de DTOs)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,               // Elimina basura que no esté en el DTO
      forbidNonWhitelisted: true,    // Lanza error si envían campos extra
      transform: true,               // Convierte tipos automáticamente (ej: string a number)
    })
  );

  // 3. 🌐 CONFIGURACIÓN DE ACCESO
  app.enableCors(); // Permite que Angular e Ionic se conecten al Portal

  // 4. 📝 DOCUMENTACIÓN SWAGGER
  const config = new DocumentBuilder()
    .setTitle('ARCANI API')
    .setDescription('Documentación del Ecosistema de Sintonía ARCANI')
    .setVersion('1.0')
    .addBearerAuth() // Útil para cuando implementes el JWT de Firebase
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`${globalPrefix}/docs`, app, document);

  // 5. 🚀 LANZAMIENTO
  const port = process.env.PORT || 3000;
  await app.listen(port);

  Logger.log(
    `🚀 Portal ARCANI activo en: http://localhost:${port}/${globalPrefix}`,
    'Bootstrap'
  );
  Logger.log(
    `📖 Documentación disponible en: http://localhost:${port}/${globalPrefix}/docs`,
    'Bootstrap'
  );
}

bootstrap();
