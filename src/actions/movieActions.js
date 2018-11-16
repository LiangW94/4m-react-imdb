import * as actionTypes from './actionTypes';

export function loadMovieSuccess(movies) {
    return { type: actionTypes.LOAD_MOVIE_SUCCESS, movies }
}

export function loadMovie() {
    return function (dispatch) {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=f45d6202')
            .then(res => {
                if (!res.ok) { throw Error(res.statusText) };
                return res.json();
            })
            .then(movies => {
                dispatch(loadMovieSuccess(movies));
            })
            .catch(e => { throw Error(e) })
    }
}