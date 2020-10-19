import React from 'react';
import FormikTextInput from './FormikTextInput'
import { View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    formView: {
        marginBottom:10,
        padding: 20,
        backgroundColor: 'white',
        flex:1

    }
})

const SignInForm = ({ onSubmit }) => {

    return (
        <View style={styles.formView}>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput secureTextEntry={true} name="password" placeholder="Password" />
            <Button onPress={onSubmit} title="Sign in" />
        </View>
    );
};
export default SignInForm;