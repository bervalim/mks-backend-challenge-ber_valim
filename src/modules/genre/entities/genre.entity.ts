import { PrimaryGeneratedColumn, Column } from 'typeorm';

enum GenreType {
  COMEDY = 'comedy',
  DRAMA = 'drama',
  ACTION = 'action',
  HORROR = 'horror',
  SCIENCE_FICTION = 'science_fiction',
}

export class Genre {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255, enum: GenreType, default: GenreType.COMEDY })
  name: string;
}
