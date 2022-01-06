import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import FilesystemStorage from 'redux-persist-filesystem-storage';
import {PersistConfig} from 'redux-persist/lib/types';
import thunk from 'redux-thunk';
import MainReducer from './reducers';

const middlewares = [thunk];
const enhancers = [applyMiddleware(...middlewares)];

const persistConfig: PersistConfig<any, any, any, any> = {
  key: 'root',
  timeout: 60000,
  storage: FilesystemStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, MainReducer);
export const store = createStore(persistedReducer, compose(...enhancers));

export const persistor = persistStore(store, null);
