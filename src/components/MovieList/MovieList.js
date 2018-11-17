import React from 'react';
import MovieForm from './MovieForm';

const MovieList = ({ movies, loading }) => {
    return (
        <div>
            {movies.length === 0? <div></div>:
            <MovieForm movies={movies.length === 0? []: movies[movies.length-1]} loading={loading}/>}
        </div>
    )
}

export default MovieList;
