
import {categorySlice} from './categoryReducer';
import {combineReducers} from 'redux';


export const allReducers = combineReducers({category: categorySlice.reducer});