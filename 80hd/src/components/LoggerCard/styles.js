import Theme from '../../styles/colors'
import Font from '../../styles/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		backgroundColor: Theme.card,
		marginTop: 30,
		marginRight: 20,
		marginLeft: 20,
		paddingLeft: 30,
		borderRadius: 20,
		borderColor: Theme.white,
		borderWidth: 2,
		shadowColor: '#000',
		shadowOffset: { width: 1, height: 4 },
		shadowRadius: 3,
		shadowOpacity: 0.25,
	},
	inlineStyle: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	text: {
		color: Theme.text,
	},
	divider: {
		backgroundColor: Theme.text,
		borderRadius: 10,
	},
	img: {
		height: 60,
		width: 60,
	},
})

export default styles
