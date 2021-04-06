import React from 'react';
import {View, Button, StyleSheet, Linking} from 'react-native';

const SearchButton = (props) => {

    return (
        <View style={styles.searchBox}>
            <Button  
                title='Search' 
                color={'#fff'}
                onPress={() => Linking.openURL(`https://www.google.com/maps/dir/?api=1${props.origin}${props.destination}${props.dir_action}`)} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBox: {
        width: 308,
        height: 40,
        backgroundColor: '#71C9CE',
        borderRadius: 10,
        marginTop: 40
    },
})

export default SearchButton;