import { StyleSheet } from 'react-native'
import Theme from '../../styles/colors'

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		flex: 1,
	},
	header: {
		flex: 1,
		backgroundColor: Theme.primaryLight,
		height: 70,
	},
	avatar: {
		width: 130,
		height: 130,
		borderRadius: 63,
		borderWidth: 4,
		borderColor: 'white',
		// marginBottom: 10,
		alignSelf: 'center',
		position: 'absolute',
		marginTop: 130,
	},
	name: {
		fontSize: 22,
		color: Theme.primary,
		fontWeight: '600',
	},
	body: {
		flex: 2,
		color: Theme.cream,
		alignItems: 'center',
		padding: 30,
		flexDirection: 'column',
	},
	info: {
		fontSize: 16,
		color: Theme.text,
		// marginTop: 10,
	},
	description: {
		fontSize: 16,
		color: '#696969',
		// marginTop: 10,
		textAlign: 'center',
	},
	buttonText: {
		fontSize: 20,
		color: '#696969',
		fontWeight: '400',
	},
	buttonContainer: {
		marginTop: 40,
		height: 50,
		width: 130,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
		borderRadius: 30,
		backgroundColor: Theme.classyLight,
	},
})

export default styles
