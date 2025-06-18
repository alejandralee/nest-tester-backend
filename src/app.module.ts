import { Module } from '@nestjs/common';
import { AppDataSource } from './data-source';
import { EntityManager } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: EntityManager,
      useFactory: async () => {
        if (!AppDataSource.isInitialized) {
          await AppDataSource.initialize();
        }
        return AppDataSource.manager;
      },
    },
  ],
})
export class AppModule {}
