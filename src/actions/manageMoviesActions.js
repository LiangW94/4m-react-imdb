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

export function removeMovieSuccess(localMovies,id) {
    return { type: actionTypes.REMOVE_MOVIE_SUCCESS, localMovies ,id }
}

export function reomveMovie(localMovies, id) {
    return function (dispatch) {
        dispatch(removeMovieSuccess(localMovies,id))
    }
}
