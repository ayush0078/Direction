import React, { useState } from 'react';
import { Text, Input, Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import Spacer from '../components/Spacer';

const SignupScreen3 = ({ navigation }) => {
    const [schoolAdd, setSchoolAdd] = useState('');

    return ( 
        <View style={styles.container}>
            <Spacer>
            <Text h3>Sign Up</Text>
            </Spacer>

            <Spacer>
            <Input 
                placeholder='School Address' 
                value={schoolAdd}
                onChangeText={setSchoolAdd}
                autoCorrection={false}
            />
            </Spacer>

            <Spacer>
            <Button title='SIGN UP' onPress={() => navigation.navigate('mainFlow')} />
            </Spacer>
            <Spacer>
            <Button title='Sign In' onPress={() => navigation.navigate('Signin')} />
            </Spacer>
        </View>
)};

SignupScreen3.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100
    }
});

export default SignupScreen3;