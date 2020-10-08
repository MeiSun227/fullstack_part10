import React from 'react';
import { View, StyleSheet,TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text'

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor:'#24292e',
        padding:15
    }
    
});

const Appbar = () => {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text fontWeight="bold" fontSize="subheading" color="textSecondary">Repositories</Text>
                    </View>
            </TouchableWithoutFeedback>
        </View>
    );
}


export default Appbar;