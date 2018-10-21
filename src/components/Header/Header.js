import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import styles from './style';
import Theme from '../../assets';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      backIcon,
      headerText,
    } = this.props;
    return (
      <View style={styles.headerContainer}>
        {backIcon &&
          <View style={styles.backIconContainer}>
            <Image source={Theme.imagePalette.backIcon} style={styles.backIcon} />  
          </View>
        }
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
    );
  }
}


Header.propTypes = {
  backIcon: PropTypes.bool,
  headerText: PropTypes.string.isRequired,
};

Header.defaultProps = {
  backIcon: true,
};

export default Header;
