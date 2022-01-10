import {Platform, StyleSheet} from 'react-native';
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
});

export default styles;
