import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/StyleSheet';
import { TouchableOpacity } from 'react-native';


const OnboardingScreen = () => {
    const navigation = useNavigation();

    const handleButtonPress = () => {
        navigation.navigate('OnboardingStack', { screen: 'Login' });
    };

    return (
        <View style = {styles.container}>
            <Text>Welcome to</Text>
            <Text>FocusMe</Text>
            <Text>Your Telepathic Study Partner</Text>
            <TouchableOpacity style={styles.blackFilledButton} onPress={handleButtonPress}>
                <Text style={{ color: 'white', textAlign: 'center', justifyContent: 'center', marginTop: 10 }}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.blackOutlineButton} onPress={handleButtonPress}>
                <Text style={{ color: 'black', textAlign: 'center', justifyContent: 'center', marginTop: 10 }}>
                    Sign Up
                </Text>
            </TouchableOpacity>
            <View style = {styles.fakeBottomNav}></View>

        </View>
    );
};

export default OnboardingScreen;