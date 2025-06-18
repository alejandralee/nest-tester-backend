import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATASOURCE_HOST || 'localhost', // use env variable or fallback
  port: 5432,
  username: process.env.DATASOURCE_USERNAME || '',
  password: process.env.DATASOURCE_PASSWORD || '',
  database: process.env.DATASOURCE_DB || 'nest-tester-db',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
