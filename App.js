import React from 'react';
import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import TabNavigator from './app/navigation/TabNavigator';
import StackNavigator from './app/navigation/StackNavigator';
import { Provider as AuthProvider } from './app/context/AuthContext';
import { Provider as UserDataProvider } from './app/context/UserDataContext';
import { setNavigator } from './app/navigationRef';
import LoadingScreen from './app/navigation/LoadingScreen';
import UserScreen from './app/navigation/UserScreen';
import UserDetailScreen from './app/navigation/UserDetailScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Trips from './app/components/Trips';
import Settings from './app/components/Settings';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const stack = createStackNavigator({
  User: UserScreen,
  UserDetail: UserDetailScreen
});

stack.navigationOptions = {
  title: 'Profile',
  tabBarIcon: <MaterialCommunityIcons name='account' color={'#71C9CE'} size={24} />,
}


const switchNavigator = createSwitchNavigator({
  loadingScreen: LoadingScreen,
  loginFlow: StackNavigator,
  mainFlow: createBottomTabNavigator({
    stack,
    TripCreate: Trips,
    Settings: Settings,
  })
});


const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <UserDataProvider>
    <AuthProvider>
      <App ref={(navigator) => { setNavigator(navigator) }} />
    </AuthProvider>
    </UserDataProvider>
  );
};


