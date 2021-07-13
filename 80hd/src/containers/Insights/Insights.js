import React from 'react'
import { Text } from 'react-native'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { View } from 'react-native'
import { VictoryLine, VictoryAxis, VictoryChart, VictoryTheme } from '../../Victory'
import styles from './styles'

const data = [
	{ x: 1, y: 2 },
	{ x: 2, y: 1 },
	{ x: 3, y: 4 },
	{ x: 4, y: 2 },
	{ x: 5, y: 4 },
	{ x: 6, y: 5 },
	{ x: 7, y: 8 },
]

function Insights() {

	return (
		<View style={styles.chartContainer}>
			<Text style={styles.text}>July Mood Insights</Text>
			<VictoryChart 
				width={350} 
				theme={VictoryTheme.material} 
				style={styles.chart} 
			>
				<VictoryAxis crossAxis 
					tickFormat={(t) => `July ${Math.round(t)}`} 
					label="Days"
					style={{
						axisLabel: {fontSize: 15, padding: 30}
					}}
				/>
				<VictoryAxis dependentAxis 
					tickFormat={(t) => `${Math.round(t)}`} 
					domain={[0, 7]}
					label="Mood"
					style={{
						axisLabel: {fontSize: 15, padding: 30}
					}} />
				<VictoryLine data={data} x="x" y="y" />
			</VictoryChart>
		</View>
	)
}

export default Insights