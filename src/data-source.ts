import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import 'dotenv/config';

const isProd = process.env.NODE_ENV === 'production';

export const AppDataSource = new DataSource(
  isProd
    ? {
        type: 'postgres',
        url: process.env.DATABASE_URL || '',
        ssl: true, // use SSL in production
        synchronize: false, // use migrations in production
        logging: false,
        entities: [User],
        migrations: [],
        subscribers: [],
      }
    : {
        type: 'postgres',
        url:
          process.env.DATABASE_URL ||
          'postgresql://postgres@localhost:5432/nest-tester-db',
        synchronize: true,
        logging: false,
        entities: [User],
        migrations: [],
        subscribers: [],
      },
);
