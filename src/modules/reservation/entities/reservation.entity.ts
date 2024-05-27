import { Movie } from 'src/modules/movie/entities/movie.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'reservations' })
export class Reservation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'date', type: 'date' })
  date: string;

  @Column({ name: 'description', type: 'time' })
  hour: string;

  @PrimaryGeneratedColumn('uuid')
  reservationCode: string;

  @ManyToOne(() => User, (users) => users.reservations)
  user: User;

  @ManyToOne(() => Movie, (movies) => movies.reservations)
  movie: Movie;
}
