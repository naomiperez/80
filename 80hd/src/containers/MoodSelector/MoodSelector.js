import React, { useState } from 'react'
import { View, Image } from 'react-native'
import VerticalSlider from 'rn-vertical-slider'
import pot from '../../assets/images/pot.png'
import PropTypes from 'prop-types'
import Theme from '../../styles/colors'
import styles from './styles'

/* I may have to implement something where I retreive that day's Mood info to display when user clicks on it */

const MoodSelector = React.memo((props) => {
	const [newRender, setNewRender] = useState(true)
	let { mood, date } = props

	{
		console.log('Rerendering MoodFrag? ' + JSON.stringify(props))
	}

	function handleChange(index) {
		console.log(index)
		props.logMood(index)
	}

	if(newRender) {
		return (
			<>
			<View style={styles.container}>

				<VerticalSlider
					min={0}
					max={10}
					value={props.mood}
					width={70}
					height={180}
					step={1}
					onChange={(value) => {
						setNewRender(false)
					}}
					borderRadius={6}
					minimumTrackTintColor={Theme.primary}
					maximumTrackTintColor={Theme.white}
					ballIndicatorWidth={10}
					ballIndicatorHeight={10}
					showBallIndicator
					ballIndicatorPosition={-30}
					style={styles.slider}
					renderIndicator={(value) => <Image source={pot}></Image>}
				/>
			</View>
		</>
		)
	} else {

	return (
		<>
			<View style={styles.container}>

				<VerticalSlider
					min={0}
					max={10}
					onChange={(value) => {
						// console.log('CHANGE', value)
					}}
					onComplete={(value) => {
						console.log('COMPLETE', value)
						handleChange(value)
					}}
					width={70}
					height={180}
					step={1}
					borderRadius={6}
					minimumTrackTintColor={Theme.primary}
					maximumTrackTintColor={Theme.white}
					ballIndicatorWidth={10}
					ballIndicatorHeight={10}
					showBallIndicator
					ballIndicatorPosition={-30}
					style={styles.slider}
					renderIndicator={(value) => <Image source={pot}></Image>}
				/>
			</View>
		</>
	)
				}
})

// MoodSelectorFrag.propTypes = {
// 	mood: PropTypes.number,
// 	date: PropTypes.instanceOf(Date),
// 	logMood: PropTypes.func,
// }

// const MoodSelector = React.memo(MoodSelectorFrag)
export default MoodSelector
