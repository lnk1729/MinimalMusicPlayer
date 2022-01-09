import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme';

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  searchInput: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexGrow: 1,
    borderColor: COLORS.GREY5,
    borderRadius: 8,
  },
  flatlistContainer: {
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  flatlistSeparator: {width: '100%', marginVertical: 8},
  // flatlistFooterStyle: {width: '100%', height: 50, marginVertical: 20},
});

export default styles;
