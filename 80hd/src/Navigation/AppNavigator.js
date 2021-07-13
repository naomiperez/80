import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import OnboardingSwiper from '../utilities/OnboardingSwiper/OnboardingSwiper'
import Login from '../containers/LoginScreen/Login'
import Registration from '../containers/RegistrationScreen/Registration'
import { CurrentUserProvider, useCurrentUser } from '../CurrentUserContext'
import HomeNavigation from './HomeNavigation'

const Stack = createStackNavigator()

// Use Stack Navigator to navigate to various pages in app
function AppNavigator() {
	const { currentUser, fetchCurrentUser } = useCurrentUser()

	React.useEffect(() => {
		async function fetchUser() {
			await fetchCurrentUser()
		}
	}, [])

	/* If returning user, open Home. Else, open onboarding & Login screen */
	if (typeof currentUser === 'undefined') {
		return <Text>loading...</Text>
	} else {
		return (
			<CurrentUserProvider>
				<Stack.Navigator initialRouteName='HomeNavigation'>
					{currentUser ? (
						<Stack.Screen name='HomeNavigation' component={HomeNavigation} />
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
			</CurrentUserProvider>
		)
	}
}

export default AppNavigator
