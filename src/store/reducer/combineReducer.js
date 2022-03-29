
import {stateSlice} from './stateReducer'
import {combineReducers} from 'redux'


export const allReducers = combineReducers({state: stateSlice.reducer})