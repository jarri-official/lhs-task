import { MovieListFilterPipe } from './movie-list-filter.pipe';
/**
 * Due to some issues with Typescript and Jest this ugly import is quick fix.
 */
import { GenreType } from '../../../../../../../libs/models/src';

describe('MovieListFilterPipe', () => {
  let pipe: MovieListFilterPipe;
  const mockMovieList = [
    {
      id: 0,
      key: 'key0',
      name: '0',
      description: 'description',
      rate: '10',
      genres: [GenreType.action],
      length: '1h 10m',
      img: 'img.jpg'
    },
    {
      id: 1,
      key: 'key1',
      name: '1',
      description: 'description',
      rate: '10',
      genres: [GenreType.drama],
      length: '1h 10m',
      img: 'img.jpg'
    },
    {
      id: 2,
      key: 'key2',
      name: '01',
      description: 'description',
      rate: '10',
      genres: [GenreType.scifi],
      length: '1h 10m',
      img: 'img.jpg'
    }
  ];

  beforeEach(() => {
    pipe = new MovieListFilterPipe();
  })

  it('should return movies with "1" in name', () => {
    const filteredMovies = pipe.transform(mockMovieList, {name: '1', genres: {}})
    expect(filteredMovies).toEqual([mockMovieList[1], mockMovieList[2]]);
  });

  it('should return movies with "0" in name', () => {
    const filteredMovies = pipe.transform(mockMovieList, {name: '0', genres: {}})
    expect(filteredMovies).toEqual([mockMovieList[0], mockMovieList[2]]);
  });

  it('should return scifi movies', () => {
    const filteredMovies = pipe.transform(mockMovieList, {name: '', genres: {[GenreType.scifi]: true}})
    expect(filteredMovies).toEqual([mockMovieList[2]]);
  });
});
