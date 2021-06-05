import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Calendar from '../modules/calendar/Calendar'
import Mood from '../components/Mood'
import Theme from '../styles/colors'
import LoggerView from '../components/LoggerView'
import UserContext from '../utilities/User'
import Axios from 'axios'

const today = new Date().toDateString();
const moodInit = 10;

const user = {
    name: 'Naomi'
}

function Home () {
    // Use state variables to store date and mood
    const [mood, setMood] = React.useState(moodInit);
    const [date, setDate] = React.useState(today);

    function logMood(mood) {
        setMood(mood)
        console.log(`Mood: ${mood} Date: ${date}`)
        Axios.post('http://localhost:4000/api/insert', { 
            userid: user,
            date: date, 
            mood: mood
        }).then(() => {
            console.log("mood inserted successfully")
        }).catch(error => console.log(error));

    }
    
    function logDate(obj) {
        console.log(obj.date)
        setDate(obj.date)
    }

    return (
        <View style={styles.container}>
            {/* import the context and pass along the data */}
            <UserContext.Provider value={user}>
                <Calendar date={date} logDate={logDate} />
                <LoggerView selector={<Mood mood={mood} logMood={logMood} />} />
            </UserContext.Provider>
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