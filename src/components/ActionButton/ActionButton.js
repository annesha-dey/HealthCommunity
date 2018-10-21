import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './style';

const ActionButton = (props) => (
  <TouchableOpacity style={styles.actionButtonContainer}>
    <Text style={styles.buttonText}>{props.buttonText}</Text>
  </TouchableOpacity>
);

ActionButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default ActionButton;
