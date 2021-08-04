import Theme from '../../styles/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	all: {
		height: 200,
	},
	headerContainer: {
		backgroundColor: Theme.cream,
		paddingTop: 20,
	},
	header: {
		paddingTop: 40,
		paddingBottom: 18,
		fontSize: 20,
		backgroundColor: Theme.cream,
	},
	dayContainer: {
		backgroundColor: Theme.date,
		borderRadius: 6,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
})

export default styles
