import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/StyleSheet';


const OnboardingScreen = () => {
    const navigation = useNavigation();

    const handleButtonPress = () => {
        navigation.navigate('OnboardingStack', { screen: 'Login' });
    };

    return (
        <View style = {styles.container}>
            <Text>Welcome to the Onboarding Screen!</Text>
            <Button title="Login" onPress={handleButtonPress} />
            <Button title="Sign Up" onPress={handleButtonPress} />
            <View style = {styles.fakeBottomNav}></View>

        </View>
    );
};

export default OnboardingScreen;