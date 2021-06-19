import firebase from '@react-native-firebase/app'
import '@react-native-firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBRiwQ2HQMOF9TgsFMO7b41035wjNj4lNI",
  authDomain: "hd-e5880.firebaseapp.com",
  projectId: "hd-e5880",
  storageBucket: "hd-e5880.appspot.com",
  messagingSenderId: "23844228465",
  appId: "1:23844228465:web:d47372359f50686c237ad0",
  measurementId: "G-HRV974KXD2",
  databaseURL: ""
};
// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()

// avoid deprecated warnings
db.settings({
  timestampsInSnapshots: true
})

export default Firebase 
