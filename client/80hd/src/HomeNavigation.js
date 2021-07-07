import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './containers/HomeScreen/Home';
import Profile from './containers/ProfileScreen/Profile';
import Theme from './styles/colors'

function MyTabBar({ navigation }) {
  return (
    <Button
      title="Home"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate('Home');
      }}
    />
  );
}
const Tab = createBottomTabNavigator();

const HomeNavigation = () => {

  return (
    <Tab.Navigator initialRouteName='Home' tabBarOptions={{
      activeTintColor: Theme.primaryLight,
      style: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#fff',
        borderRadius: 15,
        height: 60,
      },
      labelStyle: {
        fontSize: 15,
        top: 10,
      }
    }}>
      {/* tabBar={props => <MyTabBar {...props} />} */}
      <Tab.Screen name='Home' component={Home} options={{
          tabBarLabel: 'Home',
        }}
        />
      <Tab.Screen name='Profile' component={Profile} options={{
          tabBarLabel: 'Profile',
        }}/>
    </Tab.Navigator>
  );
}

export default HomeNavigation;