import React from 'react';
import { View, Text, Button, Image } from 'react-native'; // Import Image
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/StyleSheet';
import { TouchableOpacity } from 'react-native';

const OnboardingScreen = () => {
    const navigation = useNavigation();

    const handleButtonPress = () => {
        navigation.navigate('OnboardingStack', { screen: 'Login' });
    };

    return (
        <View style={[styles.container, {}]}>

            <View style={{ paddingHorizontal: 20, }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={require('../assets/images/weirdCloud.png')}
                        style={{ width: 250, height: 300, marginTop: 280}}
                    />
                </View>
                <Text style={[styles.text, { fontSize: 40, marginBottom: -24, fontWeight: 300,  marginTop: 300 }]}>Welcome to</Text>
                <Text style={[styles.text, { fontSize: 64, fontWeight: 600, marginBottom: -10 }]}>FocusMe.</Text>
                <Text style={[styles.text, { fontSize: 20, fontWeight: 300, marginBottom: 24 }]}>Your Telepathic Study Partner</Text>

                <TouchableOpacity style={[styles.blackFilledButton, { marginBottom: 13, }]} onPress={handleButtonPress}>
                    <Text style={[styles.text, { textAlign: 'center', fontSize: 20, fontWeight: 600, color: 'white', paddingTop: 9 }]}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.blackOutlineButton, {}]} onPress={handleButtonPress}>
                    <Text style={[styles.text, { textAlign: 'center', fontSize: 20, fontWeight: 600, paddingTop: 9, }]}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.fakeBottomNav}></View>
        </View>
    );
};

export default OnboardingScreen;