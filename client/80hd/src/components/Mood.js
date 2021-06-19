import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { mood1, mood2, mood3, mood4, mood5, mood6, mood7 } from '../assets/images'
import Theme from '../styles/colors'

// Mood Card displayed on Home page where user can log daily mood
const images = new Array(mood1, mood2, mood3, mood4, mood5, mood6, mood7);

// Put this in separate file
const styles = StyleSheet.create({
    buttonSpace: {
      margin: 3
    },
    button: {
      backgroundColor: Theme.cream,
      borderRadius: 10,
      borderWidth: 3,
      borderColor: Theme.primary,
      padding: 3,
      marginTop: 2,
      shadowColor: '#303838',
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,
      shadowOpacity: 0.2,
    },
    icon: {
        width: 35,
        height: 35
    }
  });

  
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