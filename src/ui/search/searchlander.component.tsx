import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../theme';

const SearchLander: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Play some music!</Text>
      <Text style={styles.subtitle}>{'Search for your favorite songs'}</Text>
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
    fontSize: 20,
  },
  subtitle: {
    marginTop: 4,
    textAlign: 'center',
    color: COLORS.GREY2,
    fontSize: 16,
  },
});

export default SearchLander;
