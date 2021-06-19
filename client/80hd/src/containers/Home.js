import React from 'react';
import { View, StyleSheet } from 'react-native';
import Calendar from '../modules/calendar/Calendar'
import Mood from '../components/Mood'
import Theme from '../styles/colors'
import LoggerView from '../components/LoggerView'

const today = new Date().toDateString();
const moodInit = 10;

const user = {
    name: 'Naomi'
}

function Home (props) {
    // Use state variables to store date and mood
    const [mood, setMood] = React.useState(moodInit)
    const [date, setDate] = React.useState(today)
    const user = props.user
    const db = firebase.firestore()

    const docRef = db.collection('moodLog')

    function logMood(mood) {
        setMood(mood)
        console.log(`Mood: ${mood} Date: ${date}`)

        let todayDoc = docRef.where("timestamp", "==", date).get()

        // If we are changing the mood that was previously logged 
        // i.e. (document for today already exists)
        if(!todayDoc.empty()) {
            todayDoc.update({
                mood: mood
            }).then(() => {
                console.log("Document successfully updated");
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
        } else {
            // Create new data for day and add it as a document
            let data = {
                date: date,
                mood: mood,
                weekday: date.getDay(),
                user: user
            }

            docRef.add(data);
        }
    }
    
    function logDate(obj) {
        console.log(obj.date)
        setDate(obj.date)
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
        backgroundColor:  Theme.cream
    }
});

export default Home;