import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Product } from '../modules/products/entities/product.entities';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '112233',
  database: 'test',
  entities: [Product],
  synchronize: true,
};