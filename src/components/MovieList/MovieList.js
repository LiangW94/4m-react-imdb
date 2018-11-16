import React from 'react';
import MovieForm from './MovieForm';

const MovieList = ({ movies }) => {
    return (
        <div>
            <MovieForm movies={movies[0]? movies[0]: []}/>
        </div>
    )
}

export default MovieList;
