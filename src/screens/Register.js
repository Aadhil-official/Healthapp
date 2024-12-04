import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { registerUser } from '../services/api'; // Make sure the api file exists and has the registerUser function.
import { updateProfile } from 'firebase/auth';

function Register ({ navigation })  {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  console.log('Navigation:', navigation);

  const handleRegister = async () => {
    if (!email || !password || !username) {
      Alert.alert('Error', 'Please fill in all fields');
      return; // Early return to prevent further execution if validation fails
    }

    setLoading(true);

    try {
      const userData = { username, email, password };
      // Assuming registerUser is an async function that returns a promise.
      const response = await registerUser(userData); 
      if(response){
      await updateProfile(response, {displayName:username})
      
      // if (response.success) {
        Alert.alert('Success', 'User registered successfully');
        // You can navigate to login page after successful registration
        navigation.navigate('Login');
      } 
      else {
        // Alert.alert('Error', response.message || 'An error occurred');
        Alert.alert("User is already registerd...!")
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };


  // const handleRegister = () => {
  //   navigation.navigate('Login'); // This should work correctly
  // };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title={loading ? 'Registering...' : 'Register'} onPress={handleRegister}  />
    </View>
  );
};



export default Register;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8, borderRadius: 5 },
  title: { color: '#333333', fontWeight: 'bold', fontSize: 24, textAlign: 'center', marginBottom: 20 }
});