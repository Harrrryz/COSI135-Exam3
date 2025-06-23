import { useUserContext } from '@/context/UserContext';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AgeScreen() {
  const { user } = useUserContext();

  const ageInWeeks = user.age * 52.143;
  const ageInDays = user.age * 365.25;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Age Calculator</Text>
      <Text style={styles.text}>age in years: {user.age.toFixed(2)}</Text>
      <Text style={styles.text}>age in weeks: {ageInWeeks.toFixed(4)}</Text>
      <Text style={styles.text}>age in days: {ageInDays.toFixed(4)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    lineHeight: 30,
  },
});