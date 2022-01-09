import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {COLORS} from '../../theme';

type HeaderProps = {
  title: string;
  subtitle?: string;
  style?: ViewStyle;
};

const Header = (props: HeaderProps) => {
  return (
    <View style={[styles.container, props.style || {}]}>
      <Text style={styles.titleText}>{props.title}</Text>
      {props.subtitle && (
        <Text style={styles.subTitleText}>{props.subtitle}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    width: '100%',
  },
  titleText: {
    color: COLORS.PRIMARY,
    fontSize: 30,
    fontWeight: '600',
  },
  subTitleText: {
    marginTop: 3,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Header;
