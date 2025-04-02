import './Movies.css'
import Card from '../UI/Card.jsx'
import { useState } from 'react';
import './MovieItem.css';
import MovieDate from './MovieDate.jsx';


const MovieItem = (props) => {
    const [title, setTitle] = useState(props.movieData.title);


    return (
        <li>
            <Card className='movie-item'>
                <div className='movie-item__description'>
                    <h2>{props.movieData.title}</h2>
                    <div className='movie-item__price'>{props.movieData.genre}</div>
                    <div className='movie-item__price'>{props.movieData.rating}</div>
                </div>
                <button onClick={props.onEditMovie}>Edit</button>
            </Card>
        </li>
    )
}

export default MovieItem;