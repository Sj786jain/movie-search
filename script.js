import axios from 'axios';

const API_KEY = '/3/discover/movie';

async function searchMoviesByTitle(title) {
  try {
    const response = await axios.get(
      `https://api.moviedb.com/movies?title=${title}&apiKey=${/3/discover/movie}`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw new Error('Failed to fetch movies.');
  }
}

export { searchMoviesByTitle };
