import Theme from '../../styles/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.primaryLight,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        paddingLeft: 30,
        paddingTop: 18,
        borderRadius: 20,
        borderColor: Theme.primaryLight,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 5 },
        shadowRadius: 5,
        shadowOpacity: 0.3,
    },
    inlineStyle: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    text: {
        color: Theme.text,
        marginTop: 13,
        paddingBottom: 5,
        fontSize: 20,
    },
    divider: {
        backgroundColor: Theme.text,
        height: 1.5,
        borderRadius: 10
    },
    img: {
        height: 50,
        width: 50,
        marginBottom: 10,
        marginRight: 10
    }
})

export default styles