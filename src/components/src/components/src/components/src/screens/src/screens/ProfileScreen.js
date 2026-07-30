import React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Card from '../components/Card';
import Button from '../components/Button';

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <ThemedText type="title" style={styles.header}>
            Profile
          </ThemedText>

          <ThemedView style={styles.avatarContainer}>
            <ThemedView style={styles.avatar}>
              <ThemedText type="title">👤</ThemedText>
            </ThemedView>
            <ThemedText type="subtitle" style={styles.name}>
              John Doe
            </ThemedText>
            <ThemedText type="caption">john.doe@example.com</ThemedText>
          </ThemedView>

          <Card title="Account Info">
            <ThemedText>Member since 2024</ThemedText>
            <ThemedText>Pro Plan</ThemedText>
          </Card>

          <Card title="Stats">
            <ThemedText>12 Projects</ThemedText>
            <ThemedText>48 Tasks Completed</ThemedText>
          </Card>

          <Button 
            title="Edit Profile" 
            variant="secondary"
            style={styles.editButton}
          />
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
    marginBottom: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E1E8ED',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  name: {
    marginBottom: 4,
  },
  editButton: {
    marginTop: 8,
  },
});
