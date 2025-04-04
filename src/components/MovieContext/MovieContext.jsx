import React, {useState, createContext, useEffect } from "react";

const MovieContext = createContext();

export const MovieProvider = ({children}) => {
    const [movies, setMovies] = useState(() => {
        const moviesFromLS = JSON.parse(localStorage.getItem('movies'));
        return moviesFromLS || [];
    });

    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(movies));
    }, [movies]);  

    const addMovie = (movie) => {
        const movieIdCounter = localStorage.getItem('movieIdCounter') || 0;
        movie.id = parseInt(movieIdCounter) + 1;
        localStorage.setItem('movieIdCounter', movie.id);
        setMovies((prevMovies) => [...prevMovies, movie]);
    };

    const editMovie = (updatedMovie) => {
        setMovies((prevMovies) =>
            prevMovies.map((movie) =>
                movie.id === updatedMovie.id ? updatedMovie : movie
            )
        );
    };

    return (
        <MovieContext.Provider value={{movies, addMovie, editMovie}}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieContext;