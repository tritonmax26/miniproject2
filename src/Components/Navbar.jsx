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