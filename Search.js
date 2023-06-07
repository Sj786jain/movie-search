import React, { useState } from 'react';
import { searchMoviesByTitle } from './api';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const results = await searchMoviesByTitle(searchTerm);
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResults.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
}

export default Search;
