import React from 'react';
import {ActivityIndicator, ViewStyle, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

type LoaderProps = {
  visible: boolean;
  style?: ViewStyle;
};

const Loader: React.FC<LoaderProps> = ({style, visible}) => {
  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0}
      useNativeDriver={true}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      animationInTiming={50}
      animationOutTiming={50}>
      <View style={[styles.container, style]}>
        <ActivityIndicator size={'large'} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 120,
    width: 120,
    alignSelf: 'center',
    justifyContent: 'center',
    opacity: 0.7,
    borderRadius: 6,
  },
});

export default Loader;
