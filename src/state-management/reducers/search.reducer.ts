export enum MessagesActionType {
  SET_RECENT_SEARCH_DATA = 'SET_RECENT_SEARCH_DATA',
  CLEAR_RECENT_SEARCH_DATA = 'CLEAR_RECENT_SEARCH_DATA',
}

export type SearchData = any[];
export interface ISetSearchAction<T> {
  type: MessagesActionType;
  payload: T;
}
export interface IClearSearchAction {
  type: MessagesActionType;
}
export type SearchAction = ISetSearchAction<SearchData> | IClearSearchAction;

const defaultState: SearchData = [];

const SearchReducer = (
  state: SearchData = defaultState,
  action: SearchAction,
): SearchData => {
  switch (action.type) {
    case MessagesActionType.SET_RECENT_SEARCH_DATA:
      return {
        ...action.payload,
      };
    case MessagesActionType.CLEAR_RECENT_SEARCH_DATA:
      return [];
    default:
      return state;
  }
};
export default SearchReducer;
