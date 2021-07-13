import { StyleSheet } from 'react-native'
import Theme from '../../styles/colors'

const styles = StyleSheet.create({
	chartContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Theme.cream,
		padding: 60,
	},
	text: {
		fontSize: 28,
		color: '#696969',
		fontWeight: '600'
	}
})

export default styles