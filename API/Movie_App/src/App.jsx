import React, { useEffect, useState } from 'react'
import './App.css'

const SearchBar = ({onSearch}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) =>{
    onSearch(e.target.value);
    setValue(e.target.value)
  }

  return (
    <input type='text' placeholder='Enter a Movie' onChange={handleChange} value={value} />
  )
}

const Movie = ({ movies }) => {

  return (
    <section>
              <p>{movies.length}films</p>
      <div className='container'>
        {movies.map((movie, index) => {
          return (
            <div className="movie-box" key={index}>
              <div className='movie-name'><h1>{movie.title}</h1></div>
              <div className='movie-poster'>
                <img  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
              </div>
              <div>
                <p>{movie.overview}</p>
              </div>
            </div>
          )
        })}

      </div>
    </section>
  )
}

function App() {
  const [movie, setMovie] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const API_KEY = "de95af19f36c3d72627d6cc4798c302b";
  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  const getMovie = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(response => setMovie(response.results))
      .catch(err => console.log(err));
  }


  const handleSearch = (searchTerm) =>{
    const movieFilter = movie.filter((movie)=>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(movieFilter)
  }

  useEffect(() => {
    getMovie()
  }, [])
  console.log(movie);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Movie movies={filteredMovies.length >0 ? filteredMovies:  movie} />
    </>
  )
}

export default App
