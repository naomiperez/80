import React from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export async function getUserData(currentUser) {
	const db = firebase.firestore()
	const usersRef = db.collection('users')

	// fetch all the extra user data that we stored in Firestore
	// and set it on the current component’s state
	usersRef
		.where('id', '==', currentUser.uid)
		.get()
		.then((querySnapshot) => {
			var data
			querySnapshot.forEach((doc) => {
				data = doc.data()
				console.log(data)
			})
			console.log(data)
			return data
		})
		.catch((error) => {
			console.log('Error getting documents: ', error)
		})
}
