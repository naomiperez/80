import React, { useState } from 'react';
import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingSwiper from './src/components/OnboardingSwiper'
import Firebase, { db } from './src/firebase/config'

const Stack = createStackNavigator();

// Use Stack Navigator to navigate to various pages in app
function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  if (loading) {	
    return (	
      <Text>
        loading
        </Text> 
    )	
  }

  useEffect(() => {
    const usersRef = db.collection('users');
    if(!usersRef.exists()){
      console.log("Collection does not exist")
    } else {
      console.log("Collection exists")
    }
    // returns the currently logged in user
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // fetch all the extra user data that we stored in Firestore
        // and set it on the current component’s state
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            console.log("Error: " + error)
            setLoading(false)
          });
      } else {
        console.log("User is null")
        setLoading(false)
      }
    });
  }, []);

  /* If returning user, open Home. Else, open onboarding & Login screen */
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      { user ? (
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Onboarding" component={OnboardingSwiper} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;