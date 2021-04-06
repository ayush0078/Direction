import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Location = (props) => {
    return(
    <View style={styles.background}>
        <Text style={styles.text}>{props.name}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        width: 300,
        borderRadius: 5,
        marginVertical: 40
    },
    text: {
        fontSize: 18,
        paddingTop: 13,
        paddingLeft: 10,
        
    }
})

export default Location;