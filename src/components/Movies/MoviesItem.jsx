import './Movies.css'
import MovieDate from './MovieDate.jsx';
import Card from '../UI/Card.jsx'
import { useState } from 'react';

const MovieItem = (props) => {
    const [title, setTitle] = useState(props.movieData.title);


    return (
        <li>
            <Card className='expense-item'>
                <MovieDate date={props.movieData.year}/>
                <div className='expense-item__description'>
                    <h2>{props.movieData.title}</h2>
                    <div className='expense-item__price'>{props.movieData.genre}</div>
                    <div className='expense-item__price'>{props.movieData.rating}</div>
                </div>
                <button onClick={props.onEditMovie}>Edit</button>
            </Card>
        </li>
    )
}

export default MovieItem;