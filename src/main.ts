import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // add cors support
  const corsOptions = {
    origin: '*', // allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // allow these methods
    preflightContinue: false, // do not pass the preflight request to the next handler
    optionsSuccessStatus: 204, // return 204 for successful preflight requests
    allowedHeaders: 'Content-Type, Authorization', // allow these headers
  };
  const app = await NestFactory.create(AppModule, {
    cors: corsOptions,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
