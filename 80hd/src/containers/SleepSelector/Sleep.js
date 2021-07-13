import React, { useState } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Slider from '@react-native-community/slider'
import styles from './styles'

/* I may have to implement something where I retreive that day's Mood info to display when user clicks on it */

function SleepSelector(props) {
	const [hours, setHours] = useState(props.hours)

	function logHoursSlept(hours) {
		let hoursFormatted = hours.toFixed(1) * 10
		setHours(hoursFormatted)
		console.log('Hours in sleep component: ' + hoursFormatted)
		props.logSleep(hoursFormatted)
		// Log hours slept to parent (Home) component
	}

	return (
		<>
			<View>
				<Text style={styles.text}>{hours.toFixed(1) * 1} hours</Text>
				<Slider
					value={hours / 10}
					step={0.1}
					style={styles.slider}
					onValueChange={(x) => logHoursSlept(x)}
				/>
			</View>
		</>
	)
}

SleepSelector.propTypes = {
	hours: PropTypes.number,
	logSleep: PropTypes.func,
}

export default SleepSelector
