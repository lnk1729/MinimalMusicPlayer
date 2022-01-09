import {Platform, StyleSheet} from 'react-native';
import {COLORS} from '../../theme';

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: Platform.OS === 'android' ? 10 : 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchInput: {
    borderWidth: 1,
    paddingVertical: Platform.OS === 'android' ? 0 : 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: COLORS.GREY5,
    borderRadius: 8,
    color: COLORS.TEXTDEFAULT,
  },
  flatlistContainer: {
    marginTop: 25,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  flatlistSeparator: {width: '100%', marginVertical: 8},
  flatlistFooterStyle: {width: '100%', height: 50, marginVertical: 20},
  searchInputInner: {maxWidth: 200, color: 'white', fontSize: 16},
  cancelButton: {
    marginLeft: Platform.OS === 'android' ? 5 : 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
