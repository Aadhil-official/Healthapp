import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Login from "./src/screens/Login"
import Register from './src/screens/Register';
import { UserProvider } from './src/Context/SendContaxt';

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Welcome to Home' }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Welcome to Login' }} // Customize header
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ title: 'Welcome to Register' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
