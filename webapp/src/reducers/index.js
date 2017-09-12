import { combineReducers } from 'redux';

import seriesReducer from './reducer_series'
import moviesReducer from './reducer_movies'

const rootReducer = combineReducers({
  series: seriesReducer,
  movies: moviesReducer
});

export default rootReducer;