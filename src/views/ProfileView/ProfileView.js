import React, { Component } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { map } from 'lodash';
import styles from './style';
import {
  Header,
  ActionButton,
} from '../../components';

const JSON = {
  profilePic: 'https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg',
  postedImages: [
    {
      id: 1,
      imageString: 'https://www.w3schools.com/bootstrap/sanfran.jpg',
    },
    {
      id: 2,
      imageString: 'https://www.w3schools.com/bootstrap/sanfran.jpg',
    },
    {
      id: 3,
      imageString: 'https://www.w3schools.com/bootstrap/sanfran.jpg',
    },
    {
      id: 4,
      imageString: 'https://www.w3schools.com/bootstrap/sanfran.jpg',
    },
    {
      id: 5,
      imageString: 'https://www.w3schools.com/bootstrap/sanfran.jpg',
    },
    {
      id: 6,
      imageString: 'https://www.w3schools.com/bootstrap/sanfran.jpg',
    }
  ]
}


class ProfileView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.profileViewContainer}>
        <Header headerText='Profilee' />
        <View style={styles.profileInfoContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{uri: JSON.profilePic}}
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.profileUserName}>Amrinder Kullar</Text>
          <View style={styles.actionButtonContainer}>
            <ActionButton buttonText='FOLLOW' />
          </View>
        </View>
        <View style={styles.profileStatusContainer}>
          <View style={styles.profileStatusWrapper}>
            <Text style={styles.profileStatusValue}>86</Text>
            <Text style={styles.profileStatusParam}>Posts</Text>
          </View>
          <View style={styles.profileStatusWrapper}>
            <Text style={styles.profileStatusValue}>20.1K</Text>
            <Text style={styles.profileStatusParam}>Followers</Text>
          </View>
          <View style={styles.profileStatusWrapper}>
            <Text style={styles.profileStatusValue}>560</Text>
            <Text style={styles.profileStatusParam}>Following</Text>
          </View>
        </View>
        <View style={styles.postedImageContainer}>
          {JSON.postedImages.map(val => (
            <View key={val.id} style={styles.postedImageWrapper}>
              <Image
                source={{ uri: 'https://www.w3schools.com/bootstrap/sanfran.jpg' }}
                style={styles.postedImage}
              />
            </View>
          ))}
          {/* {map(JSON.postedImages, (val) => { */}
          {/* })} */}
        </View>
      </ScrollView>
    );
  }
}


export default ProfileView;
