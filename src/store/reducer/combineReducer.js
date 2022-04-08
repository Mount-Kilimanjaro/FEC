
import {categorySlice} from './categoryReducer';
import {shoppingCartSlice} from './shoppingCartReducer';
import {statisticSlice} from './siteStatisticReducer';
import {combineReducers} from 'redux';


export const allReducers = combineReducers({category: categorySlice.reducer, shoppingCart: shoppingCartSlice.reducer, statistic: statisticSlice.reducer});