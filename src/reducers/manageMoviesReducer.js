import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function manageMoviesReducer(state = initialState.localMovies, action) {
    let numId = parseInt(action.id);
    switch (action.type) {
        case types.CREATE_MOVIE_SUCCESS:
            return [...state, { id: numId, localMovies: action.localMovies }]
        case types.REMOVE_MOVIE_SUCCESS:
            return state.filter(item => item.id !== numId)
        case types.UPDATE_MOVIE_SUCCESS:
            return [...state.filter(movie => movie.id !== numId), { id: numId, localMovies: action.localMovies }]
        default:
            return state
    }
}