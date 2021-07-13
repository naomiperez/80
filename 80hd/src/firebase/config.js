import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// const androidCredentials = {
//   clientId: '23844228465-a31re82e4fkeuua5bks0f3imafqtf93c.apps.googleusercontent.com',
//   appId: '1:23844228465:android:023ab61189bb678c237ad0',
//   apiKey: 'AIzaSyCdSC5kHDJVbkvW4px4ZBvd0Z7AoF6L1Zk',
//   databaseURL: 'https://users.nam.firebasedatabase.app',
//   storageBucket: 'hd-e5880.appspot.com',
//   messagingSenderId: '',
//   projectId: 'hd-e5880',
// };

// const iosCredentials = {
//   clientId: '23844228465-1lhnsncqh4k8qokupb8a8ajip5n1bmb6.apps.googleusercontent.com',
//   appId: '1:23844228465:ios:9d185451d0627626237ad0',
//   apiKey: 'AIzaSyAkfJrFt_JihrTjlXKoIp9W9n-vFAC1ixw',
//   databaseURL: 'https://users.nam.firebasedatabase.app',
//   storageBucket: 'hd-e5880.appspot.com',
//   messagingSenderId: '',
//   projectId: 'hd-e5880',
// };

var firebaseConfig = {
	apiKey: 'AIzaSyBRiwQ2HQMOF9TgsFMO7b41035wjNj4lNI',
	authDomain: 'hd-e5880.firebaseapp.com',
	projectId: 'hd-e5880',
	storageBucket: 'hd-e5880.appspot.com',
	messagingSenderId: '23844228465',
	appId: '1:23844228465:web:d47372359f50686c237ad0',
	measurementId: 'G-HRV974KXD2',
}

export default firebaseConfig
firebase.initializeApp(firebaseConfig)
