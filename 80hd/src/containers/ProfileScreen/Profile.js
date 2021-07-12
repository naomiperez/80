import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from './styles'
import { NavigationContainer } from '@react-navigation/native';
import { VictoryBar, VictoryChart, VictoryTheme } from "../../Victory";

const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
];


function Profile({ navigation }) {

    function logout() {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            navigation.navigate('AppNavigator')
        }).catch((error) => {
            // An error happened.
            console.log("Error when logging out: " + error.message)
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
            <View style={styles.body}>

                <View style={styles.bodyContent}>
                    <Text style={styles.name}>John Doe</Text>

                    <TouchableOpacity style={styles.buttonContainer} onPress={() => logout()}>
                        <Text style={styles.buttonText}>logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

}

export default Profile;