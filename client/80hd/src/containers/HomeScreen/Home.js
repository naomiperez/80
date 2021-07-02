import React, { useState } from 'react';
import { View } from 'react-native';
import Calendar from '../../components/calendar/Calendar'
import LoggerView from '../../components/LoggerCard/LoggerView'
import MoodSelector from '../MoodSelector/Mood'
import SleepSelector from '../SleepSelector/Sleep'
import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
import { CurrentUserProvider, useCurrentUser } from '../../CurrentUserContext'
import styles from './styles'

const today = new Date();
const moodInit = 10;

function Home(props) {
    // Use state variables to store date and mood
    const [mood, setMood] = useState(moodInit)
    const [date, setDate] = useState(today)
    const [sleepHours, setSleepHours] = useState(0)
    const { currentUser, fetchCurrentUser } = useCurrentUser()

    const userRef = currentUser

    // 
    React.useEffect(() => {
        fetchCurrentUser()

    }, [])

    /* Returns  */
    async function getTodayLog() {
        const db = firebase.firestore()

        // If user has already logged something today, then get the document
        // with today's date from the 'moodLog' Firestore collection
        let formattedDate = formatDate()
        const todayRef = await db.collection('moodLog').where("date", "==", formattedDate).get()
            .then(querySnapshot => {
                if (querySnapshot.docs.length === 0) {
                    console.log("No Documents from today")
                    return undefined
                } else if (querySnapshot.docs.length > 1) {
                    console.log("More than one document from today")
                }

                return querySnapshot.docs[0]
                //  id & data properties
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });

            return todayRef
    }

    /********************/
    function logMood(mood) {
        console.log(`Mood: ${mood} Date: ${date}`)

        setMood(mood)

        let data = formatLogData()
        /* If user already has logged data for today, then update() 
            if not, then add() new document for today
        */
        getTodayLog().then((todayRef) => {
            if (todayRef) {
                console.log("todayRef: " + todayRef)
                todayRef.ref.update(data)
                    .then(() => {
                        console.log("Document successfully updated");
                    }).catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
            } else {
                // New doc for 'today''s date
                firebase.firestore().collection('moodLog').doc().set(data)
            }
        })
    }

    function formatDate(){
        const formattedDate = date.getFullYear().toString() + '-' + date.getMonth().toString() + '-' + date.getDate().toString()
        return formattedDate
    }

    function formatLogData() {
        /* Format date to pass to document.add() */
        let day = date.getDay()
        const formattedDate = formatDate()
        /* Check if this component was returned by Registration/Login or App.js */
        if (userRef) {
            console.log("userRef: " + userRef)
            // Create new data for day and add it as a document
            let data = {
                date: formattedDate,
                mood: mood,
                weekday: day,
                user: userRef
            }
            return data
        } else {
            let user = props.user
            console.log("user: " + user)
            let data = {
                date: formattedDate,
                mood: mood,
                weekday: day,
                user: user
            }
            return data
        }
    }

    function logDate(obj) {
        // console.log(obj.date)
        setDate(obj.date)
    }

    function logSleep(obj) {
        setSleepHours(obj)
        console.log("Sleep hours in Home component: " + obj)
    }

    return (
        <CurrentUserProvider>
            <View style={styles.container}>
                {/* import the context and pass along the data */}
                <Calendar date={date} logDate={logDate} />
                <LoggerView selector={<MoodSelector mood={mood} logMood={logMood} />} cardTitle='mood' expandHeight={60}/>
                <LoggerView selector={<SleepSelector hours={sleepHours} logSleep={logSleep} />} cardTitle='sleep' expandHeight={80} />
            </View>
        </CurrentUserProvider>
    );
}

export default Home;