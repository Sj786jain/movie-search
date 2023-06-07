import React, { useEffect, useState } from 'react';
import { getMovieDetails } from './api';

function MovieDetails({ movieId }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(movieId);
        setMovie(details);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.releaseYear}</p>
      <p>{movie.plotSynopsis}</p>
      <p>Cast: {movie.cast.join(', ')}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
}

export default MovieDetails;
