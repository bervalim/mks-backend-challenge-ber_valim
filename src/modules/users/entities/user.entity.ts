import { getRounds, hashSync } from 'bcryptjs';
import { Reservation } from 'src/modules/reservation/entities/reservation.entity';
import {
  Entity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', length: 255, nullable: false })
  name: string;

  @Column({ name: 'email', length: 255, nullable: false, unique: true })
  email: string;

  @Column({ name: 'password', length: 255, nullable: false })
  password: string;

  @Column({ type: 'boolean', default: false })
  admin: boolean;

  @CreateDateColumn({ type: 'date' })
  createdAt: string;

  @UpdateDateColumn({ type: 'date' })
  updatedAt: string;

  @DeleteDateColumn({ type: 'date' })
  deletedAt: string | null;

  @OneToMany(() => Reservation, (reservations) => reservations.user)
  reservations: Reservation[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const hasRounds: number = getRounds(this.password);
    if (!hasRounds) this.password = hashSync(this.password, 10);
  }
}
