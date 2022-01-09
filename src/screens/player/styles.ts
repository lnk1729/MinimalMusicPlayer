import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    display: 'flex',
    flex: 1,
  },
  albumArt: {
    width: 350,
    height: 350,
    borderWidth: 2,
    borderColor: COLORS.GREY5,
  },
  albumArtContainer: {
    paddingTop: 24,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 4,
  },
  consoleContainer: {
    flex: 2,
  },
  songData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 2,
  },
  songNameContainer: {},
  songName: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.TEXTDEFAULT,
  },
  songArtist: {
    fontSize: 14,
    color: COLORS.GREY2,
  },
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
    fontSize: 12,
  },
  progressSlider: {
    padding: 0,
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

export default styles;
