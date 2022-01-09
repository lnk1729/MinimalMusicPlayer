export enum SearchActionType {
  SET_RECENT_SEARCH_DATA = 'SET_RECENT_SEARCH_DATA',
  CLEAR_RECENT_SEARCH_DATA = 'CLEAR_RECENT_SEARCH_DATA',
}

export type SearchData = any[];
export interface ISetSearchAction<T> {
  type: SearchActionType;
  payload: T;
}
export interface IClearSearchAction {
  type: SearchActionType;
}
export type SearchAction = ISetSearchAction<SearchData> | IClearSearchAction;

const defaultState: SearchData = [];

const SearchReducer = (
  state: SearchData = defaultState,
  action: SearchAction,
): SearchData => {
  switch (action.type) {
    case SearchActionType.SET_RECENT_SEARCH_DATA:
      return [...action.payload];
    case SearchActionType.CLEAR_RECENT_SEARCH_DATA:
      return [];
    default:
      return state;
  }
};
export default SearchReducer;
