import React, { useState } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import AppLoading from 'expo-app-loading'

import { useFirebaseAuth } from '../../CurrentUserContext'

import Calendar from '../../components/Calendar/Calendar'
import LoggerView from '../../components/LoggerCard/LoggerView'
import MoodSelector from '../MoodSelector/MoodSelector'
import SleepSelector from '../SleepSelector/Sleep'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import Theme from '../../styles/colors'

import { formatLogData, getTodayLog } from './HandleData'

function Home() {
	const userRef = useFirebaseAuth()

	// Use state variables to store date and mood
	const today = new Date()
	const moodInit = 10

	const [userData, setUserData] = useState(undefined)
	const [userDataLoaded, setUserDataLoaded] = useState(false)

	const [mood, setMood] = useState(moodInit)
	const [date, setDate] = useState(today)
	const [sleepHours, setSleepHours] = useState(0)

	const [logsExpanded, setlogsExpanded] = useState(false)

	async function getUserData() {
		const db = firebase.firestore()
		const usersRef = db.collection('users')

		let userData = usersRef.where('id', '==', userRef.uid)
			.get().then((querySnapshot) => {
				var data
				querySnapshot.forEach((doc) => {
					data = doc.data()
				})

				console.log(`getUserData: ${JSON.stringify(data)}`)
				setUserData(data)
			})
			.catch((error) => {
				console.log('Error getting documents: ', error)
			})

		return userData
	}

	function logMood(mood) {
		setMood(mood)

		let data = formatLogData(date, mood, userRef, userData)

		//If user already has logged data for today, then update() if not, then add() new document for today
		getTodayLog(date).then((todayRef) => {
			if (todayRef) {
				todayRef.ref.update(data)
					.then(() => {
						console.log('Document successfully updated')
					})
					.catch((error) => {
						console.error('Error updating document: ', error)
					})
			} else {
				// Create new doc for 'today's date
				firebase
					.firestore()
					.collection('moodLog')
					.doc()
					.set(data)
					.catch((e) => {
						console.log(error)
					})
			}
		})
	}

	function logDate(obj) {
		/* Date is only formatted once logMood is called */
		setDate(obj.date)
		setlogsExpanded(false)
	}

	function logSleep(obj) {
		setSleepHours(obj)
	}

	if (userDataLoaded === false) {
		return (
			<>
				<AppLoading
					startAsync={getUserData}
					onFinish={() => setUserDataLoaded(true)}
					onError={console.warn}></AppLoading>
			</>
		)
	}
	console.log('userd: ' + JSON.stringify(userData))
	return (
		// Entire background style
		<View
			style={{
				flex: 1,
				backgroundColor: Theme.cream,
				fontFamily: 'DMMono_500Medium',
			}}>
			<Calendar date={date} logDate={logDate} />
			<LoggerView
					selector={<MoodSelector mood={mood} logMood={logMood} />}
					cardTitle='mood'
					expandHeight={220}
					loggerExpanded={logsExpanded}
				/>
				<LoggerView
					selector={<SleepSelector hours={sleepHours} logSleep={logSleep} />}
					cardTitle='sleep'
					expandHeight={80}
					loggerExpanded={logsExpanded}
				/>
		</View>
	)
}

Home.propTypes = {
	user: PropTypes.object,
}

export default Home
