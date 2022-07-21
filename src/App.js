import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getMovieList = async() => {
    const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=92312ffb`
    const response = await fetch(url); 
    const responseJson = await response.json();
    if(responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <div className="App">
      <Header heading="Movie Searcher" />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <MovieList movies={movies} />
      <Footer />
    </div>
  );
}

export default App;
