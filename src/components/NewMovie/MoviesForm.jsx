import { Fragment, useRef, useState, useContext } from 'react';
import Error from '../UI/Error.jsx';
import MovieContext from '../MovieContext/MovieContext.jsx';
import './MoviesForm.css';

const MoviesForm = (props) => {
    const [error, setError] = useState(null);
    const { addMovie } = useContext(MovieContext);
    console.log(error);

    const titleInputRef = useRef();
    const yearInputRef = useRef();
    const genreInputRef = useRef();
    const ratingInputRef = useRef();

    useEffect(() => {
        if(props.movieToEdit) {
            titleInputRef.current.value = props.movieToEdit.title;
            yearInputRef.current.value = props.movieToEdit.year;
            genreInputRef.current.value = props.movieToEdit.genre;
            ratingInputRef.current.value = props.movieToEdit.rating;
        }
    }, [props.movieToEdit]) 


    const errorHandler = () => {
        setError(null)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        const enteredTitle = titleInputRef.current.value;
        const enteredYear = yearInputRef.current.value;
        const enteredGenre = genreInputRef.current.value;
        const enteredRating = ratingInputRef.current.value;

        event.preventDefault();
        
        if(enteredTitle.trim().length === 0 || enteredYear.trim().length === 0 || enteredGenre.trim().length === 0 || enteredRating.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter valid values for all fields (non-empty values)',
            });
            return
        }

        const movieData = {
            title: enteredTitle,
            year: enteredYear,
            genre: enteredGenre,
            rating: parseFloat(enteredRating),
            id : props.movieToEdit ? props.movieToEdit.id : Math.random().toString(),
        }

        if (props.movieToEdit) {
            props.onEditMovie(movieData);
        } else {
            props.onAddMovie(movieData);
        }

        titleInputRef.current.value = '';
        yearInputRef.current.value = '';
        genreInputRef.current.value = '';
        ratingInputRef.current.value = '';
        props.onCancel();
    }

    return(
        <Fragment>
            {error && (
                <Error
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <div>
                <form onSubmit={submitHandler}>
                    <div className='new-movie__controls'>
                        <div className='new-movie__control'>
                            <label>Title</label>
                            <input 
                                type="text" 
                                id='title'
                                ref={titleInputRef}
                            />
                        </div>
                        <div className='new-movie__control'>
                            <label>Release Year</label>
                            <input 
                                type="number" 
                                min="1888"
                                max={new Date().getFullYear()}
                                id='year'
                                ref={yearInputRef}
                            />
                        </div>
                        <div className='new-movie__control'>
                            <label>Genre</label>
                            <input 
                                type="text"
                                id='genre'
                                ref={genreInputRef}
                            />
                        </div>
                        <div className='new-movie__control'>
                            <label>Rating</label>
                            <input 
                                type="number"
                                step="0.1"
                                min="0"
                                max="5"
                                id='rating'
                                ref={ratingInputRef}
                            />
                        </div>
                    </div>
                    <div className='new-movie__actions'>
                        <button type='button' onClick={props.onCancel}>Cancel</button>
                        <button type="submit">
                            {props.movieToEdit ? 'Save Changes' : 'Add Movie'}
                        </button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default MoviesForm;