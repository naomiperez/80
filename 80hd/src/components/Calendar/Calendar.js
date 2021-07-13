import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import CalendarStrip from 'react-native-calendar-strip'
import Theme from '../../styles/colors'

// Using react-native-calendar-strip package to display calendar at top of Home page

function Calendar(props) {
	let { date } = props

	// handleChange used for CalendarStrip's onDateSelected callback
	function handleChange(date) {
		const dateObj = new Date(date)

		// Calling 'Home' logDate function
		props.logDate({ date: dateObj })
	}

	return (
		<View>
			<CalendarStrip
				scrollToOnSetSelectedDate={true}
				scrollerPaging={true}
				scrollable={true}
				startingDate={date}
				selectedDate={date}
				style={{ 
					height: 150, 
					paddingTop: 15, 
					paddingBottom: 5 
				}}
				daySelectionAnimation={{
					type: 'background',
					duration: 200,
					highlightColor: Theme.creamHalf,
				}}
				calendarColor={Theme.calendar}
				calendarHeaderStyle={{ color: Theme.text, marginTop: 30 }}
				dateNumberStyle={{ color: Theme.text }}
				dateNameStyle={{ color: Theme.text }}
				highlightDateNameStyle={{ color: Theme.text }}
				highlightDateNumberStyle={{ color: Theme.text }}
				iconContainer={{ flex: 0.1 }}
				leftSelector={[]}
				rightSelector={[]}
				date={date}
				onDateSelected={handleChange}
			/>
		</View>
	)
}

Calendar.propTypes = {
	date: PropTypes.instanceOf(Date),
	logDate: PropTypes.func
}

export default Calendar