import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import screens
import HomeScreen from './screens/HomeScreen';
import TemplateScreen from './screens/TemplateScreen';
import EditorScreen from './screens/EditorScreen';
import PreviewScreen from './screens/PreviewScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#FF5A8C',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Birthday Card Creator' }} 
          />
          <Stack.Screen 
            name="Templates" 
            component={TemplateScreen} 
            options={{ title: 'Choose Template' }} 
          />
          <Stack.Screen 
            name="Editor" 
            component={EditorScreen} 
            options={{ title: 'Customize Card' }} 
          />
          <Stack.Screen 
            name="Preview" 
            component={PreviewScreen} 
            options={{ title: 'Preview Card' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}