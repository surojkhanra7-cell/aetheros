import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function Button({ 
  title, 
  onPress, 
  variant = 'primary', 
  style, 
  textStyle,
  disabled = false 
}) {
  const { theme } = useTheme();

  const backgroundColor = {
    primary: disabled ? theme.border : theme.tint,
    secondary: 'transparent',
    outline: 'transparent',
  }[variant];

  const textColor = {
    primary: '#FFFFFF',
    secondary: theme.tint,
    outline: theme.tint,
  }[variant];

  const borderStyle = variant === 'outline' ? {
    borderWidth: 1.5,
    borderColor: theme.tint,
  } : {};

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      style={[
        styles.button,
        { backgroundColor },
        borderStyle,
        disabled && styles.disabled,
        style,
      ]}
    >
      <Text style={[styles.text, { color: textColor }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  disabled: {
    opacity: 0.5,
  },
});
