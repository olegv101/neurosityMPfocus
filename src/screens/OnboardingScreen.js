import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
    const navigation = useNavigation();

    const handleButtonPress = () => {
        navigation.navigate('OnboardingStack', { screen: 'Login' });
    };

    return (
        <View>
            <Text>Welcome to the Onboarding Screen!</Text>
            <Button title="Go to Next Screen" onPress={handleButtonPress} />
        </View>
    );
};

export default OnboardingScreen;