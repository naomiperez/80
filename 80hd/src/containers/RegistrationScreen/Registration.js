import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../LoginScreen/styles'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

function Registration({ navigation }) {
	const [fullName, setFullName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const onFooterLinkPress = () => {
		navigation.navigate('Login')
	}

	// Add new user to database
	const onRegisterPress = () => {
		if (password !== confirmPassword) {
			console.log("Passwords don't match.")
			return
		}

		// call Firebase Auth’s createUserWithEmailAndPassword API
		// to create a new account that will show up in Firebase Console

		// store the user data in Firebase Firestore
		// (necessary for storing extra user information, such as full name, profile photo URL, and so on, which cannot be stored in the Authentication table)
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((response) => {
				const uid = response.user.uid
				const data = {
					id: uid,
					email: email,
					fullName: fullName,
				} 

				const db = firebase.firestore()
				const usersRef = db.collection('users')
				usersRef
					.doc(uid)
					.set(data)
					.then(() => {
						// If registration was successful, we navigate to the Home Screen, by returning to AppNavigator, and currentUser should now be defined
						navigation.goBack()
					})
					.catch((error) => {
						// If error occurs, show an alert with it
						alert(error)
					})
			})
			.catch((error) => {
				alert(error)
			})
	}

	return (
		<View style={styles.container}>
			<KeyboardAwareScrollView
				style={{ flex: 1, width: '100%' }}
				keyboardShouldPersistTaps='always'>
				<Image
					style={styles.logo}
					source={require('../../assets/images/icon.png')}
				/>
				<TextInput
					style={styles.input}
					placeholder='Full Name'
					placeholderTextColor='#aaaaaa'
					onChangeText={(text) => setFullName(text)}
					value={fullName}
					underlineColorAndroid='transparent'
					autoCapitalize='none'
				/>
				<TextInput
					style={styles.input}
					placeholder='E-mail'
					placeholderTextColor='#aaaaaa'
					onChangeText={(text) => setEmail(text)}
					value={email}
					underlineColorAndroid='transparent'
					autoCapitalize='none'
				/>
				<TextInput
					style={styles.input}
					placeholderTextColor='#aaaaaa'
					secureTextEntry
					placeholder='Password'
					onChangeText={(text) => setPassword(text)}
					value={password}
					underlineColorAndroid='transparent'
					autoCapitalize='none'
				/>
				<TextInput
					style={styles.input}
					placeholderTextColor='#aaaaaa'
					secureTextEntry
					placeholder='Confirm Password'
					onChangeText={(text) => setConfirmPassword(text)}
					value={confirmPassword}
					underlineColorAndroid='transparent'
					autoCapitalize='none'
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={() => onRegisterPress()}>
					<Text style={styles.buttonTitle}>Create account</Text>
				</TouchableOpacity>
				<View style={styles.footerView}>
					<Text style={styles.footerText}>
						Already got an account?{' '}
						<Text onPress={onFooterLinkPress} style={styles.footerLink}>
							Log in
						</Text>
					</Text>
				</View>
			</KeyboardAwareScrollView>
		</View>
	)
}

Registration.propTypes = {
	navigation: PropTypes.object,
}

export default Registration
