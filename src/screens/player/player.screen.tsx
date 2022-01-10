import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import TrackPlayer from 'react-native-track-player';
import Screen from '../../ui/common/screen.component';
import PlayerHeader from '../../ui/player/playerheader.component';
import {ITrackData} from '../../ui/search/searchresult.component';
import styles from './styles';
import SongData from '../../ui/player/playersongdata.component';
import PlayerSlider from '../../ui/player/playerprogressslider.ocmponent';
import PlayerConsole from '../../ui/player/playerconsole.component';

const PlayerScreen = ({route}) => {
  const trackData = route?.params?.mediaData as ITrackData;

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
          <SongData trackData={trackData} />
          <PlayerSlider />
          <PlayerConsole />
        </View>
      </View>
    </Screen>
  );
};

export default PlayerScreen;
