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
});

export default styles;
