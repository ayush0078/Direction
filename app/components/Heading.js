import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

const Heading = (props) => {
    return (
        <View>
            <Text style={styles.text}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default Heading;