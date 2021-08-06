import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Theme from '../styles/colors'

const styles = StyleSheet.create({
	appButtonContainer: {
		elevation: 8,
		backgroundColor: Theme.primaryLight,
		borderRadius: 8,
		paddingVertical: 12,
		paddingHorizontal: 14,
	},
	appButtonText: {
		fontSize: 18,
		color: Theme.text,
		fontWeight: 'bold',
		alignSelf: 'center',
		textTransform: 'uppercase',
	},
})

const AppButton = ({ onPress, title }) => (
	<TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
		<Text style={styles.appButtonText}>{title}</Text>
	</TouchableOpacity>
)

AppButton.propTypes = {
	onPress: PropTypes.func,
	title: PropTypes.string,
}

export default AppButton
