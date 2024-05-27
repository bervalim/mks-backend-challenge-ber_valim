import { Movie } from 'src/modules/movie/entities/movie.entity';
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';

enum GenreType {
  COMEDY = 'comedy',
  DRAMA = 'drama',
  ACTION = 'action',
  HORROR = 'horror',
  SCIENCE_FICTION = 'science_fiction',
}

@Entity({ name: 'genres' })
export class Genre {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255, enum: GenreType, default: GenreType.COMEDY })
  name: string;

  @OneToMany(() => Movie, (movie) => movie.genre)
  movies: Movie[];
}
