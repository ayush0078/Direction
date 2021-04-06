import React, { useContext } from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {Feather} from '@expo/vector-icons';
import Spacer from './Spacer';
import { Context as AuthContext } from '../context/AuthContext'
import * as Animatable from 'react-native-animatable';

const Settings = () => {
    const { signout } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}
            >
            <Text style={styles.setting}>Settings</Text>

            <Spacer>
            <View style={styles.button}>
            <View style={styles.signOut}>
            <Button style={styles.signoutButton} color={"#fff"} title='Sign Out' onPress={signout} />
            </View>
            </View>
            </Spacer>
            </Animatable.View>
        </View>
    )
}

Settings.navigationOptions= {
    title: 'Settings',
    tabBarIcon: <Feather name='settings' color="#71C9CE" size={22} />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#71C9CE'
    },
    signoutButton: {
        marginTop:50,
        marginRight: 30,
    },
    header: {
        flex: 1,
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    setting: {
        fontSize: 30,
        fontWeight: '400',
        color: 'black',
        padding: 10,
        marginLeft: 4
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    signOut: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#71C9CE'
    },
});

export default Settings;