import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { mood1, mood2, mood3, mood4, mood5, mood6, mood7 } from '../../assets/images'
import styles from './styles'

// Mood Card displayed on Home page where user can log daily mood
const images = new Array(mood1, mood2, mood3, mood4, mood5, mood6, mood7);

  
function MoodSelector(props){

  let {mood} = props

  function handleChange(index) {
    props.logMood(index);
  }

  return(
      <View >
        <Text>
          { 
          images.map((img, index) => {
              return(
                  <React.Fragment key={index}>
                    <TouchableOpacity mood={mood} onPress={() => handleChange(index)} style={styles.button} >
                      <Image source={img} style={styles.icon}></Image>
                    </TouchableOpacity>
                    <View style={styles.buttonSpace}></View>
                  </React.Fragment>
              );
            })
          }
        </Text>
      </View>
  );
}

export default MoodSelector;