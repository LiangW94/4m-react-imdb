import React from 'react';
import { ClipLoader } from 'react-spinners';
// import Form from "react-jsonschema-form";
// import { ClipLoader } from 'react-spinners';

const MovieForm = ({ movies, loading }) => {
    return (
        <div style={{ paddingTop: '60px', display: 'flex', justifyContent: 'center' }}>
            {loading ? <ClipLoader style={{ flex: '0 1' }} sizeUnit={"px"} size={130} color={'#123abc'} loading={loading} />
                :
                <img style={{ flex: '0 1' }} src={movies.Poster !== "N/A" ? movies.Poster : "https://static.amazon.jobs/teams/53/thumbnails/IMDb_Jobs_Header_Mobile.jpg?1501027253"} alt="Not lucky enough, no poster for this movie" />}

            <div style={{ padding: '80px' }}>
                <h3>Title:    {movies.Title}</h3>
                <p>Year:     {movies.Year}</p>
                <p>Rated:    {movies.Rated}</p>
                <p>Director: {movies.Director}</p>
                <p>Actors:   {movies.Actors}</p>
                <p>Country:  {movies.Country}</p>
            </div>
        </div>
    );
}

export default MovieForm;
