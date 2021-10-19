import React from 'react';
import MovieDetail from './MovieDetail';
import Card from '../Card';
export default function Movie() {
  const movieDetails = {
    title: '',
    slag: ['horror', 'Triller', 'Teen Program'],
    year: 2021,
    director: 'Manjunath Kalburgi',
    seasons: '3',
    episodes: '25',
    description:
      'What you all think about this design, let me know in comment section! .',
  };
  return (
    <div>
      <MovieDetail details={movieDetails} />
      <Card title="Popular this Week" />
    </div>
  );
}
