import { StyleSheet, Dimensions } from 'react-native';
import Theme from '../../assets';

// Get the dimensions of the device.
const { width: viewportWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  profileViewContainer: {
    backgroundColor: Theme.colorPalette.backgroundColor,
  },
  profileInfoContainer: {
    paddingTop: 30,
    paddingRight: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: Theme.colorPalette.borderColor,
  },
  profileImageContainer: {
    height: 150,
    width: 150,
  },
  profileImage: {
    height: 150,
    width: 150,
    borderWidth: 0.5,
    borderRadius: 75,
    borderColor: Theme.colorPalette.backgroundColor,
  },
  profileUserName: {
    ...Theme.fontBook.h2ForegroundBold,
    marginTop: 30,
  },
  actionButtonContainer: {
    marginTop: 20,
  },
  profileStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
  },
  profileStatusWrapper: {
    alignItems: 'center',
    width: '33%',
  },
  profileStatusValue: {
    ...Theme.fontBook.h2ForegroundBold,
  },
  profileStatusParam: {
    ...Theme.fontBook.bodyForegroundLight,
    color: Theme.colorPalette.greyTextColor,
    marginTop: 6,
  },
  postedImageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  postedImageWrapper: {
    height: viewportWidth / 3,
    width: viewportWidth / 3,
    padding: 2,
  },
  postedImage: {
    height: '100%',
    width: '100%',
    // height: viewportWidth / 2.9,
    // width: viewportWidth / 2.9,
  },
});


export default styles;

