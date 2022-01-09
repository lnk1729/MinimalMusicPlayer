import Slider from '@react-native-community/slider';
import React from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import TrackPlayer from 'react-native-track-player';
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
  const [isFavorite, setIsFavorite] = React.useState(false);

  React.useEffect(() => {}, []);

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
              shouldRasterizeIOS
              minimumTrackTintColor={COLORS.PRIMARY}
              thumbTintColor={COLORS.PRIMARY}
            />
            <View style={styles.trackProgressionLabels}>
              <Text style={styles.timeLabel}>{'0:00'}</Text>
              <Text style={styles.timeLabel}>{'3:55'}</Text>
            </View>
          </View>
          <View style={styles.consoleButtonsContainer}>
            <FeatherIcon
              style={styles.consoleButton}
              name="repeat"
              size={16}
              color={COLORS.GREY2}
            />
            <TouchableOpacity style={styles.seekButton}>
              <Icon
                style={styles.consoleButton}
                name="rotate-left"
                size={24}
                color={COLORS.TEXTDEFAULT}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.playButton}>
              <Icon
                onPress={() => {}}
                name="play"
                size={22}
                color={COLORS.TEXTDEFAULT}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.seekButton}>
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
