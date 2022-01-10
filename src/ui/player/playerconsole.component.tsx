import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import TrackPlayer, {
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';

const PlayerConsole = () => {
  const progress = useProgress();
  const playbackState = usePlaybackState();

  const togglePlay = async (newPlaybackState: State) => {
    const currentTrack = await TrackPlayer.getCurrentTrack();

    if (currentTrack !== null) {
      if (newPlaybackState === State.Paused) {
        if (Math.round(progress.duration) === Math.round(progress.position)) {
          await TrackPlayer.seekTo(0);
        }
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  const handleSeekButton = React.useCallback(
    async (type: 'forward' | 'backward') => {
      if (type === 'forward') {
        await TrackPlayer.seekTo(progress.position + 5);
      } else {
        await TrackPlayer.seekTo(progress.position - 5);
      }
    },
    [progress.position],
  );

  return (
    <View style={styles.consoleButtonsContainer}>
      <FeatherIcon
        style={styles.consoleButton}
        name="repeat"
        size={16}
        color={COLORS.GREY2}
      />
      <TouchableOpacity
        onPress={() => handleSeekButton('backward')}
        style={styles.seekButton}>
        <Icon
          style={styles.consoleButton}
          name="rotate-left"
          size={24}
          color={COLORS.TEXTDEFAULT}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.playButton}
        onPress={() => togglePlay(playbackState)}>
        <Icon
          name={playbackState === State.Playing ? 'pause' : 'play'}
          size={22}
          color={COLORS.TEXTDEFAULT}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.seekButton}
        onPress={() => handleSeekButton('forward')}>
        <Icon
          style={styles.consoleButton}
          name="rotate-right"
          size={24}
          color={COLORS.TEXTDEFAULT}
        />
      </TouchableOpacity>
      <FeatherIcon
        style={styles.consoleButton}
        name="shuffle"
        size={18}
        color={COLORS.GREY2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  consoleContainer: {
    flex: 2,
  },
  consoleButtonsContainer: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  consoleButton: {
    padding: 4,
  },
  playButton: {
    backgroundColor: COLORS.PRIMARY,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  seekButton: {
    padding: 4,
  },
});

export default PlayerConsole;
