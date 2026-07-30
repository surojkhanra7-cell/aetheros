import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function ThemedText({ style, children, type = 'default', ...props }) {
  const { theme } = useTheme();

  const textStyles = {
    default: styles.default,
    title: styles.title,
    subtitle: styles.subtitle,
    caption: styles.caption,
  };

  return (
    <Text 
      style={[{ color: theme.text }, textStyles[type], style]} 
      {...props}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
  },
  caption: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.7,
  },
});
