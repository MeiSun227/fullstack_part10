import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text'
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#24292e',
        flexDirection:'row',
        display:'flex',
    },
    actionTouchable: {
        flexGrow: 1,
        paddingBottom: 10,
        justifyContent:'space-between'

    },
    actionTouchable1: {
        flexGrow:1,
        marginHorizontal:20,
        flexDirection:'row-reverse',
        justifyContent:'space-between'
    },
    scollviewStyle: {
        marginHorizontal: 10
    }

});

const Appbar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} style={styles.scollviewStyle}>
                <TouchableOpacity style={styles.actionTouchable}>
                    <Link to="/" component={TouchableOpacity}>
                        <Text fontWeight="bold" fontSize="subheading" color="textSecondary">Repositories</Text>
                    </Link>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionTouchable1}>
                    <Link to="/SignIn" component={TouchableOpacity}>
                        <Text fontWeight="bold" fontSize="subheading" color="textSecondary">Sign in</Text>
                    </Link>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}


export default Appbar;