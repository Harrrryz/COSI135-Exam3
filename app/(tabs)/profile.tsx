import { useUserContext } from '@/context/UserContext';
import React, { useState } from 'react';
import { Alert, Button, Keyboard, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

export default function ProfileScreen() {
  const { user, setUser } = useUserContext();

  // Local state for form inputs, initialized from context
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age.toString());
  const [weight, setWeight] = useState(user.weight.toString());
  const [height, setHeight] = useState(user.height.toString());

  const handleSave = () => {
    const ageNum = parseFloat(age);
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (isNaN(ageNum) || isNaN(weightNum) || isNaN(heightNum)) {
      Alert.alert('Invalid Input', 'Please enter valid numbers for age, weight, and height.');
      return;
    }

    setUser({
      name,
      age: ageNum,
      weight: weightNum,
      height: heightNum,
    });

    Alert.alert('Profile Saved', 'Your information has been updated.');
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Text style={styles.title}>Profile</Text>
      </TouchableWithoutFeedback>
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />

        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
          placeholder="Enter your age"
        />

        <Text style={styles.label}>Weight (lbs)</Text>
        <TextInput
          style={styles.input}
          value={weight}
          onChangeText={setWeight}
          keyboardType="numeric"
          placeholder="Enter your weight in pounds"
        />

        <Text style={styles.label}>Height (inches)</Text>
        <TextInput
          style={styles.input}
          value={height}
          onChangeText={setHeight}
          keyboardType="numeric"
          placeholder="Enter your height in inches"
        />

        <View style={styles.buttonContainer}>
          <Button title="Save Profile" onPress={handleSave} color={Platform.OS === 'ios' ? '#fff' : '#007AFF'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: Platform.OS === 'ios' ? '#007AFF' : 'transparent',
    borderRadius: 8,
  },
});