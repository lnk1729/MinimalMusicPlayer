import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../theme';

const SearchNoResults: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Couldn't find a match</Text>
      <Text style={styles.subtitle}>
        {'Try searching again with a different spelling or keyword'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50%',
  },
  title: {
    textAlign: 'center',
    color: COLORS.TEXTDEFAULT,
    fontWeight: '700',
    fontSize: 18,
  },
  subtitle: {marginTop: 4, textAlign: 'center', color: COLORS.GREY2},
});

export default SearchNoResults;
