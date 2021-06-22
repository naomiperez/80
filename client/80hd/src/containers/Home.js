import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Calendar from '../modules/calendar/Calendar'
import Mood from '../components/Mood'
import Theme from '../styles/colors'
import LoggerView from '../components/LoggerView'
import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const today = new Date().toDateString();
const moodInit = 10;

const user = {
    name: 'Naomi'
}

function Home(props) {
    // Use state variables to store date and mood
    const [mood, setMood] = useState(moodInit)
    const [date, setDate] = useState(today)
    const user = props.user
    const db = firebase.firestore()

    const collectionRef = db.collection('moodLog')

    function logMood(mood) {
        console.log(`Mood: ${mood} Date: ${date}`)


        // If user has already logged something today, then get the document
        // with today's date from the 'moodLog' Firestore collection
        let todayDoc;

        collectionRef.where("timestamp", "==", date).get()
            .then((querySnapshot) => {
                if (querySnapshot.docs.length === 0) {
                    console.log("no Documents from today")
                    // Create new data for day and add it as a document
                    let data = {
                        date: date,
                        mood: mood,
                        weekday: date.getDay(),
                        user: user
                    }

                    collectionRef.add(data);
                } else if (querySnapshot.docs.length > 1) {
                    console.log("More than one document from today")
                }

                todayDoc = querySnapshot.docs[0]
                //  id & data properties
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });

        // If we are changing the mood that was previously logged 
        // i.e. (document for today already exists)
        if (todayDoc) {
            todayDoc.update({
                mood: mood
            }).then(() => {
                console.log("Document successfully updated");
            }).catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
        } else {
            console.log("Something went wrong with collection/doc query.")
        }

    }

    function logDate(obj) {
        console.log(obj.date)
        // setDate(obj.date)
    }

    return (

        <View style={styles.container}>
            {/* import the context and pass along the data */}
            <Calendar date={date} logDate={logDate} />
            <LoggerView selector={<Mood mood={mood} logMood={logMood} />} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.cream
    }
});

export default Home;