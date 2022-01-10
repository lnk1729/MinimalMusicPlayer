import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../theme';
import {TextUtils} from '../../utils';
import {ITrackData} from '../search/searchresult.component';

const SongData: React.FC<{trackData: ITrackData}> = ({trackData}) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
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
  );
};

const styles = StyleSheet.create({
  songData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 2,
  },
  songNameContainer: {},
  songName: {
    fontSize: Platform.OS === 'android' ? 24 : 20,
    fontWeight: '600',
    color: COLORS.TEXTDEFAULT,
  },
  songArtist: {
    fontSize: Platform.OS === 'android' ? 16 : 14,
    color: COLORS.GREY2,
  },
});

export default SongData;
