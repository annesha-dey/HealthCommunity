import { StyleSheet } from 'react-native';
import Theme from '../../assets';

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 20,
    paddingRight: 15,
    paddingBottom: 20,
    paddingLeft: 15,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: Theme.colorPalette.borderColor,
    backgroundColor: Theme.colorPalette.backgroundColor,
  },
  backIconContainer: {
    position: 'absolute',
    left: 15,
    top: 25,
  },
  backIcon: {
    height: 22,
    width: 14,
  },
  headerText: {
    fontSize: 24,
    ...Theme.fontBook.h1ForegroundRegular,
  },
});

export default styles;
