import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { Product } from '../products/product.entity'; // Asegúrate de que exista
import { Category } from '../categories/category.entity'; // Asegúrate de que exista
import { Order } from '../orders/order.entity'; // Asegúrate de que exista
import { OrderDetail } from '../order-details/order-detail.entity'; // Asegúrate de que exista

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres', // Asegúrate de que sea 'postgres'
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true, // Cambiar a false en producción
  entities: [User, Product, Category, Order, OrderDetail],
  migrations: ['dist/migrations/*{.ts,.js}'],
};
