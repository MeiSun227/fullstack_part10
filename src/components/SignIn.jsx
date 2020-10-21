import React from 'react';
import SignInForm from './SignInForm';
import { Formik } from 'formik';
import * as yup from 'yup';

const initialValues = {
    username: '',
    password: ''
};

const validationSchema = yup.object().shape({
    username: yup
    .string()
    .required('username is required'),
    password: yup
    .string()
    .required('password id required'),
})
const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <Formik initialValues={initialValues}
         onSubmit={onSubmit}
         validationSchema={validationSchema}>
            {({ handleSubmit }) => 
            <SignInForm onSubmit={handleSubmit} />
            }
        </Formik>
    );
};

export default SignIn;