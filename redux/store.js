// import { composeWithDevTools } from 'redux-devtools-extension'
import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'
import counterReducer from './counter'
import usersReducer from './users'

const reducers = combineReducers({
    counter: counterReducer,            
    users: usersReducer,            
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['']
};

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
    reducer: persistedReducer,
});