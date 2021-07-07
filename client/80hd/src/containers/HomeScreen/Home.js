import React, { useState } from 'react';
import { View } from 'react-native';
import Calendar from '../../components/calendar/Calendar';
import LoggerView from '../../components/LoggerCard/LoggerView';
import MoodSelector from '../MoodSelector/Mood';
import SleepSelector from '../SleepSelector/Sleep';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { CurrentUserProvider, useCurrentUser } from '../../CurrentUserContext';
import styles from './styles';
import { formatLogData, getTodayLog } from './HandleData'

const moodInit = 10;

function Home(props) {
  // Use state variables to store date and mood
  const today = new Date();
  const [mood, setMood] = useState(moodInit);
  const [date, setDate] = useState(today);
  const [sleepHours, setSleepHours] = useState(0);
  const { currentUser, fetchCurrentUser } = useCurrentUser();

  const userRef = currentUser;

  React.useEffect(() => {
    fetchCurrentUser();
  }, []);

  /********************/
  function logMood(mood) {
    console.log(`Mood: ${mood} Date: ${date}`);

    setMood(mood);

    let data = formatLogData(date, mood, userRef, props.user);
    /* If user already has logged data for today, then update() 
            if not, then add() new document for today
        */
    getTodayLog(date).then((todayRef) => {
      if (todayRef) {
        console.log('todayRef: ' + todayRef);
        todayRef.ref
          .update(data)
          .then(() => {
            console.log('Document successfully updated');
          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error('Error updating document: ', error);
          });
      } else {
        // New doc for 'today''s date
        firebase.firestore().collection('moodLog').doc().set(data);
      }
    });
  }

  function logDate(obj) {
    // console.log(obj.date)
    setDate(obj.date);
  }

  function logSleep(obj) {
    setSleepHours(obj);
    console.log('Sleep hours in Home component: ' + obj);
  }

  return (
    <CurrentUserProvider>
      <View style={styles.container}>
        {/* import the context and pass along the data */}
        <Calendar date={date} logDate={logDate} />
        <LoggerView
          selector={<MoodSelector mood={mood} date={date} logMood={logMood} />}
          cardTitle="mood"
          expandHeight={60}
        />
        <LoggerView
          selector={<SleepSelector hours={sleepHours} logSleep={logSleep} />}
          cardTitle="sleep"
          expandHeight={80}
        />
      </View>
    </CurrentUserProvider>
  );
}

export default Home;
