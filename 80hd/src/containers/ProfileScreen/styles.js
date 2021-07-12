import { StyleSheet } from 'react-native';
import Theme from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.cream,
    },
    header: {
        backgroundColor: Theme.primaryLight,
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: Theme.text,
        fontWeight: '600',
    },
    body: {
        marginTop: 20,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: Theme.text,
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: "#696969",
        fontWeight: "400"
    },
    buttonContainer: {
        marginTop: 40,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 200,
        borderRadius: 30,
        backgroundColor: Theme.classyLight,
    }
});

export default styles;