import { combineReducers } from 'redux';

import seriesReducer from './reducer_series'

const rootReducer = combineReducers({
  series: seriesReducer
});

export default rootReducer;