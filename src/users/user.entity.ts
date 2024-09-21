import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ unique: true, length: 50 })
  email: string;

  @Column({ length: 20 })
  password: string;

  @Column()
  address: string;

  @Column()
  phone: number; // Asegúrate de que este campo exista

  @Column({ nullable: true, length: 50 })
  country?: string;

  @Column({ nullable: true, length: 50 })
  city?: string;

  // Relaciones, etc.
}
