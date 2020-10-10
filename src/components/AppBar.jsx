import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text'
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#24292e',
        display:'flex'
    },
    actionTouchable: {
        flexGrow: 2,
        flexDirection:'column',  
        alignSelf:'flex-start',
        justifyContent:'space-around',
        paddingTop:10,
        marginHorizontal:10
    },
    actionTouchable1: {
        flexGrow: 1,
       alignItems:'flex-end',
        flexDirection:'column',  
        marginTop:-10,
        alignContent:'flex-end'
    },

});

const Appbar = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.actionTouchable}>
                <Link to ="/" component={TouchableOpacity}>
                <Text fontWeight="bold" fontSize="subheading" color="textSecondary">Repositories</Text>
                </Link>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionTouchable1}>
                 <Link to="/SignIn" component={TouchableOpacity}>
                <Text fontWeight="bold" fontSize="subheading" color="textSecondary">Sign in</Text>
              </Link>
                </TouchableOpacity>
           
        </View>
    );
}


export default Appbar;