import initialState from './initialState';

export default function manageMoviesReducer(state = initialState.localMovies, action) {
    switch (action.type) {
        case 'CREATE_MOVIE_SUCCESS':
            return [...state, { id: action.id, localMovies: action.localMovies }]
        case 'REMOVE_MOVIE_SUCCESS':
        return state.filter(item => item.id !== action.id)
        default:
            return state
    }
}