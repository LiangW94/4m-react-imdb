import initialState from './initialState';

export default function moviesReducer(state = initialState.movies, action) {
    switch (action.type) {
        case 'LOAD_MOVIE_SUCCESS':
            return [...state, action.movies]
        default:
            return state
    }
}