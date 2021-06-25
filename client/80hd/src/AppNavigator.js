import React, { useState, useEffect } from 'react';
import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingSwiper from './components/OnboardingSwiper'
import Home from './containers/HomeScreen/Home'
import Login from './containers/LoginScreen/Login'
import Registration from './containers/RegistrationScreen/Registration'
import { CurrentUserProvider, useCurrentUser } from './CurrentUserContext'

const Stack = createStackNavigator();

// Use Stack Navigator to navigate to various pages in app
function AppNavigator() {
    const { currentUser, fetchCurrentUser } = useCurrentUser()

    React.useEffect(() => {
        
        async function fetchUser () { 
            await fetchCurrentUser()
        }
    }, [])

  /* If returning user, open Home. Else, open onboarding & Login screen */
  if (typeof(currentUser) === 'undefined') {
    return (
      <Text>
        loading...
      </Text>
    )
  } else {
    return (
      <CurrentUserProvider>
          <Stack.Navigator initialRouteName="Home">
            {currentUser ? (
              <Stack.Screen name="Home" component={Home} />
            ) : (
              <>
                <Stack.Screen name="Onboarding" component={OnboardingSwiper} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registration" component={Registration} />
              </>
            )}
          </Stack.Navigator>
      </CurrentUserProvider>
    );
  }
}

export default AppNavigator;
