import axios from 'axios';
import {SearchActionType} from '../reducers/search.reducer';

const SearchMedia = (keyword: string) => async dispatch => {
  axios
    .get('https://itunes.apple.com/search', {
      params: {
        term: keyword,
        entity: 'song',
      },
    })
    .then(response => {
      const searchData = response?.data?.results || [];
      dispatch({
        type: SearchActionType.SET_RECENT_SEARCH_DATA,
        payload: searchData,
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export default {SearchMedia};
