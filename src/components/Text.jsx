import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
    borderWidth: theme.borderWidth.normal,

  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  borderWidthSmall:{
    borderWidth:theme.borderWidth.small,
  },
  colorTage:{
    color: theme.colors.tag,
  },

});


const Text = ({ color, fontSize, fontWeight,borderWidth, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color==='tag'&& styles.colorTage,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    borderWidth==='border' && styles.borderWidthSmall,
  ];

  return <NativeText style={textStyle}{...props} />;
};

export default Text;