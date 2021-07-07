import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { mood1, mood2, mood3, mood4, mood5, mood6, mood7 } from '../../assets/images';
import styles from './styles';

/* I may have to implement something where I retreive that day's Mood info to display when user clicks on it */

// Mood Card displayed on Home page where user can log daily mood
const images = new Array(mood1, mood2, mood3, mood4, mood5, mood6, mood7);

export function MoodSelectorFrag(props) {
  const [pressed, setPressed] = useState(props.mood);
  let { mood, date } = props;

  {
    console.log('Rerendering MoodFrag?');
  }

  function handleChange(index) {
    props.logMood(index);
    setPressed(index);
  }

  return (
    <>
      <View>
        <Text>
          {images.map((img, index) => {
            return (
              <React.Fragment key={index}>
                <TouchableOpacity
                  mood={mood}
                  onPress={() => handleChange(index)}
                  style={[styles.button, pressed == index ? { backgroundColor: '#ccc7b8' } : {}]}>
                  <Image source={img} style={styles.icon}></Image>
                </TouchableOpacity>
                <View style={styles.buttonSpace}></View>
              </React.Fragment>
            );
          })}
        </Text>
      </View>
    </>
  );
}

function moodPropsChanged(prevMood, nextMood){
  console.log("Prev date: " + prevMood.date + " Next date: " + nextMood.date)
  return prevMood.date == nextMood.date;
}

const MoodSelector = React.memo(MoodSelectorFrag, moodPropsChanged);
export default MoodSelector;
