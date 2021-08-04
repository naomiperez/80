import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

/* Returns the data reference from today if it exists */
export async function getTodayLog(date) {
	const db = firebase.firestore()

	// If user has already logged something today, then get the document
	// with today's date from the 'moodLog' Firestore collection
	let formattedDate = formatDate(date)
	const todayRef = await db
		.collection('moodLog')
		.where('date', '==', formattedDate)
		.get()
		.then((querySnapshot) => {
			if (querySnapshot.docs.length === 0) {
				console.log('No Documents from today')
				return undefined
			} else if (querySnapshot.docs.length > 1) {
				console.log('More than one document from today')
			}

			return querySnapshot.docs[0]
			//  id & data properties
		})
		.catch((error) => {
			console.log('Error getting documents: ', error)
		})

	return todayRef
}

export function formatLogData(date, mood, userRef, user) {
	/* Format date to pass to document.add() */
	let day = date.getDay()
	const formattedDate = formatDate(date)
	/* Check if this component was returned by Registration/Login or App.js */
	if (userRef) {
		// console.log('userRef: ' + userRef)
		// Create new data for day and add it as a document
		let data = {
			date: formattedDate,
			mood: mood,
			weekday: day,
			user: userRef,
		}
		return data
	} else {
		console.log('user: ' + user)
		let data = {
			date: formattedDate,
			mood: mood,
			weekday: day,
			user: user,
		}
		return data
	}
}

/* Adding 1 to the month as a fix for something... I'm not sure what */
function formatDate(date) {
	console.log(date)
	const formattedDate =
		date.getFullYear().toString() +
		'-' +
		(date.getMonth() + 1).toString() +
		'-' +
		date.getDate().toString()
	console.log('formatDate function:' + formattedDate)
	return formattedDate
}
