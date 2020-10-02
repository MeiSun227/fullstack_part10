import React from 'react';
import { View, Text,StyleSheet,TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor:'#24292e',
        padding:15
        // ...
    },
    text:{
        color:'white',
        fontSize:20
    }

});

const Appbar = () => {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.text}>Repositories</Text>
                    </View>
            </TouchableWithoutFeedback>
        </View>
    );
}


export default Appbar;