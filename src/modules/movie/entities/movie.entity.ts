import { Genre } from 'src/modules/genre/entities/genre.entity';
import { Poster } from 'src/modules/poster/entities/poster.entity';
import { Reservation } from 'src/modules/reservation/entities/reservation.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'movies' })
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

  @OneToMany(() => Reservation, (reservations) => reservations.movie)
  reservations: Reservation[];

  @OneToOne(() => Poster, (poster) => poster.movie)
  @JoinColumn()
  poster: Poster;

  @ManyToOne(() => Genre, (genre) => genre.movies)
  genre: Genre;
}
