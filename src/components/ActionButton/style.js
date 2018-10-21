import { StyleSheet } from 'react-native';
import Theme from '../../assets';

const styles = StyleSheet.create({
  actionButtonContainer: {
    paddingTop: 10,
    paddingRight: 30,
    paddingBottom: 10,
    paddingLeft: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colorPalette.primary1Color,
    borderRadius: 20,

  },
  buttonText: {
    ...Theme.fontBook.bodyBackgroundBold,
  },
});


export default styles;
