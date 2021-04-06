import React, {useContext} from 'react';
import { Text, StyleSheet, Image, View, Dimensions, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';


const IntroScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image 
                    animation="bounceIn"
                    duraton= '1500'
                    source={require('../assets/direction4.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style={styles.title}>Find a way for your Children to go to School!</Text>
                <Text style={styles.text}>Sign In with account</Text>
                <View style={styles.button}>
                    <View style={styles.buttonStyle}>
                        <Button color={'#fff'} title='Get Started' onPress={() => navigation.navigate('Signin')}/>
                    </View>
                </View>
            </Animatable.View>
        </View>
    )
}

IntroScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#71C9CE'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo:{
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    buttonStyle: {
        width: 150,
        height: 40,
        marginTop: 50,
        borderRadius: 50,
        backgroundColor: '#71C9CE'
    },
})

export default IntroScreen;