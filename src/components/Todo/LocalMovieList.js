import React from 'react';
import MovieListRow from './MovieListRow';
import { Link } from 'react-router-dom'

const LocalMovieList = ({ localMovies, handleRemove }) => {
    return (
        <div style={{ maxWidth: '60%', margin: '160px auto' }}>
            <Link className="btn btn-secondary" to='/Addmovie' style={{ margin: '30px' }}>Add a movie?</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Director</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {localMovies.map((movie, index) =>
                        <MovieListRow key={index} movie={movie.localMovies} onClick={handleRemove} id={index} />
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default LocalMovieList;
