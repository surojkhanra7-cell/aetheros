import React from 'react';
import { StyleSheet, ScrollView, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import { useTheme } from '../context/ThemeContext';

function SettingItem({ label, value, onValueChange, description }) {
  const { theme } = useTheme();
  
  return (
    <ThemedView style={[styles.settingItem, { borderBottomColor: theme.border }]}>
      <ThemedView style={styles.settingText}>
        <ThemedText type="subtitle">{label}</ThemedText>
        {description && <ThemedText type="caption">{description}</ThemedText>}
      </ThemedView>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: theme.border, true: theme.tint }}
        thumbColor="#FFFFFF"
      />
    </ThemedView>
  );
}

export default function SettingsScreen() {
  const { isDark, toggleTheme } = useTheme();
  const [notifications, setNotifications] = React.useState(true);

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <ThemedText type="title" style={styles.header}>
            Settings
          </ThemedText>

          <ThemedText type="subtitle" style={styles.section}>
            Appearance
          </ThemedText>
          <SettingItem
            label="Dark Mode"
            description="Use dark theme across the app"
            value={isDark}
            onValueChange={toggleTheme}
          />

          <ThemedText type="subtitle" style={styles.section}>
            Notifications
          </ThemedText>
          <SettingItem
            label="Push Notifications"
            description="Receive alerts and updates"
            value={notifications}
            onValueChange={setNotifications}
          />

          <ThemedView style={styles.footer}>
            <ThemedText type="caption">Version 1.0.0</ThemedText>
          </ThemedView>
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
    marginBottom: 24,
  },
  section: {
    marginTop: 16,
    marginBottom: 8,
    opacity: 0.7,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  settingText: {
    flex: 1,
    marginRight: 12,
  },
  footer: {
    marginTop: 40,
    alignItems: 'center',
  },
});
                    
