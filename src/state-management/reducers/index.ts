import {combineReducers} from '@reduxjs/toolkit';
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import SearchReducer, {SearchData} from './search.reducer';

export type AppState = {
  search: SearchData;
};
const rootReducer = combineReducers<AppState>({
  search: SearchReducer,
});
export const useSelector: TypedUseSelectorHook<ReturnType<typeof rootReducer>> =
  useReduxSelector;
export default rootReducer;
