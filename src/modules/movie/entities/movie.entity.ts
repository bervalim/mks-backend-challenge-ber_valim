import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'title', length: 255, nullable: false, unique: true })
  title: string;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string;

  @CreateDateColumn({ type: 'date' })
  createdAt: string;

  @UpdateDateColumn({ type: 'date' })
  updatedAt: string;
}
