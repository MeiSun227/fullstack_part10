import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    height: 40,
    width: 300,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    marginBottom: 5,
    borderWidth:0.5,
    flex:0,
    justifyContent:'space-evenly'
  },
  error:{
    borderColor:'red'
  }
});

const TextInput = (props) => {
  const textInputStyle = [styles.text,
    props.error ?  styles.error: styles.text 
  ];
  console.log(textInputStyle)

  return <NativeTextInput style={textInputStyle}{...props}/>;
};

export default TextInput;