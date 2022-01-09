import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import {COLORS} from '../../theme';

export interface ITrackData {
  trackName: string;
  artistName: string;
  artworkUrl100: string;
  kind: string;
  primaryGenreName: string;
}

type SearchResultProps = {
  trackData: ITrackData;
  onTouch: () => void;
};

const SearchResultCard: React.FC<SearchResultProps> = ({
  trackData,
  onTouch,
}) => {
  return (
    <TouchableOpacity onPress={onTouch} style={styles.container}>
      <FastImage
        source={{uri: trackData.artworkUrl100}}
        style={styles.artwork}
      />
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {trackData.trackName}
        </Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>{trackData.artistName}</Text>
          <Icon name="dot-single" color={COLORS.GREY2} />
          <Text style={styles.subtitle}>{trackData.primaryGenreName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 4,
    paddingVertical: 4,
    alignItems: 'center',
  },
  artwork: {
    width: 36,
    height: 36,
  },
  textContainer: {
    marginLeft: 5,
    height: '100%',
    maxWidth: '100%',
    minWidth: '100%',
    paddingRight: 40,
  },
  title: {
    fontSize: 16,
    color: COLORS.TEXTDEFAULT,
    fontWeight: '500',
  },
  subtitleContainer: {
    flexDirection: 'row',
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.GREY2,
  },
});

export default SearchResultCard;
