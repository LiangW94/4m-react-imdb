import initialState from './initialState';

export default function manageMoviesReducer(state = initialState.localMovies, action) {
    switch (action.type) {
        case 'CREATE_MOVIE_SUCCESS':
            return [...state, action.localMovies]
        default:
            return state
    }
}