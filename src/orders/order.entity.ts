import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { OrderDetail } from './order-detail.entity';
import { ColumnMetadata } from 'typeorm/metadata/ColumnMetadata.js';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  date: Date;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @OneToOne(() => OrderDetail)
  @JoinColumn()
  orderDetail: OrderDetail;
}
