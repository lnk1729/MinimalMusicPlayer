import axios from 'axios';
import {SearchActionType} from '../reducers/search.reducer';

const SearchMedia =
  (
    keyword: string,
    setNotFound: () => void,
    setLoading: (state: boolean) => void,
  ) =>
  async dispatch => {
    axios
      .get('https://itunes.apple.com/search', {
        params: {
          term: keyword,
          entity: 'song',
        },
      })
      .then(response => {
        const searchData = response?.data?.results || [];
        if (response?.data?.resultCount === 0) {
          setNotFound();
        }
        setLoading(false);
        dispatch({
          type: SearchActionType.SET_RECENT_SEARCH_DATA,
          payload: searchData,
        });
      })
      .catch(error => {
        setLoading(false);
        setNotFound();
        console.log(error);
      });
  };

export default {SearchMedia};
