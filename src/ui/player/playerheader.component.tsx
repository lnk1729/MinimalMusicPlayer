import React from 'react';
import {Platform, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {goBack} from '../../navigators';
import {COLORS} from '../../theme';
import {TextUtils} from '../../utils';

type HeaderProps = {
  title: string;
  style?: ViewStyle;
};

const PlayerHeader = (props: HeaderProps) => {
  const onClickBack = React.useCallback(() => {
    goBack();
  }, []);

  return (
    <View style={[styles.container, props.style || {}]}>
      <TouchableHighlight
        underlayColor={COLORS.BACKGROUNDDARK}
        onPress={onClickBack}>
        <Icon
          style={styles.headerIcon}
          name="chevron-left"
          color={COLORS.TEXTDEFAULT}
          size={28}
        />
      </TouchableHighlight>
      <Text style={styles.titleText}>
        {TextUtils.FitTextWithDots(props.title, 30)}
      </Text>
      <TouchableHighlight underlayColor={COLORS.BACKGROUNDDARK}>
        <Icon
          style={styles.headerIcon}
          name="more-vertical"
          color={COLORS.TEXTDEFAULT}
          size={28}
        />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    color: COLORS.TEXTDEFAULT,
    fontSize: Platform.OS === 'android' ? 18 : 16,
    fontWeight: Platform.OS === 'android' ? '700' : '600',
    letterSpacing: Platform.OS === 'android' ? 1 : 0,
  },
  subTitleText: {
    marginTop: 3,
    fontSize: 16,
    fontWeight: '600',
  },
  headerIcon: {
    padding: 10,
  },
});

export default PlayerHeader;
