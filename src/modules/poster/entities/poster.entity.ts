import { Movie } from 'src/modules/movie/entities/movie.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  Check,
  Entity,
  OneToOne,
} from 'typeorm';

enum AgeRating {
  G = 'G',
  PG = 'PG',
  PG13 = 'PG-13',
  R = 'R',
  NC17 = 'NC-17',
}

@Entity({ name: 'posters' })
export class Poster {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'image', length: 255, nullable: true })
  image: string;

  @Column({ name: 'directorName', length: 255, nullable: false })
  directorName: string;

  @Column({ length: 2, nullable: false })
  @Check(`"rating"::integer >= 1 AND "rating"::integer <= 10`)
  rating: string;

  @Column({ length: 8, enum: AgeRating, default: AgeRating.G })
  ageRating: AgeRating;

  @OneToOne(() => Movie, (movie) => movie.poster)
  movie: Movie;
}
