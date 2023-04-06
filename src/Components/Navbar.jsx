import { useState } from "react";

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
  
    <nav className="navbarSearch">
      <h3>Search Movie</h3>
      <div className="search">
        <input>
          type="text"
          placeholder="Search for movies"
          value={searchText}
          onChange={handleSearchChange}
          onKeyUp={handleKeyPress}
          </input>
        <button onClick={handleSearch}>
          Search
        </button>
      </div>
    </nav>    
  );
}

export default Navbar