import React from 'react';
// import Form from "react-jsonschema-form";
// import { ClipLoader } from 'react-spinners';

const MovieForm = ({ movies }) => {
    return (
        <form style={{ paddingTop: '60px' }}>
            <img src={movies.Poster} alt="Not lucky enough, no poster for this movie" />
            <div>
                <p>    {movies.Title}</p>
                <p>     {movies.Year}</p>
                <p>    {movies.Rated}</p>
                <p> {movies.Director}</p>
                <p>   {movies.Actors}</p>
                <p>  {movies.Country}</p>
            </div>
        </form>
    );
}

export default MovieForm;
