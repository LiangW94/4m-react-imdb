import { combineReducers } from 'redux';
import movies from './moviesReducer';
import ajaxStatus from './ajaxStatusReducer';
import localMovies from './manageMoviesReducer';

const rootReducer = combineReducers({
    movies,
    ajaxStatus,
    localMovies
});

export default rootReducer;