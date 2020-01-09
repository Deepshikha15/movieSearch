import React from 'react';
import './App.css';
import MovieCard from './component/MovieCard';
import MoviesList from './component/MovieList';

function App() {
  return (
    <div className="App">
      <MovieCard/>
      <MoviesList/>
    </div>
  );
}

export default App;
