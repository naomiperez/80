import React from 'react';;
import { Text, View } from 'react-native'
import Swiper from 'react-native-swiper/src'
import AppButton from './AppButton'
import { useFonts } from 'expo-font'

// First "onboarding" pages User sees when then open the app

var styles = {
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#684A35'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#684A35'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#684A35'
  },
  title: {
    fontFamily: 'DMMono-Med',
    color: '#FFE9D0',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  text: {
    color: '#FFE9D0',
    fontSize: 20,
    paddingLeft: 60,
    paddingRight: 60
  },
  button: {
    padding: 20,
  }
}

function OnboardingSwiper( { navigation } ) {
  const [loaded] = useFonts({
    'DMMono-Med': require('../assets/fonts/DM_Mono/DMMono-Medium.ttf'),
    });

    if(!loaded){
      return(
        <Text>
          Loading...
        </Text>
      );
    } else {
      return(
        <Swiper style={styles.wrapper} showsButtons loop={false}>
          <View testID="Hello" style={styles.slide1}>
            <Text style={styles.title}>Hello ☕</Text>
            <Text style={styles.text}>Welcome to <Text style={{fontWeight: "bold"}}>80</Text></Text>
          </View>
          <View testID="Tool" style={styles.slide2}>
            <Text style={styles.title}>80 is a tool 🔧</Text>
            <Text style={styles.text}>to get to know your ADHD brain, and maybe even manage it</Text>
          </View>
          <View testID="GetStarted" style={styles.slide3}>
            <Text style={styles.title}>Get Started ⮕</Text>
            <View style={styles.button}>
              <AppButton onPress={() => {navigation.navigate('Home');}} title="Sign In" />
            </View>
          </View>
        </Swiper>
      )
    }
}

export default OnboardingSwiper;