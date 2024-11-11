import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      Alert.alert('Login Success', 'Welcome to Ftamore!');
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      
      {/* Logo Image */}
      <Image 
        source={require('../assets/logo.png')} // Make sure the logo image is in the correct path
        style={styles.logo}
        resizeMode="contain" // Ensures the image scales well
      />
      
      <Text style={styles.title}>Fatmore</Text>
      
      {/* Username input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="#7f5539"
      />
      
      {/* Password input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholderTextColor="#7f5539"
      />
      
      {/* Link to Home as a Button */}
      <TouchableOpacity style={styles.homeButton}>
        <Link href="/home" style={styles.homeButtonText}>
          Login
        </Link>
      </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f55173', // Change background color to #f55173
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    color: '#7f5539', // Dark brown for title
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#e6ccb2', // Light tan for input fields
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    color: '#7f5539', // Dark brown for input text
    shadowColor: '#9c6644', // Medium brown shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#ddb892', // Warm tan for button
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    shadowColor: '#9c6644', // Medium brown for shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#7f5539', // Dark brown for button text
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linkText: {
    marginTop: 20,
    fontSize: 18,
    color: '#9c6644', // Medium brown for link text
    fontWeight: 'bold',
  },
  homeButton: {
    marginTop: 20,
    backgroundColor: '#ddb892', // Matching the button background color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    shadowColor: '#9c6644', // Shadow for the button
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  homeButtonText: {
    color: '#7f5539', // Dark brown text for the home button
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

