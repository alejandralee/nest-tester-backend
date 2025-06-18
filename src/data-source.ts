import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import 'dotenv/config';

const isProd = process.env.NODE_ENV === 'production';

export const AppDataSource = new DataSource(
  isProd
    ? {
        type: 'postgres',
        host: process.env.DATASOURCE_HOST || 'localhost',
        port: 5432,
        username: process.env.DATASOURCE_USERNAME || '',
        password: process.env.DATASOURCE_PASSWORD || '',
        database: process.env.DATASOURCE_DB || 'nest-tester-db',
        ssl: { rejectUnauthorized: false }, // Supabase requires SSL
        synchronize: false, // use migrations in production
        logging: false,
        entities: [User],
        migrations: [],
        subscribers: [],
      }
    : {
        type: 'postgres',
        host: process.env.DATASOURCE_HOST || 'localhost',
        port: 5432,
        username: process.env.DATASOURCE_USERNAME || '',
        password: process.env.DATASOURCE_PASSWORD || '',
        database: process.env.DATASOURCE_DB || 'nest-tester-db',
        synchronize: true,
        logging: false,
        entities: [User],
        migrations: [],
        subscribers: [],
      },
);
