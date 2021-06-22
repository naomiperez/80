import React, { useState, useEffect } from 'react';
import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingSwiper from './src/components/OnboardingSwiper'
import Home from './src/containers/Home'
import Login from './src/containers/LoginScreen/Login'
import Registration from './src/containers/RegistrationScreen/Registration'
import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import { firebaseConfig } from './src/firebase/config'

const Stack = createStackNavigator()

// Use Stack Navigator to navigate to various pages in app
function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    console.log("useEffect called");
    const db = firebase.firestore();
    const usersRef = db.collection('users');
    if (usersRef.length <= 0) {
      console.log("Collection does not exist")
    } else {
      console.log("Collection exists")
    }

    // returns the currently logged in user
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // fetch all the extra user data that we stored in Firestore
        // and set it on the current component’s state
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            console.log("Error: " + error)
            setLoading(false)
          });
      } else {
        console.log("User is null")
        setLoading(false)
      }
    });
  }, []);

  /* If returning user, open Home. Else, open onboarding & Login screen */
  if (loading) {
    return (
      <Text>
        loading...
      </Text>
    )
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {user ? (
            <Stack.Screen name="Home">
              {props => <Home {...props} extraData={user} />}
            </Stack.Screen>
          ) : (
            <>
              <Stack.Screen name="Onboarding" component={OnboardingSwiper} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Registration" component={Registration} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;