import './MoviesList.css'
import MovieItem from './MoviesItem'

const MoviesList = (props) => {
    if(props.movies.length === 0) {
        return (
            <p className='movies-list__fallback'>No movies found.</p>
        )
    }

    return(
        <>
            <ul className='movies-list'>
                {props.movies.map((movie) => (
                    <MovieItem
                    movieData={movie}
                    key={movie.id}
                    onEditMovie={() => props.onEditMovie(movie)}/>
             ))}
            </ul>
        </>
    )
}

export default MoviesList;