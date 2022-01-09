import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../theme';

const Screen: React.FC<{hasPadding: boolean}> = ({
  hasPadding = true,
  children,
}) => {
  return (
    <SafeAreaView
      // eslint-disable-next-line react-native/no-inline-styles
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
