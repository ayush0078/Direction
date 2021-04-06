import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Trips from '../components/Trips';
import Profile from '../components/Profile';
import Settings from '../components/Settings';
import {Feather} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { createStackNavigator } from 'react-navigation-stack';
import UserScreen from './UserScreen';
import UserDetailScreen from './UserDetailScreen';

const Tab = createBottomTabNavigator()

// const stack = createStackNavigator({
//     User: UserScreen,
//     UserDetail: UserDetailScreen
// });

// stack.navigationOptions = {
//     title: 'Profile'
// }

const TabNavigator = () => {
    return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName='Trips'>
            <Tab.Screen
             options={{ tabBarIcon:({size, color}) => (<Feather name='settings' size={size} color={color} />)}} 
             name='Settings'
             component={Settings} 
            />
            <Tab.Screen 
             options={{ tabBarIcon:({color, size}) => (<FontAwesome5 name='route' color={color} size={size} />)}} 
             name='Trips' 
             component={Trips} 
            />
            <Tab.Screen 
             options={{ tabBarIcon:({color, size}) => (<MaterialCommunityIcons name='account' color={color} size={size} />)}} 
             name='Profile' 
             component={Profile}
            />
        </Tab.Navigator>
    </NavigationContainer>
    )
}


export default TabNavigator;
