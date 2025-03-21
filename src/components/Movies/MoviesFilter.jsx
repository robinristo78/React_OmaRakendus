import React, { useReducer, useEffect } from 'react';

import './MoviesFilter.css';


const filterReducer = (state, action) => {
    switch (action.type) {
        case 'SET_YEAR':
            return { ...state, selectedYear: action.payload };
        case 'SET_YEARS':
            return { ...state, yearOptions: action.payload };
        default:
            return state;
    }
};

const MoviesFilter = (props) => {
  
    const [filterState, dispatch] = useReducer(filterReducer, {
        selectedYear: '2025',
        yearOptions: [], 
    });

    
    const dropdownChangeHandler = (event) => {
        const selectedValue = event.target.value;
        dispatch({ type: 'SET_YEAR', payload: selectedValue }); 
        props.onChangeFilter(selectedValue); 
    };

    
    useEffect(() => {
        if (props.movies) {
            const uniqueYears = [...new Set(props.movies.map((movie) => movie.year))].sort();
            dispatch({ type: 'SET_YEARS', payload: uniqueYears });
            if (uniqueYears.length > 0 && !uniqueYears.includes(filterState.selectedYear)) {
                dispatch({ type: 'SET_YEAR', payload: uniqueYears[0] });
                props.onChangeFilter(uniqueYears[0]);
            }
        }
    }, [props.movies]);

    return (
        <div className='movies-filter'>
            <div className='movies-filter__control'>
                <label>Filter by year</label>
                <select value={filterState.selectedYear} onChange={dropdownChangeHandler}>
                    {filterState.yearOptions.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default MoviesFilter;