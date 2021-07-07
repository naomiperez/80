import React from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper/src';
import AppButton from '../../components/AppButton';
import styles from './styles'

// First "onboarding" pages User sees when then open the app

function OnboardingSwiper({ navigation }) {

    return (
      <Swiper style={styles.wrapper} showsButtons loop={false}>
        <View testID="Hello" style={styles.slide1}>
          <Text style={styles.title}>Hello ☕</Text>
          <Text style={styles.text}>Welcome to <Text style={styles.bold}>80</Text></Text>
        </View>
        <View testID="Tool" style={styles.slide2}>
          <Text style={styles.title}>80 is a tool 🔧</Text>
          <Text style={styles.text}>to get to know your ADHD brain, and maybe even manage it</Text>
        </View>
        <View testID="GetStarted" style={styles.slide3}>
          <Text style={styles.title}>Get Started ⮕</Text>
          <View style={styles.button}>
            <AppButton
              onPress={() => {
                navigation.navigate('Login');
              }}
              title="Sign In"
            />
          </View>
        </View>
      </Swiper>
    );
}

export default OnboardingSwiper;
