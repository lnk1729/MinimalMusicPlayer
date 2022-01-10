import Slider from '@react-native-community/slider';
import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import {COLORS} from '../../theme';

const PlayerSlider = () => {
  const progress = useProgress();

  return (
    <View style={styles.sliderContainer}>
      <Slider
        style={styles.progressSlider}
        value={progress.position}
        minimumValue={0}
        maximumValue={progress.duration}
        shouldRasterizeIOS
        minimumTrackTintColor={COLORS.PRIMARY}
        thumbTintColor={COLORS.PRIMARY}
        onSlidingComplete={async currentPos => {
          await TrackPlayer.seekTo(currentPos);
        }}
      />
      <View style={styles.trackProgressionLabels}>
        <Text style={styles.timeLabel}>
          {new Date(progress.position * 1000).toISOString().substring(14, 19)}
        </Text>
        <Text style={styles.timeLabel}>
          {new Date((progress.duration - progress.position) * 1000)
            .toISOString()
            .substring(14, 19)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    paddingVertical: 6,
  },
  trackProgressionLabels: {
    paddingHorizontal: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeLabel: {
    color: COLORS.TEXTDEFAULT,
    fontSize: Platform.OS === 'android' ? 14 : 12,
  },
  progressSlider: {
    padding: 0,
  },
});

export default PlayerSlider;
