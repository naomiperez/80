// import { firebase } from '../../firebase/config'
import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { firebaseConfig } from '../../firebase/config'

function Login({ navigation }) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const onFooterLinkPress = () => {
		navigation.navigate('Registration')
	}

	const onLoginPress = () => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((response) => {
				const uid = response.user.uid
				const usersRef = firebase.firestore().collection('users')
				console.log(usersRef)
				usersRef
					.doc(uid)
					.get()
					.then((firestoreDocument) => {
						if (!firestoreDocument.exists) {
							console.log('User does not exist anymore.')
							return
						}
						const user = firestoreDocument.data()
						navigation.navigate('Home')
					})
					.catch((error) => {
						console.log(error)
					})
			})
			.catch((error) => {
				console.log(error)
			})
	}

	/* TODO: Put styling in a separate file */
	return (
		<View style={styles.container}>
			<KeyboardAwareScrollView
				style={styles.scroll}
				keyboardShouldPersistTaps='always'>
				<Image
					style={styles.logo}
					source={require('../../assets/images/icon.png')}
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
				<TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
					<Text style={styles.buttonTitle}>Log in</Text>
				</TouchableOpacity>
				<View style={styles.footerView}>
					<Text style={styles.footerText}>
						Don't have an account?{' '}
						<Text onPress={onFooterLinkPress} style={styles.footerLink}>
							Sign up
						</Text>
					</Text>
				</View>
			</KeyboardAwareScrollView>
		</View>
	)
}

Login.propTypes = {
	navigation: PropTypes.object,
}

export default Login
