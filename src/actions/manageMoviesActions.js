import * as actionTypes from './actionTypes';

let nextId = 0;

export function createMovieSuccess(localMovies) {
    return { type: actionTypes.CREATE_MOVIE_SUCCESS, id:nextId++, localMovies }
}

export function createMovie(localMovies) {
    return function (dispatch) {
        dispatch(createMovieSuccess(localMovies))
    }
}
