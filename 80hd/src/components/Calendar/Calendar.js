import React, { useState } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import CalendarStrip from 'react-native-calendar-strip'
import Theme from '../../styles/colors'
import styles from './styles'
import AppLoading from 'expo-app-loading'
import {
	useFonts,
	// DMMono_300Light,
	// DMMono_300Light_Italic,
	DMMono_400Regular,
	// DMMono_400Regular_Italic,
	DMMono_500Medium,
	// DMMono_500Medium_Italic,
} from '@expo-google-fonts/dm-mono'

function Calendar(props) {
	let [fontsLoaded] = useFonts({
		DMMono_400Regular,
		DMMono_500Medium,
	})

	let { initialDate } = props
	const [date, setDate] = useState(initialDate)

	// Use onDateSelected callback to notify Home Component of selected Date
	function handleChange(date) {
		const dateObj = new Date(date)

		setDate(dateObj)
		// Calling 'Home' logDate function
		props.logDate({ date: dateObj })
	}

	if (!fontsLoaded) {
		return <AppLoading />
	} else {
		return (
			<View>
				<CalendarStrip
					scrollToOnSetSelectedDate={true}
					scrollerPaging={true}
					scrollable={true}
					startingDate={date}
					selectedDate={date}
					style={styles.all}
					innerStyle={{
						flex: 1,
					}}
					daySelectionAnimation={{
						type: 'background',
						duration: 150,
						highlightColor: Theme.cream,
						calendarColor: Theme.cream,
					}}
					calendarColor={Theme.primary}
					calendarHeaderContainerStyle={styles.headerContainer}
					calendarHeaderStyle={{
						paddingTop: 30,
						paddingBottom: 15,
						fontSize: 25,
						fontFamily: 'DMMono_500Medium',
						color: Theme.date,
					}}
					highlightDateContainerStyle={styles.hlDateContainer}
					highlightDateNameStyle={{
						color: Theme.text,
						fontSize: 11,
						fontStyle: 'normal',
						fontFamily: 'DMMono_500Medium',
					}}
					highlightDateNumberStyle={{ color: '#976C50' }}
					dayContainerStyle={styles.dayContainer}
					dateNumberStyle={{
						color: Theme.text,
						fontSize: 23,
						fontStyle: 'normal',
						fontFamily: 'DMMono_500Medium',
					}}
					dateNameStyle={{
						color: Theme.text,
						fontSize: 12,
						fontWeight: '700',
						fontStyle: 'normal',
						fontFamily: 'DMMono_500Medium',
					}}
					iconContainer={{ padding: 4 }}
					leftSelector={[]}
					rightSelector={[]}
					date={date}
					onDateSelected={handleChange}
				/>
			</View>
		)
	}
}

Calendar.propTypes = {
	date: PropTypes.instanceOf(Date),
	logDate: PropTypes.func,
}

export default Calendar
