import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../theme';

const Screen = ({children, hasPadding = true}) => {
  return (
    <SafeAreaView
      style={[styles.container, !hasPadding && {paddingHorizontal: 0}]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUNDDARK,
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default Screen;
