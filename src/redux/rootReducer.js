import { combineReducers } from 'redux'

import Character from './character'
import MovieList from './movieList'

const reducer = combineReducers({
    Character,
    MovieList,
});

export default reducer;
