import './NewMovie.css';
import MoviesForm from './MoviesForm.jsx';
import { useState } from 'react';

const NewMovie = (props) => {
    const [editForm, setEditForm] = useState(false);

    const saveMovieDataHandler = (enteredMovieData) => {
        const movieData = {
            ...enteredMovieData,
            id: props.movieToEdit ? props.movieToEdit.id : Math.random().toString(),
        };

        if (props.movieToEdit) {
            props.onEditMovie(movieData);
        } else {
            props.onAddMovie(movieData); 
        }

        setEditForm(false);
    };

    const startFormHandler = () => {
        setEditForm(true);
        console.log('form edit open');
    };

    const stopFormHandler = () => {
        setEditForm(false);
        console.log('form edit close');
    };

    return (
        <div className='new-movie'>
            {!editForm && (
                <button onClick={startFormHandler}>
                    {props.movieToEdit ? 'Edit Movie' : 'Add New Movie'}
                </button>
            )}
            {editForm && (
                <MoviesForm
                    onAddMovie={props.onAddMovie}
                    onEditMovie={props.onEditMovie}
                    onCancel={stopFormHandler}
                    movieToEdit={props.movieToEdit} // Pass movieToEdit to the form
                />
            )}
        </div>
    );
};

export default NewMovie;