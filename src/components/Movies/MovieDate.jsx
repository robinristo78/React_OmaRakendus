import './MovieDate.css';

const MovieDate = (props) => {
    const releaseYear = props.year;

    return (
        <div className='movie-date'>
            <div className='movie-date__year'>{releaseYear}</div>
        </div>
    );
}

export default MovieDate;