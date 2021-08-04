import React, { useState, useEffect, useContext, createContext } from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

/* Handles Fetching of user for persistent Login */

const CurrentUserContext = createContext()

const CurrentUserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(undefined)
	const value = { currentUser }

	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged(setCurrentUser)

		return unsubscribe
	}, [])

	return (
		<CurrentUserContext.Provider value={value}>
			{children}
		</CurrentUserContext.Provider>
	)
}

function useFirebaseAuth() {
	const context = useContext(CurrentUserContext)
	if (context === undefined) {
		throw new Error(
			'useFirebaseAuth must be used within a FirebaseAuthProvider'
		)
	}
	return context.currentUser
}

export { CurrentUserProvider, useFirebaseAuth }
