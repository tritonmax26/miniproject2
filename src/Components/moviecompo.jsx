import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';


function MovieComponent() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const WebDescription = () => {
    return (
      <div>Welcome to our movie website, where you can immerse yourself in the world of film and entertainment. Our site offers an extensive collection of the latest movies, TV series, and documentaries, all available for streaming in high quality.
  
      Our movie website features a user-friendly interface that makes it easy to find the movie you're looking for. Whether you're in the mood for an action-packed blockbuster or a heartwarming romance, we have something for everyone. Our site also offers a comprehensive search function, so you can quickly find the perfect movie to suit your preferences.
      
      In addition to our diverse selection of films, our website provides a range of exclusive features that make us stand out from the competition. We offer personalized movie recommendations based on your viewing history, as well as user reviews and ratings to help you make an informed decision.
      
      Our website is optimized for all devices, so you can enjoy your favorite movies on your laptop, tablet, or smartphone, anytime and anywhere. We also offer a range of subscription options, including a free trial, so you can experience our site for yourself before committing to a full membership.
      
      At our movie website, we are committed to providing the ultimate viewing experience for our users. So why wait? Sign up today and start exploring our vast library of movies, TV series, and documentaries!</div>
    )
  }
  

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
          <p></p>
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