import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

function Profile({ navigation }) {
	function logout() {
		firebase
			.auth()
			.signOut()
			.then(() => {
				// Sign-out successful.
				navigation.navigate('AppNavigator')
			})
			.catch((error) => {
				// An error happened.
				console.log('Error when logging out: ' + error.message)
			})
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}></View>
			<Image
				style={styles.avatar}
				source={{
					uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
				}}
			/>
			<View style={styles.body}>
				<View style={styles.bodyContent}>
					<Text style={styles.name}>John Doe</Text>

					<TouchableOpacity
						style={styles.buttonContainer}
						onPress={() => logout()}>
						<Text style={styles.buttonText}>logout</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

Profile.propTypes = {
	navigation: PropTypes.object,
}

export default Profile
