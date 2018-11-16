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

export function searchMovieSuccess(movies) {
    return { type: actionTypes.SEARCH_MOVIE_SUCCESS, movies }
}

export function searchMovie(title) {
    return function (dispatch) {
        fetch(`http://www.omdbapi.com/?t=${title}&apikey=f45d6202`)
            .then(res => {
                if (!res.ok) { throw Error(res.statusText) };
                return res.json();
            })
            .then(movies => {
                dispatch(searchMovieSuccess(movies));
            })
            .catch(e => { throw Error(e) })
    }
}

export function luckyMovieSuccess(movies) {
    return { type: actionTypes.LUCKY_MOVIE_SUCCESS, movies }
}

export function luckyMovie() {

    return function (dispatch) {

        let number = Math.floor((Math.random() * 2155529) + 1)
        let str = '' + number;
        while (str.length < 7) {
            str = '0' + str;
        }
        let movieId = str;
        fetch(`http://www.omdbapi.com/?i=tt${movieId}&apikey=f45d6202`)
            .then(res => {
                if (!res.ok) { throw Error(res.statusText) };
                return res.json();
            })
            .then(movies => {
                dispatch(luckyMovieSuccess(movies));
            })
            .catch(e => { throw Error(e) })
    }
}