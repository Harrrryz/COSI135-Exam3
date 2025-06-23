import { useUserContext } from '@/context/UserContext';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function BmiScreen() {
  const { user } = useUserContext();

  // Calculate BMI, check for height > 0 to avoid division by zero
  const bmi =
    user.height > 0
      ? (user.weight / (user.height * user.height)) * 703
      : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <Text style={styles.text}>height: {user.height}</Text>
      <Text style={styles.text}>weight: {user.weight}</Text>
      <Text style={styles.text}>bmi: {bmi.toFixed(4)}</Text>
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