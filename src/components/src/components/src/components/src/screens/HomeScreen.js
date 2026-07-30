import React, { useState } from 'react';
import { StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Button from '../components/Button';
import Card from '../components/Card';
import { useTheme } from '../context/ThemeContext';

export default function HomeScreen() {
  const { theme, toggleTheme } = useTheme();
  const [refreshing, setRefreshing] = useState(false);
  const [count, setCount] = useState(0);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={theme.tint}
            />
          }
        >
          <ThemedText type="title" style={styles.header}>
            Welcome Back 👋
          </ThemedText>
          
          <ThemedText type="caption" style={styles.subheader}>
            Here's what's happening today
          </ThemedText>

          <Card title="Quick Stats">
            <ThemedText type="subtitle" style={{ color: theme.tint }}>
              Counter: {count}
            </ThemedText>
            <ThemedText type="caption">
              Tap the button below to increment
            </ThemedText>
            <Button 
              title="Increment" 
              onPress={() => setCount(c => c + 1)}
              style={styles.button}
            />
          </Card>

          <Card 
            title="Appearance" 
            description="Toggle between light and dark mode"
          >
            <Button 
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              variant="outline"
              onPress={toggleTheme}
            />
          </Card>

          <Card title="Navigation Example">
            <ThemedText type="caption">
              This card demonstrates the reusable component pattern
            </ThemedText>
          </Card>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 4,
  },
  subheader: {
    marginBottom: 20,
  },
  button: {
    marginTop: 12,
  },
});
                     
