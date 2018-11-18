import * as actionTypes from './actionTypes';

export function createMovieSuccess(localMovies) {
    return { type: actionTypes.CREATE_MOVIE_SUCCESS, localMovies }
}

export function createMovie(localMovies) {
    return function (dispatch) {
        dispatch(createMovieSuccess(localMovies))
    }
}
