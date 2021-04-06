import React, {useContext, useState} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import { Text, ListItem, Button } from 'react-native-elements';
import Heading from './Heading';
import { Context as UserDataContext } from '../context/UserDataContext';



const Profile = () => {
    const { state, fetchData } = useContext(UserDataContext);

    console.log(state);
    return (
        <View style={styles.container}>
            <Heading name='Profile' />
            <NavigationEvents onWillFocus={fetchData} />
            {/* <FlatList
                data={state}
                renderItem={({ item }) => {
                    return (
                        <Text>{item.firstName}</Text>
                    );
                }} /> */}

            {/* <Button onPress={fetchData}></Button> */}
            <Text>{state.firstName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 150,
        marginLeft: 30
       
    },
});

export default Profile;