import { StyleSheet } from 'react-native'
import Theme from '../../styles/colors'

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: Theme.primary
	},
	title: {},
	logo: {
		flex: 1,
		height: 60,
		alignSelf: 'center',
		marginTop: 100,
		marginBottom: 30
	},
	scroll: {
		flex: 1,
		width: '100%',
	},
	input: {
		height: 48,
		borderRadius: 5,
		overflow: 'hidden',
		backgroundColor: 'white',
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 30,
		marginRight: 30,
		paddingLeft: 16,
	},
	button: {
		backgroundColor: Theme.primaryLight,
		marginLeft: 30,
		marginRight: 30,
		marginTop: 20,
		height: 48,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonTitle: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
	},
	footerView: {
		flex: 1,
		alignItems: 'center',
		marginTop: 20,
	},
	footerText: {
		fontSize: 16,
		color: Theme.primaryLight,
	},
	footerLink: {
		color: Theme.white,
		fontWeight: 'bold',
		fontSize: 16,
	},
})
