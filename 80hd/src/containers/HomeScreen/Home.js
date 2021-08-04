import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import Calendar from '../../components/Calendar/Calendar'
import LoggerView from '../../components/LoggerCard/LoggerView'
import MoodSelector from '../MoodSelector/MoodSelector'
import SleepSelector from '../SleepSelector/Sleep'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { useFirebaseAuth } from '../../CurrentUserContext'
import { getUserData } from '../../firebase/UserInfo'
import styles from './styles'
import Theme from '../../styles/colors'

import { formatLogData, getTodayLog } from './HandleData'

function Home(props) {
	const userRef = useFirebaseAuth()

	// Use state variables to store date and mood
	const today = new Date()
	const moodInit = 10

	const [mood, setMood] = useState(moodInit)
	const [date, setDate] = useState(today)
	const [sleepHours, setSleepHours] = useState(0)

	const [logsExpanded, setlogsExpanded] = useState(false)

	var userData = getUserData(userRef)

	useEffect(() => {
		const getData = async () => {
			userData = await getUserData(userRef)
		}

		getData()
	}, [])

	function logMood(mood) {
		setMood(mood)

		let data = formatLogData(date, mood, userRef, props.user)
		/* If user already has logged data for today, then update() 
            if not, then add() new document for today
        */
		getTodayLog(date).then((todayRef) => {
			if (todayRef) {
				todayRef.ref
					.update(data)
					.then(() => {
						console.log('Document successfully updated')
					})
					.catch((error) => {
						// The document probably doesn't exist.
						console.error('Error updating document: ', error)
					})
			} else {
				// Create new doc for 'today's date
				firebase.firestore().collection('moodLog').doc().set(data)
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
				expandHeight={60}
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
