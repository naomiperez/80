import { StyleSheet } from 'react-native'
import Theme from '../../styles/colors'

export default StyleSheet.create({
	wrapper: {},
	slide1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Theme.primary,
	},
	slide2: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Theme.primary,	
	},
	slide3: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Theme.primary,
	},
	title: {
		color: Theme.text,
		fontSize: 30,
		fontWeight: 'bold',
		paddingBottom: 5,
	},
	text: {
		color: Theme.text,
		fontSize: 20,
		paddingLeft: 60,
		paddingRight: 60,
	},
	buttonContainer: {
		marginTop: 25
	},
	bold: {
		fontWeight: 'bold',
	},
})
