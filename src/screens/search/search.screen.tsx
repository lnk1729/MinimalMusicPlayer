import React from 'react';
import {Button, Keyboard, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Header from '../../ui/common/header.component';
import Screen from '../../ui/common/screen.component';
import styles from './styles';

const SearchScreen = () => {
  const [showHeader, setShowHeader] = React.useState(true);
  const [showClear, setShowClear] = React.useState(false);

  const setEditingMode = (mode: boolean) => {
    setShowHeader(!mode);
    setShowClear(mode);
    !mode && Keyboard.dismiss();
  };

  return (
    <Screen>
      {showHeader && <Header title="Search" />}
      <View style={styles.searchContainer}>
        <TextInput
          onFocus={() => setEditingMode(true)}
          onBlur={() => setEditingMode(false)}
          numberOfLines={2}
          style={styles.searchInput}
        />
        {showClear && (
          <Button onPress={() => setEditingMode(false)} title="Clear" />
        )}
      </View>
    </Screen>
  );
};

export default SearchScreen;
