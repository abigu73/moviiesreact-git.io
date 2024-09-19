import React, { useEffect, useState } from 'react';
import MoviesCard from './MoviesCard';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'https://www.omdbapi.com?apikey=f6880df5';

const movie3 = {
  "Title": "Spiderman",
  "Year": "1990",
  "imdbID": "tt0100669",
  "Type": "movie",
  "Poster": "N/A"
};

const App = () => {
  const [movies, setMovies] = useState([]);
const [searchTerm,setSearchTerm]= useState('');

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className='app'>
      <h1>Movies1</h1>
      
      <div className='search'>
        <input   
          placeholder='Search for Movies'
          value={searchTerm}
          onChange={(e) =>  setSearchTerm(e.target.value)}
        />
        <img 
          src={SearchIcon} 
          alt="search"
          onClick={() => searchMovies(searchTerm) } 
        />
      </div>
      
      {movies?.length > 0 ? (
        <div className='container'>
          
          {movies.map((movie) => (
            <MoviesCard  movie ={movie}/>
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies found</h2> {/* Add a message here */}
        </div>
      )}
      
    </div>
  );
};

export default App;
