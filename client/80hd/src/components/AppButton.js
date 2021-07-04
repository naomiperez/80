import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Theme from '../styles/colors';

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: Theme.button,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: Theme.text,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default AppButton;
