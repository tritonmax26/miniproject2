import { useState } from "react";
// import {movies} from "./moviecompo"
import { Card } from "react-bootstrap";

function Navbar({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(searchText);
    }
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
<div className="">  
    <nav className="navbarSearch">
      <div className="navwidth">
          <h3>Search Movie</h3>
          <div className="search">
          <p className = "asd">Welcome to our movie website, where you can immerse yourself in the world of film and entertainment. Our site offers an extensive collection of the latest movies, TV series, and documentaries, all available for streaming in high quality.
          </p>
          <p>
          Our movie website features a user-friendly interface that makes it easy to find the movie you're looking for. Whether you're in the mood for an action-packed blockbuster or a heartwarming romance, we have something for everyone. Our site also offers a comprehensive search function, so you can quickly find the perfect movie to suit your preferences.
          </p>
          <p>
          At our movie website, we are committed to providing the ultimate viewing experience for our users. So why wait? Sign up today and start exploring our vast library of movies, TV series, and documentaries!</p>
          




            <input
              type="text"
              placeholder="Search for movies"
              value={searchText}
              onChange={handleSearchChange}
              onKeyUp={handleKeyPress}
            >
            </input>
            <button onClick={handleSearch}>
              Search
            </button>
          </div>
      </div>    
    </nav> 

</div> 
    
  );
}

export default Navbar