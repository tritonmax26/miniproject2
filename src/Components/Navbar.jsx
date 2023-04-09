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
          <div className="search"> 
          <h3>Movies for Junkies</h3>           
            <div>
              <p className = "asd">
                Welcome to our movie website, where you can immerse yourself in the world of film and entertainment. Our site offers an extensive collection of the latest movies, TV series, and documentaries, all available for streaming in high quality.
              </p>
            </div>
            <div>
              <p>
                Our movie website features a user-friendly interface that makes it easy to find the movie you're looking for. Whether you're in the mood for an action-packed blockbuster or a heartwarming romance, we have something for everyone. Our site also offers a comprehensive search function, so you can quickly find the perfect movie to suit your preferences.
              </p>              
            </div>
            
            <div>
               <p>
                At our movie website, we are committed to providing the ultimate viewing experience for our users. So why wait? Sign up today and start exploring our vast library of movies, TV series, and documentaries!
                </p>              
            </div>               
              
          </div>
          
          <div className="searchbarwidth">
          <h3 className="search">Search a Movie</h3>  
                <input type="text" placeholder="Search for movies" value={searchText} onChange={handleSearchChange} onKeyUp={handleKeyPress} >
                </input>
                <div className="buttonPadding">
                <button onClick={handleSearch} className="buttonupdate">
                      Search
                </button>
                </div>
                
          </div>
      </div>    
    </nav> 

</div> 
    
  );
}

export default Navbar