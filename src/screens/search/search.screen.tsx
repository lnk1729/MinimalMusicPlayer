import React from 'react';
import {Button, Keyboard, View, FlatList} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import debounce from 'lodash.debounce';
import {useDispatch} from 'react-redux';
import {navigationRef, NAVIGATION_ROUTES} from '../../navigators';
import {SearchActions} from '../../state-management/actions';
import {useSelector} from '../../state-management/reducers';
import {SearchActionType} from '../../state-management/reducers/search.reducer';
import {COLORS} from '../../theme';
import Header from '../../ui/common/header.component';
import Screen from '../../ui/common/screen.component';
import SearchResultCard, {
  ITrackData,
} from '../../ui/search/searchresult.component';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchNoResults from '../../ui/search/searchnoresults.component';
import SearchLander from '../../ui/search/searchlander.component';
import Loader from '../../ui/common/loader.component';

const enum EmptyState {
  LANDER = 'LANDER',
  NONE = 'NONE',
  NO_RESULT = 'NO_RESULT',
}

const SearchScreen = () => {
  const dispatch = useDispatch();
  const inputRef = React.createRef<TextInput>();
  const searchData = useSelector(state => state.search);
  const [searching, setSearching] = React.useState(false);
  const [emptyState, setEmptyState] = React.useState<EmptyState>(
    EmptyState.LANDER,
  );
  const [showHeader, setShowHeader] = React.useState(true);
  const [showCancel, setShowCancel] = React.useState(false);
  const [showClear, setShowClear] = React.useState(false);

  const setNotFound = () => {
    setEmptyState(EmptyState.NO_RESULT);
  };

  const _onSubmitSearch = React.useCallback(
    (text: string) => {
      if (text === null || typeof text === 'undefined' || text === '') {
        setShowClear(false);
        return;
      }

      setSearching(true);
      setShowClear(true);
      dispatch(SearchActions.SearchMedia(text, setNotFound, setSearching));
    },
    [dispatch],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onSubmitSearch = React.useCallback(debounce(_onSubmitSearch, 500), []);

  const onClickSearchEntry = React.useCallback((data: ITrackData) => {
    navigationRef.current?.navigate(NAVIGATION_ROUTES.PLAYER, {
      mediaData: data,
    });
  }, []);

  const handleClear = React.useCallback(() => {
    dispatch({type: SearchActionType.CLEAR_RECENT_SEARCH_DATA});
    inputRef.current?.clear();
    setEmptyState(EmptyState.LANDER);
    _onSubmitSearch('');
  }, [_onSubmitSearch, dispatch, inputRef]);

  const setEditingMode = React.useCallback((mode: boolean) => {
    setShowHeader(!mode);
    setShowCancel(mode);
    !mode && Keyboard.dismiss();
  }, []);

  const renderEmptyComponent = React.useCallback(() => {
    if (searching) {
      return <></>;
    } else {
      return emptyState === EmptyState.LANDER ? (
        <SearchLander />
      ) : (
        <SearchNoResults />
      );
    }
  }, [emptyState, searching]);

  return (
    <>
      <Screen>
        {showHeader && <Header title="Search" />}
        <View style={styles.searchContainer}>
          <View style={styles.searchInput}>
            <TextInput
              ref={inputRef}
              placeholder={'Search for a song or album...'}
              placeholderTextColor={COLORS.GREY3}
              onChangeText={onSubmitSearch}
              onFocus={() => {
                setEditingMode(true);
                setShowClear(true);
              }}
              onBlur={() => setEditingMode(false)}
              numberOfLines={2}
              style={styles.searchInputInner}
            />
            {showClear && (
              <TouchableOpacity onPress={handleClear}>
                <Icon name="close-circle" size={22} color={COLORS.GREY4} />
              </TouchableOpacity>
            )}
          </View>
          {showCancel && (
            <Button
              color={COLORS.PRIMARY}
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
          ItemSeparatorComponent={() => (
            <View style={styles.flatlistSeparator} />
          )}
          ListFooterComponent={() => (
            <View style={styles.flatlistFooterStyle} />
          )}
          ListEmptyComponent={renderEmptyComponent}
          renderItem={({item}): any => (
            <SearchResultCard
              trackData={item}
              onTouch={() => onClickSearchEntry(item)}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Screen>
      <Loader visible={searching} />
    </>
  );
};

export default SearchScreen;
