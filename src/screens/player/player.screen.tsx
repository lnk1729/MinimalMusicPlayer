import Slider from '@react-native-community/slider';
import React from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TrackPlayer, {
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {COLORS} from '../../theme';
import Screen from '../../ui/common/screen.component';
import PlayerHeader from '../../ui/player/playerheader.component';
import {ITrackData} from '../../ui/search/searchresult.component';
import styles from './styles';
import {TextUtils} from '../../utils';

const PlayerScreen = ({route}) => {
  const trackData = route?.params?.mediaData as ITrackData;
  const playbackState = usePlaybackState();
  const progress = useProgress();
  const [isFavorite, setIsFavorite] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      await TrackPlayer.add([
        {
          id: 1,
          title: trackData.trackName,
          artist: trackData.artistName,
          url: require('../../assets/mp3/Kalimba.mp3'),
        },
      ]);
      TrackPlayer.play();
    })();
    return () => {
      TrackPlayer.stop();
    };
  }, [trackData]);

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
    <Screen hasPadding={false}>
      <PlayerHeader title={trackData.trackName} />
      <View style={styles.container}>
        <View style={styles.albumArtContainer}>
          <FastImage
            source={{uri: trackData.artworkUrl100}}
            style={styles.albumArt}
          />
        </View>
        <View style={styles.consoleContainer}>
          <View style={styles.songData}>
            <View style={styles.songNameContainer}>
              <Text style={styles.songName}>
                {TextUtils.FitTextWithDots(trackData.trackName, 30)}
              </Text>
              <Text style={styles.songArtist}>{trackData.artistName}</Text>
            </View>
            <TouchableOpacity onPressOut={() => setIsFavorite(!isFavorite)}>
              {isFavorite ? (
                <Icon name="heart" size={24} color={COLORS.DANGER} />
              ) : (
                <Icon name="heart-o" size={24} color={COLORS.PRIMARY} />
              )}
            </TouchableOpacity>
          </View>
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
                {new Date(progress.position * 1000)
                  .toISOString()
                  .substring(14, 19)}
              </Text>
              <Text style={styles.timeLabel}>
                {new Date((progress.duration - progress.position) * 1000)
                  .toISOString()
                  .substring(14, 19)}
              </Text>
            </View>
          </View>
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
        </View>
      </View>
    </Screen>
  );
};

export default PlayerScreen;
