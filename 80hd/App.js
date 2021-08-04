import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { CurrentUserProvider } from './src/CurrentUserContext'
import AppNavigator from './src/navigation/AppNavigator'

const HomeNav = createStackNavigator()

console.log('App.js')
// Use Stack Navigator to navigate to various pages in app
function App() {
	return (
		<NavigationContainer>
			<CurrentUserProvider>
				<HomeNav.Navigator screenOptions={{ headerShown: false }}>
					<HomeNav.Screen name='AppNavigator' component={AppNavigator} />
				</HomeNav.Navigator>
			</CurrentUserProvider>
		</NavigationContainer>
	)
}

export default App
