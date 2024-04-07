import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/StyleSheet';
import { TouchableOpacity } from 'react-native';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
    };

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.blackFilledButton} onPress={handleLogin}>
                <Text style={{ color: 'white', textAlign: 'center', justifyContent: 'center', marginTop: 10 }}>
                    Login
                </Text>
            </TouchableOpacity>
            <View style = {styles.fakeBottomNav}></View>
        </View>
    );
};

export default LoginScreen;