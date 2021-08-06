import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import OnboardingSwiper from '../utilities/OnboardingSwiper/OnboardingSwiper'
import Login from '../containers/LoginScreen/Login'
import Registration from '../containers/RegistrationScreen/Registration'
import { useFirebaseAuth } from '../CurrentUserContext'
import HomeNavigation from './HomeNavigation'

const Stack = createStackNavigator()

// Use Stack Navigator to navigate to various pages in app
function AppNavigator() {
	var currentUser = useFirebaseAuth()

	/* If returning user, open Home. Else, open onboarding & Login screen */
	if (typeof currentUser === 'undefined') {
		return <Text>loading...</Text>
	} else {
		// console.log(`current user : ${JSON.stringify(currentUser.uid)}`)
		return (
				<Stack.Navigator initialRouteName='HomeNavigation' screenOptions={{headerShown: false}}>
					{currentUser ? (
						<Stack.Screen name='HomeNavigation' component={HomeNavigation} currentUser={currentUser} />
					) : (
						<>
							<Stack.Screen
								name='OnboardingSwiper'
								component={OnboardingSwiper}
							/>
							<Stack.Screen name='Login' component={Login} />
							<Stack.Screen name='Registration' component={Registration} />
						</>
					)}
				</Stack.Navigator>
		)
	}
}

export default AppNavigator
