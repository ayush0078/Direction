import React, {useState, useContext} from 'react';
import {View, Linking, StyleSheet, Button, Text} from 'react-native';
import Heading from './Heading';
import Location from './Location';
import { FontAwesome } from '@expo/vector-icons';
import SearchButton from './SearchButton';
import {FontAwesome5} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';



const Trips = () => {
    // const { origin, destination } = useContext(AuthContext);
    // console.log({signin});
    const [from, setFrom] = useState('Home');
    const [to, setTo] = useState('School');

    const exchanagePress = () => {
        setFrom(to);
        setTo(from);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            </View>
            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}
            >
            {/* <Heading name='Trips' /> */}
            <Text style={styles.trip}>Trips</Text>
            <Location name={from} />
            <FontAwesome style={styles.exchange} name='exchange' size={28} color='black' onPress={exchanagePress} />
            <Location name={to} />
            <SearchButton origin='&origin=Bonhoefferstraße+9+Heidelberg' destination='&destination=Bismarkplatz+Heidelberg' dir_action='&dir_action=navigate' />
            </Animatable.View>
        </View>
    )
}

Trips.navigationOptions = {
    title: 'Trips',
    tabBarIcon: <FontAwesome5 name='route' color="#71C9CE" size={22} />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#71C9CE',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    header: {
        flex: 1/2,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    exchange: {
        transform: ([
            {rotateX: '45deg'},
            {rotateZ: '90deg'}       
        ]),
    },
    trip: {
  
        fontSize: 30,
        fontWeight: '400',
        color: 'black'
    }
});

export default Trips;