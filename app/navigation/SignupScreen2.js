import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen2 = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [homeAdd, setHomeAdd] = useState('');

    return ( 
        <ScrollView style={styles.container}>
            <Spacer>
            <Text h3>Sign Up</Text>
            </Spacer>

            <Spacer>
            <Input 
                placeholder='Email Address'
                value={email}
                onChangeText={setEmail}
                autoCorrection={false}
                autoCapitalize="none"
            />
            </Spacer>

            <Spacer>
            <Input
                secureTextEntry 
                placeholder='Password' 
                value={password}
                onChangeText={setPassword}
                autoCorrection={false}
                autoCapitalize="none"
            />
            </Spacer>

            <Spacer>
            <Input 
                placeholder='Home Address' 
                value={homeAdd}
                onChangeText={setHomeAdd}
                autoCorrection={false}
            />
            </Spacer>

            <Spacer>
            <Button title='NEXT' onPress={() => navigation.navigate('Reg')} />
            </Spacer>
            <Spacer>
            <Button title='Sign In' onPress={() => navigation.navigate('Signin')} />
            </Spacer>
        </ScrollView>
)};

SignupScreen2.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        // justifyContent: 'center',
        marginTop: 50

    }
});

export default SignupScreen2;