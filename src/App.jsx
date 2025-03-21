import './App.css'
import React from 'react';
import { MovieProvider } from './components/MovieContext/MovieContext.jsx'; 
import Movies from './components/Movies/Movies';
import NewMovie from './components/NewMovie/NewMovie.jsx';

const DYMMY_MOVIES = [
  {
    id: 'id1',
    title: "Garry Potter",
    year: '2022',
    genre: 'Fantasy',
    rating: 3.9
  },
]

const App = () => {
  return (
    <MovieProvider>
      <div className='App'>
        <NewMovie />
        <Movies />
      </div>
    </MovieProvider>
  );
}

export default App;