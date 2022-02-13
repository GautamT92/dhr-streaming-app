import { combineReducers } from 'redux';


import movieReducer from './movies/movie.reducer';


const rootReducer = combineReducers({

    movies: movieReducer,

});

export default rootReducer;