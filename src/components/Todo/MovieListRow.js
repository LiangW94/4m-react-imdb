import React from 'react';
import { Link } from 'react-router-dom';

const MovieListRow = ({ movie, onClick, id }) => {
  return (
    <tr>
      <td><Link to={`/addmovie/${id}`}>{movie.Title}</Link></td>
      <td>{movie.Year}</td>
      <td>{movie.Director}</td>
      <td>{movie.Country}</td>
      <td><button onClick={() => { onClick(id) }} className="btn btn-secondary">X</button></td>
    </tr>
  );
};

export default MovieListRow;
