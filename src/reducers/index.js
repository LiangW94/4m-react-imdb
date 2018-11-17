import { combineReducers } from 'redux';
import movies from './moviesReducer';
import ajaxStatus from './ajaxStatusReducer';

const rootReducer = combineReducers({
    movies,
    ajaxStatus
});

export default rootReducer;