import { createStore } from 'redux';
import { allReducers } from './reducer/combineReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root2',
    storage,
  };

export const persistedReducer = persistReducer(persistConfig, allReducers);
export const store = createStore(persistedReducer); 
// export const store = createStore(allReducers); 