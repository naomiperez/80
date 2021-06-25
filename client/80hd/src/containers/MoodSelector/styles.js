import { StyleSheet } from 'react-native';
import Theme from '../../styles/colors'

export default StyleSheet.create({
    buttonSpace: {
        margin: 3
    },
    button: {
        backgroundColor: Theme.cream,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: Theme.primary,
        padding: 3,
        marginTop: 2,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.2,
    },
    icon: {
        width: 35,
        height: 35
    }
});
