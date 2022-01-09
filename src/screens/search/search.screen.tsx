import React from 'react';
import {Button, Keyboard, View, FlatList} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import debounce from 'lodash.debounce';
import {useDispatch} from 'react-redux';
import {navigationRef, NAVIGATION_ROUTES} from '../../navigators';
import {SearchActions} from '../../state-management/actions';
import {useSelector} from '../../state-management/reducers';
// import {SearchActionType} from '../../state-management/reducers/search.reducer';
import {COLORS} from '../../theme';
import Header from '../../ui/common/header.component';
import Screen from '../../ui/common/screen.component';
import SearchResultCard, {
  ITrackData,
} from '../../ui/search/searchresult.component';
import styles from './styles';

const SearchScreen = () => {
  const dispatch = useDispatch();
  const searchData = useSelector(state => state.search);
  const [showHeader, setShowHeader] = React.useState(true);
  const [showClear, setShowClear] = React.useState(false);

  const _onSubmitSearch = React.useCallback(
    (text: string) => {
      if (!text) {
        return;
      }

      dispatch(SearchActions.SearchMedia(text));
    },
    [dispatch],
  );

  const onSubmitSearch = debounce(_onSubmitSearch, 500);

  const onClickSearchEntry = React.useCallback((data: ITrackData) => {
    navigationRef.current?.navigate(NAVIGATION_ROUTES.PLAYER, {
      mediaData: data,
    });
  }, []);

  // const onClearSearch = () => {
  //   dispatch({type: SearchActionType.CLEAR_RECENT_SEARCH_DATA});
  // };

  const setEditingMode = React.useCallback((mode: boolean) => {
    setShowHeader(!mode);
    setShowClear(mode);
    !mode && Keyboard.dismiss();
  }, []);

  return (
    <Screen>
      {showHeader && <Header title="Search" />}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder={'Search for a song or album...'}
          placeholderTextColor={COLORS.GREY3}
          onChangeText={onSubmitSearch}
          onFocus={() => setEditingMode(true)}
          onBlur={() => setEditingMode(false)}
          numberOfLines={2}
          style={styles.searchInput}
        />
        {showClear && (
          <Button
            onPress={() => {
              setEditingMode(false);
            }}
            title="Cancel"
          />
        )}
      </View>
      <FlatList
        data={searchData}
        contentContainerStyle={styles.flatlistContainer}
        ItemSeparatorComponent={() => <View style={styles.flatlistSeparator} />}
        ListFooterComponent={() => <View style={{}} />}
        // ListEmptyComponent={renderEmptyListFiller}
        renderItem={({item}): any => (
          <SearchResultCard
            trackData={item}
            onTouch={() => onClickSearchEntry(item)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </Screen>
  );
};

export default SearchScreen;
