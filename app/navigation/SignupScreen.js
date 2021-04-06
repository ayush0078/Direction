import React, { useState, useContext } from 'react';
import { StyleSheet} from 'react-native';
import { Text } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink';
import { View, TextInput, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const SignupScreen = () => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastNAme] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [homeAddress, setHomeAdd] = useState('');
    const [schoolAddress, setSchoolAdd] = useState('');

    

    return ( 
    <View style={styles.container}>
    <ScrollView>
        <NavigationEvents 
            onWillBlur={ clearErrorMessage }
            onWillFocus={ clearErrorMessage }
        />

        <View style={styles.header}>
        <Spacer>
        <Text style={styles.text_header}>Register Now!</Text>
        </Spacer>
        </View>

        <Animatable.View
            animation="fadeInUpBig" 
            style={styles.footer}>

        <Spacer>
        <Text style={styles.text_footer}>First Name</Text>
        <View style={styles.action}>
        <Feather 
                name="info"
                color="#05375a"
                size={20}
            />
        <TextInput 
            placeholder='Your First Name' 
            value={firstName} 
            onChangeText={setFirstName}
            autoCorrect={false}
            style={styles.textInput} 
        />
        </View>
        </Spacer>

        <Spacer>
        <Text style={styles.text_footer}>Family Name</Text>
        <View style={styles.action}>
        <Feather 
                name="info"
                color="#05375a"
                size={20}
            />
        <TextInput 
            placeholder='Your Last Name' 
            value={lastName} 
            onChangeText={setLastNAme}
            autoCorrect={false}
            style={styles.textInput}
        />
        </View>
        </Spacer>

        <Spacer>
        <Text style={styles.text_footer}>Date of Birth</Text>
        <View style={styles.action}>
        <Feather 
                name="calendar"
                color="#05375a"
                size={20}
            />
        <TextInput 
            placeholder='Your Date of Birth (dd-mm-yyyy)' 
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            autoCorrect={false} 
            autoCapitalize='none' 
            style={styles.textInput}
        />
        </View>
        </Spacer>

        <Spacer>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
        <Feather 
                name="mail"
                color="#05375a"
                size={20}
            />
        <TextInput 
            placeholder='Your Email Address'
            value={email}
            onChangeText={setEmail}
            autoCorrection={false}
            autoCapitalize="none"
            style={styles.textInput}
        />
        </View>
        </Spacer>

        <Spacer>
        <Text style={styles.text_footer}>Password</Text>
        <View style={styles.action}>
        <Feather 
                name="lock"
                color="#05375a"
                size={20}
            />
        <TextInput
            secureTextEntry 
            placeholder='Your Password' 
            value={password}
            onChangeText={setPassword}
            autoCorrection={false}
            autoCapitalize="none"
            style={styles.textInput}
        />
        </View>
        </Spacer>

        <Spacer>
        <Text style={styles.text_footer}>Home Address</Text>
        <View style={styles.action}>
        <Feather 
                name="home"
                color="#05375a"
                size={20}
            />
        <TextInput 
            placeholder='Your Home Address (Street, City, Post Code)' 
            value={homeAddress}
            onChangeText={setHomeAdd}
            autoCorrection={false}
            style={styles.textInput}
        />
        </View>
        </Spacer>

        <Spacer>
        <Text style={styles.text_footer}>School Address</Text>
        <View style={styles.action}>
        <FontAwesome
            name="building"
            color="#05375a"
            size={20}
        />
        <TextInput 
            placeholder='Your School Address (Street, City, Post Code)' 
            value={schoolAddress}
            onChangeText={setSchoolAdd}
            autoCorrection={false}
            style={styles.textInput}
        />
        </View>
        </Spacer>

        {state.errorMessage ? <Text style={styles.errorMessage}>{ state.errorMessage }</Text> : null}
        <Spacer>
        <View style={styles.button}>
        <View style={styles.signIn}>
        <Button style={styles.textSign} color={'#fff'} title='REGISTER' onPress={() => signup({ firstName, lastName, dateOfBirth, email, password, homeAddress, schoolAddress })} />
        </View>
        </View>
        </Spacer>

        <NavLink 
            routeName='Signin'
            text= 'SIGN IN'
        />
        </Animatable.View>
    </ScrollView>
    </View>
)};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
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
        marginTop: 100,
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

export default SignupScreen;