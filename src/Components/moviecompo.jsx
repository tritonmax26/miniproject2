import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';


function MovieComponent() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (searchText) => {
    setIsLoading(true);
    try {
      const response = await axios({
        method: 'GET',
        url: 'https://movie-database-alternative.p.rapidapi.com/',
        headers: {
          'x-rapidapi-key': '6efdffa377msh5e18a73283f0350p196498jsnb97bc6405e03',
          'x-rapidapi-host': 'movie-database-alternative.p.rapidapi.com',
        },
        params: {
          page: 1,
          r: 'json',
          s: searchText,
        },
      });
      setMovies(response.data.Search);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const handleSearch = (searchText) => {
    fetchData(searchText);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (movies.length > 0) {
  return (
    <div>
        <div className='navbarmovie'>
          <div>
          <Navbar onSearch={handleSearch} />
          </div>
        <h2>Movie List</h2>
        </div>
        <div className="movie-container">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="movie">
              <img src={movie.Poster} alt={`${movie.Title} Poster`} />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          ))}
        </div>
    </div>   
    );
  }
  return <Navbar onSearch={handleSearch} />;
}
  export default MovieComponent