import { useState, useEffect, useContext } from 'react';
import './Movies.css';
import Card from '../UI/Card.jsx';
import MoviesFilter from './MoviesFilter.jsx';
import MoviesList from './MoviesList.jsx';
import MovieContext from '../MovieContext/MovieContext.jsx';
import NewMovie from '../NewMovie/NewMovie.jsx';


const Movies = () => {
    const { movies, addMovie, editMovie } = useContext(MovieContext);
    const [filteredYear, setFilteredYear] = useState('2025');
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [movieToEdit, setMovieToEdit] = useState(null);

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log(`Year data in Movies.js ${selectedYear}`);
    };

    const editMovieHandler = (movie) => {
        setMovieToEdit(null); // Clear the state first
        setTimeout(() => setMovieToEdit(movie), 0); // Set the new movie after a short delay
    };

    const stopEditMovieHandler = () => {
        setMovieToEdit(null); // Clear the movie to edit
    };



    useEffect(() => {
        setFilteredMovies(movies.filter(movie => movie.year.toString() === filteredYear));
    }, [movies, filteredYear]);

    console.log('Filtered movies:', filteredMovies);

    return (
        <Card className='movies'>
         
            <NewMovie
            onAddMovie={addMovie}
            onEditMovie={editMovie}
            movieToEdit={movieToEdit}
            onClearEditMovie={stopEditMovieHandler}
            onCancel={stopEditMovieHandler}
        />
        <MoviesFilter
            movies={movies}
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
        />
        <MoviesList
            movies={filteredMovies}
            onEditMovie={editMovieHandler} // Pass edit handler to the list
        />
        </Card>
    );
}

export default Movies;