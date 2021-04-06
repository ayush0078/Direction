import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';
import { View } from 'react-native-animatable';

const NavLink = ({ navigation, text, routeName }) => {
    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate(routeName)}
            style = {[styles.signIn, {
                borderColor: '#71C9CE',
                borderWidth: 1,
                marginTop: 15
            }]}
        >
        <Text style={[styles.textSign, {
            color: '#71C9CE'
        }]}>{text}</Text>
        </TouchableOpacity>
    );

}
 
const styles = StyleSheet.create({
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    signIn: {
        width: 345,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 15,
        backgroundColor: '#fff'
    },
});

export default withNavigation(NavLink);