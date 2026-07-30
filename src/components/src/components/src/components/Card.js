import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import ThemedText from './ThemedText';

export default function Card({ title, description, onPress, children, style }) {
  const { theme } = useTheme();

  const CardWrapper = onPress ? TouchableOpacity : View;

  return (
    <CardWrapper
      onPress={onPress}
      activeOpacity={0.9}
      style={[
        styles.card,
        { 
          backgroundColor: theme.card,
          borderColor: theme.border,
          shadowColor: theme.text,
        },
        style,
      ]}
    >
      {title && <ThemedText type="subtitle">{title}</ThemedText>}
      {description && (
        <ThemedText type="caption" style={styles.description}>
          {description}
        </ThemedText>
      )}
      {children}
    </CardWrapper>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 20,
    marginVertical: 8,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  description: {
    marginTop: 6,
  },
});
