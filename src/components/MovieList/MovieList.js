import React from 'react';
import MovieForm from './MovieForm';

const MovieList = ({ movies }) => {
    return (
        <div>
            {console.log(movies)}
            {console.log(movies.length ===0)}
            <MovieForm movies={movies.length === 0? []: movies[movies.length-1]}/>
        </div>
    )
}

export default MovieList;
