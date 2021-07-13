import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

/* Handles Fetching of user for persistent Login */

export const CurrentUserContext = React.createContext()

export const CurrentUserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = React.useState(null)

	const fetchCurrentUser = () => {
		const db = firebase.firestore()
		const usersRef = db.collection('users')

		// returns the currently logged in user
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				// fetch all the extra user data that we stored in Firestore
				// and set it on the current component’s state
				usersRef
					.doc(user.uid)
					.get()
					.then((document) => {
						const userData = document.data()
						setCurrentUser(userData)
						console.log('CurrentUserContext: ' + userData.fullName)
					})
					.catch((error) => {
						console.log('Error: ' + error)
					})
			} else {
				console.log('User is null')
				setCurrentUser(null)
			}
		})
	}

	return (
		<CurrentUserContext.Provider value={{ currentUser, fetchCurrentUser }}>
			{children}
		</CurrentUserContext.Provider>
	)
}

CurrentUserContext.propTypes = {
	children: PropTypes.element,
}

export const useCurrentUser = () => React.useContext(CurrentUserContext)
