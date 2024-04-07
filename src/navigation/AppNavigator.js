import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/HomePage';
import CreateEventScreen from '../screens/CreateEventScreen';
import OnboardingScreen from '../screens/OnboardingScreen'; // Import the new screen
import { AuthContext } from './AuthContext';
import LoginScreen from '../screens/LoginScreen';

const HomeStack = createStackNavigator();
const OnboardingStack = createStackNavigator(); // Create a new stack navigator for the Onboarding tab
const Tab = createBottomTabNavigator();

// Stack navigator for the Home tab
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        name="Home"
        component={HomePage}
        options={{ title: 'Home' }}
      />
      <HomeStack.Screen
        name="CreateEvent"
        component={CreateEventScreen}
        options={{ title: 'Create Event' }}
      />
      {/* You can add more screens to the home stack as needed */}
    </HomeStack.Navigator>
  );
}

// Stack navigator for the Onboarding tab
function OnboardingStackScreen() {
  return (
    <OnboardingStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true, }}>
      <OnboardingStack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ title: 'Onboarding' }}
      />
      <OnboardingStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: 'Login' }}
      />
      {/* You can add more screens to the onboarding stack as needed */}
    </OnboardingStack.Navigator>
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: [{ display: 'flex' }, null], // Make sure this style aligns with what you need for your tabs
          // Add your tabBarIcon configuration here
        })}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStackScreen}
          options={{ title: 'Home' }}
        />
        <Tab.Screen
          name="OnboardingStack"
          component={OnboardingStackScreen}
          options={{ title: 'Onboarding' }}
        />
        {/* Place other tabs here if needed */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;