import { useState } from "react";

function searchnavbar({ onSearch }) {
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
    <nav className="navbar">
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchText}
          onChange={handleSearchChange}
          onKeyUp={handleKeyPress}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </nav>
  );
}

export default searchnavbar