import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as UserDataContext } from '../context/UserDataContext';
import { View } from 'react-native';
import Heading from '../components/Heading';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';


const UserScreen = () => {
    const { state, fetchData } = useContext(UserDataContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={fetchData} />
            <View style={styles.header}>
            <Heading name= {`Welcome ${state.firstName} ${state.lastName} !`} />
            </View>
            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}
            >
            <Text style={styles.footer_text}>Personal Details</Text>

            <View style={styles.action}>
                <View style={styles.rowStyle}>
                <FontAwesome name='address-card' color="#71C9CE" size={18}/>
                <Text style={styles.label}>First Name</Text>
                </View>
                <Text style={styles.stateStyle}>{state.firstName}</Text>
            </View>

            <View style={styles.action}>
                <View style={styles.rowStyle}>
                <FontAwesome name='address-card' color="#71C9CE" size={18}/>
                <Text style={styles.label}>Last Name</Text>
                </View>
                <Text style={styles.stateStyle}>{state.lastName}</Text>
            </View>

            <View style={styles.action}>
                <View style={styles.rowStyle}>
                <FontAwesome name='envelope' color="#71C9CE" size={18}/>
                <Text style={styles.label}>Email: </Text>
                </View>
                <Text style={styles.stateStyle}>{state.email}</Text>
            </View>

            <View style={styles.action}>
                <View style={styles.rowStyle}>
                <FontAwesome name='home' color="#71C9CE" size={22}/>
                <Text style={styles.label}>Home Address: </Text>
                </View>
                <Text style={styles.stateStyle}>{state.homeAddress}</Text>
            </View>

            <View style={styles.action}>
                <View style={styles.rowStyle}>
                <FontAwesome name='building' color="#71C9CE" size={18}/>
                <Text style={styles.label}>School Address: </Text>
                </View>
                <Text style={styles.stateStyle}>{state.schoolAddress}</Text>
            </View>
            </Animatable.View>
        </View>
    );
};

UserScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#71C9CE'
    },
    header: {
        flex: 1,
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
        paddingHorizontal: 20
    },
    footer_text: {
        fontSize: 25,
        fontWeight: '400',
        marginHorizontal: 10,
        marginVertical: 20
    },
    action: {
        flexDirection: 'column',
        marginTop: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 10,
        marginHorizontal: 10
    },
    label:{
        fontSize: 18,
        fontWeight: '400',
        marginLeft: 10
    },
    stateStyle: {
        fontSize: 20,
        fontWeight: '400'
    },
    rowStyle: {
        flexDirection: 'row',
        marginVertical: 10
    }
})

export default UserScreen;