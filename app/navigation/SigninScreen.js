 import React, { useContext, useState } from 'react';
import { Text } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { StyleSheet, TextInput, Button } from 'react-native';
import { View } from 'react-native';
import Spacer from '../components/Spacer';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';


const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return ( 
    <View style={styles.container}>
        <NavigationEvents 
            onWillBlur={ clearErrorMessage }
            onWillFocus={ clearErrorMessage }
        />

        <View style={styles.header}>
            <Spacer>
                <Text style={styles.text_header}>Welcome!</Text>
            </Spacer>
        </View>
            
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <Spacer>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
            <FontAwesome 
                name="user-o"
                color="#05375a"
                size={20}
            />
            <TextInput
                placeholder="Your Email"
                value= {email}
                onChangeText= {setEmail}
                autoCorrect= {false}
                autoCapitalize= 'none'
                style={styles.textInput}
            />
            </View>
            </Spacer>

            <Spacer>
            <Text style={[styles.text_footer, {marginTop: 10}]}>Password</Text>
            <View style={styles.action}>
            <Feather 
                name="lock"
                color="#05375a"
                size={20}
            />
            <TextInput
                secureTextEntry 
                placeholder="Your Password" 
                value= {password}
                onChangeText = {setPassword}
                autoCorrect = {false}
                autoCapitalize = 'none'
                style={styles.textInput}
            />
            </View>
            </Spacer>

        { state.errorMessage ? <Text style={styles.errorMessage}>{ state.errorMessage }</Text> : null }
        <Spacer>
        <View style={styles.button}>
        <View style={styles.signIn}>
        <Button style={styles.textSign} color={'#fff'} title='SIGN IN' onPress={() => signin({ email, password })} />
        </View>
        </View>
        </Spacer>
        
        <NavLink 
            routeName='Register'
            text= "SIGN UP"
        />
        </Animatable.View>

    </View>
)};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#71C9CE'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom:50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#71C9CE'
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15,
    },
});

export default SigninScreen;

