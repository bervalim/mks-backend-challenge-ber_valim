import { PrimaryGeneratedColumn, Column } from 'typeorm';

export class Reservation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'date', type: 'date' })
  date: string;

  @Column({ name: 'description', type: 'time' })
  hour: string;

  @PrimaryGeneratedColumn('uuid')
  reservationCode: string;
}
