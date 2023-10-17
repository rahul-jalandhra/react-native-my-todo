/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './src/screens/homeScreen';

//navigations
const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        animationEnabled={true}
        animationTypeForReplace="pop"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
